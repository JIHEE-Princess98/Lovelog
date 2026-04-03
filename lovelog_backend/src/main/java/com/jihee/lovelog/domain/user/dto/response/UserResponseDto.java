package com.jihee.lovelog.domain.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserResponseDto {

    private Long userId;
    private String loginId;
    private String userName;
    private String email;
}
