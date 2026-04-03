package com.jihee.lovelog.domain.user.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequestDto {

    @NotBlank
    private String loginId;

    @NotBlank
    private String password;

    @NotBlank
    private String userName;

    @Email
    private String email;

    private String birthDate;

    private String profileImgUrl;

    @NotBlank
    private String UserCategory;
}
