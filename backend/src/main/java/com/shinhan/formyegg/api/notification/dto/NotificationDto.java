package com.shinhan.formyegg.api.notification.dto;



import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NotificationDto {

    private String title;
    private String content;
//    private String token;
}