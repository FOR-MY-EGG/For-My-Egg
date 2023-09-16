package com.shinhan.formyegg.api.notification.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import com.shinhan.formyegg.api.notification.dto.NotificationDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.MemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class NotificationService {
    private final FirebaseMessaging firebaseMessaging;
    private final MemberRepository memberRepository;

    public String sendNotificationByToken(Long memberId, NotificationDto notificationDto){
        Optional<Member> member = memberRepository.findByMemberId(memberId);

        if(member.isEmpty()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);

        if(member.get().getDeviceToken() == null) throw new MemberException(ErrorCode.NOT_EXIST_DEVICE_TOKEN);

        Notification notification = Notification.builder()
                .setTitle(notificationDto.getTitle())
                .setBody(notificationDto.getContent())
                .build();
        Message message = Message.builder()
                .setToken(member.get().getDeviceToken())
                .setNotification(notification)
                .build();

        try {
            firebaseMessaging.send(message);
        }catch (FirebaseMessagingException e){
            return "알림 보내기를 실패하였습니다.";
        }

        return "알림 보내기를 성공하였습니다.";
    }
}
