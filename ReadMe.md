#

# Lovelog - 커플을 위한 추억 기록 서비스

> 커플 간의 추억과 일정을 기록하는 웹 서비스 💕

<strong>version 1 </strong> <br/>
<strong>개발자 :</strong> KimJiHee ( 김지희 ) <br/>

---

## 🛠 Tech Stack

### 🎨 Frontend

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js)
![Ant Design](https://img.shields.io/badge/-AntDesign-0170FE?logo=ant-design)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss)
![Zustand](https://img.shields.io/badge/-Zustand-000000)
![React Query](https://img.shields.io/badge/-ReactQuery-FF4154?logo=react-query)
![Axios](https://img.shields.io/badge/-Axios-5A29E4)

### ⚙️ Backend

![Spring Boot](https://img.shields.io/badge/-SpringBoot-6DB33F?logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/-SpringSecurity-6DB33F?logo=springsecurity&logoColor=white)
![JPA](https://img.shields.io/badge/-JPA-59666C)
![QueryDSL](https://img.shields.io/badge/-QueryDSL-000000)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?logo=swagger&logoColor=black)
![JUnit5](https://img.shields.io/badge/-JUnit5-25A162?logo=junit5&logoColor=white)
![Mockito](https://img.shields.io/badge/-Mockito-000000)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?logo=amazonaws&logoColor=white)

---

## ✨ 주요 기능

- 🔐 회원가입 / 로그인 (JWT 인증)
- 💑 커플 연결 기능
- 📅 일정 관리 (캘린더)
- 📸 추억 기록 (이미지 업로드)
- ❤️ 디데이 관리
- 🔔 알림 기능

---

## 🏗️ 아키텍처

- Frontend: Next.js (CSR + SSR 혼합)
- Backend: Spring Boot REST API
- Database: PostgreSQL
- 인증: JWT (Access / Refresh Token)
- 상태관리: Zustand + React Query

---

## 실행방법

### Frontend

```bash
yarn install
yarn dev
```

### 초기 화면 와이어 프레임

![와이어프레임](./ReadMe_images/Wireframe.jpg)

---

## 🌱 향후 계획

```md
## 🌱 향후 계획

- 알림 기능 고도화 (실시간)
- 모바일 반응형 개선
- 소셜 로그인 추가 (Google, Kakao)
- CI/CD 구축
```

---

## 화면 설명

### 🔹 로그인 인트로 화면

- 최초 접속 시 3초간 인트로 화면을 보여준 후 로그인 화면으로 전환
- React `useEffect` + `setTimeout`을 사용하여 화면 전환 구현
- CSS 애니메이션을 활용하여 하트(❤)와 반짝이는 효과를 추가
- 하단에는 SVG 기반 wave 애니메이션을 적용하여 감성적인 UI 구성
- Tailwind + 커스텀 keyframes를 조합하여 부드러운 등장 효과 구현

![login_loading](./ReadMe_images/login_loading.png)

### 🔹 로그인 화면

- glassmorphism 스타일을 적용한 로그인 카드 UI 구현
- TailwindCSS 기반으로 blur / 투명도 / border를 활용한 디자인
- 로그인 버튼 클릭 시 Next.js `useRouter`를 이용해 `/dashboard`로 이동
- 입력창 focus 시 색상 변화 및 인터랙션 추가
- 전체 배경은 radial-gradient + linear-gradient를 조합하여 감성적인 다크 테마 구성

![loginPage](./ReadMe_images/loginPage.png)

### 🔹 사이드바 펼침 상태

- Ant Design `Layout` + `Sider` + `Menu`를 활용하여 대시보드 구조 구성
- 메뉴 구성: 홈, 기념일, 추억, 알림, 내정보, 사용자관리, 코드관리
- hover 시 사이드바가 확장되도록 UX 설계
- 메뉴 hover 시 그라디언트 + 그림자 효과 적용
- ConfigProvider를 활용하여 antd 기본 blue 테마를 커스텀 핑크 테마로 변경
- glassmorphism 스타일 적용 (blur + 투명도)

![sidebar_open](./ReadMe_images/sidebar_open.png)

### 🔹 사이드바 접힘 상태

- `collapsed` 상태에서 아이콘만 표시되도록 구현
- hover 시 부드럽게 확장되도록 transition 적용
- 접힘 상태에서 로고 및 프로필 영역이 중앙 정렬되도록 UI 개선
- 텍스트 영역은 width 0 + opacity 0 처리하여 자연스럽게 숨김 처리
- 메뉴 아이콘 정렬 문제를 해결하기 위해 flex 정렬 구조 재설계

![sidebar_close](./ReadMe_images/sidebar_close.png)

## 🎯 UI/UX 개선 포인트

- 커스텀 마우스 커서 구현 (FancyCursor)
  - requestAnimationFrame 기반 부드러운 마우스 추적
  - hover 대상에 따라 커서 크기 및 스타일 변화

- Ant Design 다크 테마 커스터마이징
  - 기본 색상(blue) 제거 후 핑크/퍼플 테마 적용
  - ConfigProvider를 통해 전역 토큰 관리

- 반응형 및 인터랙션 중심 UI 설계
  - hover 기반 사이드바 확장 UX
  - 애니메이션을 활용한 자연스러운 화면 전환
