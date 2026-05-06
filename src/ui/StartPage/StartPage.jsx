import { Link } from "react-router";
import styles from "./StartPage.module.css";
import Btn from "../Btn";

function StartPage() {
  return (
    <main>
      <div className={styles.logo}>
        <span>Planova</span>
        <div></div>
      </div>
      <div className={styles.introduction}>
        <div className="">
          <ul className="list-disc space-y-2">
            <li>!اینجا قراره ذهنت آروم‌ تر باشه و هدفت واضح‌ تر</li>
            <li>برای آینده‌ هدف مشخص کنی</li>
            <li>کارهای روزانه‌ تو مرتب و منظم بچینی</li>
            <li>پیشرفتتو ببینی و انگیزه بگیری</li>
          </ul>
        </div>
        <div className="w-full">
          <Btn to="/home" type="black">
            بزن بریم
          </Btn>
        </div>
      </div>
    </main>
  );
}

export default StartPage;
