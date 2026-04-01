"use client";

import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120916] text-white">
      <div className="w-[420px] rounded-[28px] border border-white/10 bg-white/8 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-4xl font-bold">회원가입</h1>
        <p className="mb-6 text-white/60">LoveLog 회원가입 페이지입니다.</p>

        <div className="space-y-3">
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 outline-none placeholder:text-white/40"
            placeholder="아이디"
          />
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 outline-none placeholder:text-white/40"
            placeholder="이름"
          />
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 outline-none placeholder:text-white/40"
            placeholder="이메일"
          />
          <input
            type="password"
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 outline-none placeholder:text-white/40"
            placeholder="비밀번호"
          />
        </div>

        <button
          onClick={handleLogin}
          className="mt-4 h-12 w-full rounded-2xl bg-gradient-to-r from-[#ff7eb3] via-[#ff5ca2] to-[#ff4f93] font-bold"
        >
          회원가입
        </button>
      </div>
    </main>
  );
}
