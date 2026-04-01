"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120916] text-white">
      {/* 배경 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,170,0.18),transparent_32%),linear-gradient(to_bottom,#0f0714_0%,#160a1b_35%,#24101f_70%,#2c1222_100%)]" />

      {/* 글로우 */}
      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[12%] left-[15%] h-[240px] w-[240px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-[22%] h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[130px]" />

      {/* 반짝이 */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <span className="sparkle sparkle-1" />
        <span className="sparkle sparkle-2" />
        <span className="sparkle sparkle-3" />
        <span className="sparkle sparkle-4" />
        <span className="sparkle sparkle-5" />
      </div>

      {/* 하트 */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <span className="heart heart-1">❤</span>
        <span className="heart heart-2">❤</span>
        <span className="heart heart-3">❤</span>
        <span className="heart heart-4">❤</span>
        <span className="heart heart-5">❤</span>
        <span className="heart heart-6">❤</span>
      </div>

      <div className="relative z-[3] px-6">
        {!showLogin ? <Intro /> : <Login />}
      </div>

      {/* 하단 웨이브 */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[190px] w-full overflow-hidden">
        <div className="absolute bottom-[18px] left-0 w-full opacity-35 blur-[10px] wave-rise-slow">
          <WaveBack />
        </div>

        <div className="absolute bottom-[6px] left-0 w-full opacity-55 blur-[4px] wave-rise-mid">
          <WaveMid />
        </div>

        <div className="absolute bottom-[-10px] left-0 w-full wave-rise-fast">
          <WaveFront />
        </div>
      </div>
    </main>
  );
}

function Intro() {
  return (
    <div className="text-center animate-fadeUp px-6">
      <div className="mb-4 inline-flex items-center justify-center rounded-full border border-pink-300/15 bg-white/5 px-4 py-1 text-sm tracking-[0.25em] text-pink-200/70 backdrop-blur-sm">
        LOVE MEMORY
      </div>

      <h1 className="mb-5 bg-gradient-to-b from-white to-pink-100 bg-clip-text text-6xl font-extrabold tracking-wide text-transparent drop-shadow-[0_4px_20px_rgba(255,120,170,0.2)]">
        LoveLog
      </h1>

      <div className="animate-heartbeat text-[88px] text-pink-400 drop-shadow-[0_0_24px_rgba(255,105,165,0.4)]">
        ❤
      </div>

      <p className="mt-5 text-sm tracking-[0.18em] text-white/55">
        우리의 소중한 시간을 기록해요
      </p>
    </div>
  );
}

function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="text-center animate-fadeUp">
      <div className="mb-4 inline-flex items-center justify-center rounded-full border border-pink-300/15 bg-white/5 px-4 py-1 text-sm tracking-[0.25em] text-pink-200/70 backdrop-blur-sm">
        LOVE MEMORY
      </div>

      <h1 className="mb-6 bg-gradient-to-b from-white to-pink-100 bg-clip-text text-6xl font-extrabold tracking-wide text-transparent drop-shadow-[0_4px_20px_rgba(255,120,170,0.2)]">
        LoveLog
      </h1>

      <div className="w-[360px] rounded-[30px] border border-white/10 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="space-y-3">
          <input
            className="h-13 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-pink-300/40 focus:bg-white/12"
            placeholder="아이디"
          />
          <input
            type="password"
            className="h-13 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-pink-300/40 focus:bg-white/12"
            placeholder="비밀번호"
          />
        </div>

        <button
          onClick={handleLogin}
          className="mt-4 h-13 w-full rounded-2xl bg-gradient-to-r from-[#ff7eb3] via-[#ff5ca2] to-[#ff4f93] font-bold text-white shadow-[0_10px_30px_rgba(255,79,147,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(255,79,147,0.45)] active:translate-y-[1px] active:scale-[0.99]"
        >
          로그인
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/45">
          <span>아직 계정이 없나요?</span>
          <button
            type="button"
            onClick={handleSignup}
            className="font-medium text-pink-200 transition hover:text-pink-100"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

function WaveBack() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="block h-[190px] w-full"
    >
      <path fill="rgba(255, 182, 193, 0.20)">
        <animate
          attributeName="d"
          dur="9s"
          repeatCount="indefinite"
          values="
            M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,218.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,208L48,197.3C96,187,192,165,288,160C384,155,480,165,576,181.3C672,197,768,219,864,229.3C960,240,1056,240,1152,224C1248,208,1344,176,1392,160L1440,144L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,218.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
          "
        />
      </path>
    </svg>
  );
}

function WaveMid() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="block h-[190px] w-full"
    >
      <path fill="rgba(255, 150, 190, 0.30)">
        <animate
          attributeName="d"
          dur="6.5s"
          repeatCount="indefinite"
          values="
            M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,202.7C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;

            M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,208C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;

            M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,202.7C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
          "
        />
      </path>
    </svg>
  );
}

function WaveFront() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="block h-[190px] w-full"
    >
      <path fill="rgba(255, 105, 165, 0.96)">
        <animate
          attributeName="d"
          dur="4.8s"
          repeatCount="indefinite"
          values="
            M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,224C672,235,768,245,864,240C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,208C672,203,768,213,864,224C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,224C672,235,768,245,864,240C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
          "
        />
      </path>
    </svg>
  );
}
