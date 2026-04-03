package com.jihee.lovelog.domain.user.service;

import com.jihee.lovelog.domain.user.dto.request.SignupRequestDto;
import com.jihee.lovelog.domain.user.dto.response.UserResponseDto;
import com.jihee.lovelog.domain.user.entity.User;
import com.jihee.lovelog.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponseDto signup(SignupRequestDto request) {

        if(userRepository.existsByLoginId(request.getLoginId())) {
            throw new IllegalArgumentException("이미 사용 중인 아이디 입니다.");
        }

        if(request.getEmail() != null && userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일 입니다.");
        }

        User user= User.builder()
                .loginId(request.getLoginId())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .userName(request.getUserName())
                .email(request.getEmail())
                .birthDate(
                        request.getBirthDate() != null ? LocalDateTime.parse(request.getBirthDate()) : null
                )
                .profileImgUrl(request.getProfileImgUrl())
                .userCategory(request.getUserCategory())
                .build();

        User saved = userRepository.save(user);

        return UserResponseDto.builder()
                .userId(saved.getUserId())
                .loginId(saved.getLoginId())
                .userName(saved.getUserName())
                .email(saved.getEmail())
                .build();
    }
}
