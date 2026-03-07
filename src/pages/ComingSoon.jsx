import { Link } from "react-router";

function ComingSoon() {
  return (
    <div className="background-comingsoon">
      <span className="text-3xl mb-2">😴</span>
      <h1>این بخش به زودی در دسترس قرار میگیره</h1>

      <Link
        to="/home"
        className="btn btn-md btn-success text-white rounded-full"
      >
        برگرد به صفحه اصلی
      </Link>
    </div>
  );
}

export default ComingSoon;
