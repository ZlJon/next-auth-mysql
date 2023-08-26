import Link from "next/link";
import RegisterFrom from "./components/RegisterForm";

export default function Home() {
  return (
    <section>
      <h1>메인 홈</h1>
      <div>
        <p>로그인 하기</p>
        <Link href="/login">로그인</Link>
      </div>
      <div>
        <p>회원가입 하기</p>
        <Link href="/signup">회원가입</Link>
      </div>
    </section>
  );
}
