package com.jihee.lovelog.domain.user.controller;

import com.jihee.lovelog.domain.user.dto.request.SignupRequestDto;
import com.jihee.lovelog.domain.user.dto.response.UserResponseDto;
import com.jihee.lovelog.domain.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<UserResponseDto> signup(@Valid @RequestBody SignupRequestDto request) {
        UserResponseDto responseDto = userService.signup(request);
        return ResponseEntity.ok(responseDto);
    }
}
