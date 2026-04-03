package com.jihee.lovelog.domain.user.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true, length = 50)
    private String loginId;

    @Column(nullable = false, length = 255)
    private String passwordHash;

    @Column(length = 100)
    private String userName;

    @Column(unique = true, length = 100)
    private String email;

    @Column
    private LocalDateTime birthDate;

    @Column(columnDefinition = "text")
    private String profileImgUrl;

    @Column(nullable = false, length = 50)
    private String userCategory;

    @Column(nullable = false)
    private Boolean IsActive;

    @Column(nullable = false)
    private Boolean IsDeleted;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.IsActive = true;
        this.IsDeleted = false;
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
