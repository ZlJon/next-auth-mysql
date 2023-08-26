"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterFrom = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country_residency: "united States",
    country_living: "united States",
    password: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const res = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      return res;
    }
    return null;
  };

  return (
    <div>
      <div>
        <div>
          <Link href="/">메인 홈으로</Link>
        </div>
        <div>
          <h2>Open Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={(e) =>
                  setUser((p) => ({ ...p, firstName: e.target.value }))
                }
                required
                placeholder="kim"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={(e) =>
                  setUser((p) => ({ ...p, lastName: e.target.value }))
                }
                required
                placeholder="jon sen"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) =>
                  setUser((p) => ({ ...p, email: e.target.value }))
                }
                required
                placeholder="test@test.com"
                autoComplete="off"
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
                required
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={(e) =>
                  setUser((p) => ({ ...p, phone: e.target.value }))
                }
                required
                autoComplete="off"
              />
            </div>
            <button type="submit">가입</button>
            <p>가입되어있다면 "로그인" 하세요</p>
            <Link href="/login">로그인하기</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
