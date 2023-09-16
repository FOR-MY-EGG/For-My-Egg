package com.shinhan.formyegg.api.notification.controller;

import com.shinhan.formyegg.api.notification.dto.NotificationDto;
import com.shinhan.formyegg.api.notification.service.NotificationService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/notification")
public class NotificationController {
    private final NotificationService notificationService;
    @PostMapping
    public String sendNotifiactionByToken(Authentication authentication, @RequestBody NotificationDto notificationDto){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Long memberId = Long.parseLong(userDetails.getUsername());
        return notificationService.sendNotificationByToken(memberId, notificationDto);
    }
}