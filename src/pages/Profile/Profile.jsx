import { useNavigate } from "react-router";
import styles from "./Profile.module.css";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className={`${styles.main} ${styles.background}`}>
      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center text-2xl p-3 absolute top-5 left-3 bg-white rounded-full w-9 h-9"
      >
        &larr;
      </button>
      <div className="flex flex-col justify-center items-center w-9/12 p-3 pt-7 text-white  rounded-3xl bg-neutral-100/50 shadow-2xl/20">
        <div className="w-18 h-18 bg-white rounded-full overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 w-full p-5 divide-neutral-300/50  divide-y text-[13px]">
          <h1 className="text-center text-xl">full name</h1>
          <div className="flex flex-row-reverse justify-between w-full pb-2">
            <p>تعداد اهداف روزانه</p>
            <span>100</span>
          </div>
          <div className="flex flex-row-reverse justify-between w-full pb-2">
            <p>تعداد اهداف طولانی</p>
            <span>100</span>
          </div>
        </div>
        <div className="bg-red-300/50 p-3 mt-2 rounded-2xl text-red-700">
          <p className="text-[13px]">
            <span className="font-bold text-red-900">نکته: </span>
            این برنامه از فضای ذخیره سازی داخلی مرورگر شما استفاده میکنه. لطفا
            برای درست کار کردن برنامه با استفاده از دکمه زیر اطلاعات رو هرچند
            وقت یک بار ریست کنید
          </p>
          <button className="btn btn-error btn-sm text-[12px] mt-2 rounded-full w-full text-white font-medium">
            پاک کردن دیتا های ارشیو
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
