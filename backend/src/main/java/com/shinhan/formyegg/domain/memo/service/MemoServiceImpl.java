package com.shinhan.formyegg.domain.memo.service;

import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.account.repository.AccountRepository;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.group.repository.GroupRepository;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import com.shinhan.formyegg.domain.invitation.repository.InvitationRepository;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import com.shinhan.formyegg.domain.memo.repository.MemoRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.AccountException;
import com.shinhan.formyegg.global.error.exception.MemoException;
import com.shinhan.formyegg.global.util.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService{
    private final MemoRepository memoRepository;
    private final InvitationRepository invitationRepository;
    private final S3Uploader s3Uploader;
    private final ChildRepository childRepository;
    private final AccountRepository accountRepository;
    private int[] days = new int[] {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};


    @Value("${memo.image.path}")
    private String imagePath;

    public MemoDto createMemo(Long memberId, MemoDto memoDto) throws IOException {

        System.out.println("hi");
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(memberId);
        String storedImageName = null;
        if(memoDto.getImageFile() != null)
            storedImageName = s3Uploader.upload(memoDto.getImageFile(), imagePath);

        LocalDate today = LocalDate.now();
        Optional<Memo> memo = memoRepository.findMemoByCreateDate(today);
        if(memo.isPresent()) throw new MemoException(ErrorCode.ALREADY_EXIST_TODAY_MEMO);

        Optional<Child> child = childRepository.findAllByChildId(memoDto.getChildId());
        if(child.isEmpty()) throw new MemoException(ErrorCode.NOT_EXIST_KID);

        Optional<Account> account = accountRepository.findByAccountId(child.get().getAccountId().getAccountId());
        if(account.isEmpty()) throw new AccountException(ErrorCode.NOT_EXIST_ACCOUNT);


        System.out.println(memoDto.getAmount());
        System.out.println(account.get().getBalance());
        account.get().updateBalance(account.get().getBalance()+memoDto.getAmount());
        Memo save = memoRepository.save(Memo.of(invitation.get().getFamilyId().getFamilyId(), memoDto, storedImageName));

        return MemoDto.from(save);
    }

    @Override
    public List<MemoDto> getMemoListByMonth(Long memberId, Long childId) {
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(memberId);
//        LocalDateTime startDate = LocalDateTime.of(LocalDate.of(year, month, 1), LocalTime.of(0,0,0));
//        System.out.println(startDate);
//        LocalDateTime endDate = LocalDateTime.of(LocalDate.of(year, month, days[month-1]), LocalTime.of(23,59,59));
//        System.out.println(endDate);
//        List<Memo> memos = memoRepository.findAllByGroupId_FamilyIdAndChildId_ChildIdAndCreateDateBetween(invitation.get().getFamilyId().getFamilyId(), childId, startDate, endDate);
        List<Memo> memos = memoRepository.findAllByGroupId_FamilyIdAndChildId_ChildId(invitation.get().getFamilyId().getFamilyId(), childId);
        return memos.stream().map(MemoDto::from).collect(Collectors.toList());
    }

    @Override
    public MemoDto getMemoWhenToday(Long memberId, Long childId, int year, int month, int day) {
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(memberId);
        LocalDate today = LocalDate.of(year, month, day);
        Optional<Memo> memo = memoRepository.findMemoByGroupId_FamilyIdAndChildId_ChildIdAndCreateDate(invitation.get().getFamilyId().getFamilyId(), childId, today);
        if(memo.isEmpty()) throw new MemoException(ErrorCode.NOT_EXIST_TODAY_MEMO);

        return MemoDto.from(memo.get());
    }
}
