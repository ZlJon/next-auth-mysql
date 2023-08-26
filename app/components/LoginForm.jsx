"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      email: user.email,
      password: user.password,
    });
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
          />
        </div>
        <button type="submit">로그인</button>
        <p>혹시 가입하지 않았나요?</p>
        <Link href="/signup">가입하기</Link>
      </form>
    </div>
  );
};

export default LoginForm;
