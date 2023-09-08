package com.shinhan.formyegg.domain.memo.service;

import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import com.shinhan.formyegg.domain.invitation.repository.InvitationRepository;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import com.shinhan.formyegg.domain.memo.repository.MemoRepository;
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

    @Value("${memo.image.path}")
    private String imagePath;

    public MemoDto createMemo(Long memberId, MemoDto memoDto) throws IOException {
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId(memberId);
        String storedImageName = s3Uploader.upload(memoDto.getImageFile(), imagePath);
        Memo memo = memoRepository.save(Memo.of(invitation.get().getFamilyId().getFamilyId(), memoDto, storedImageName));
        return MemoDto.from(memo);
    }

    @Override
    public List<MemoDto> getMemoListByMonth(Long memberId, Long childId, int year, int month) {
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId(memberId);
        LocalDateTime startDate = LocalDateTime.of(LocalDate.of(year, month, 1), LocalTime.of(0,0,0));
        LocalDateTime endDate = LocalDateTime.of(LocalDate.of(year, month, 31), LocalTime.of(23,59,59));
        List<Memo> memos = memoRepository.findAllByGroupIdAndChildIdAndCreateDateBetween(Group.from(invitation.get().getFamilyId().getFamilyId()), Child.from(childId), startDate, endDate);
        return memos.stream().map(MemoDto::from).collect(Collectors.toList());
    }

    @Override
    public Optional<MemoDto> getMemoWhenToday(Long memberId, Long childId, int year, int month, int day) {
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId(memberId);
        LocalDateTime startDate = LocalDateTime.of(LocalDate.of(year, month, day), LocalTime.of(0,0,0));
        LocalDateTime endDate = LocalDateTime.of(LocalDate.of(year, month, day), LocalTime.of(23,59,59));
        List<Memo> memos = memoRepository.findAllByGroupIdAndChildIdAndCreateDateBetween(Group.from(invitation.get().getFamilyId().getFamilyId()), Child.from(childId), startDate, endDate);
        return Optional.ofNullable(MemoDto.from(memos.get(0)));
    }
}
