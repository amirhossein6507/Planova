import { Link } from "react-router";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <main>
      <h1 className={styles.logo}>
        <span>P</span>lanova
      </h1>
      <div className={styles.introduction}>
        <p>
          !اینجا قراره ذهنت آروم‌ تر باشه و هدفت واضح‌ تر
          <br />
          برای آینده‌ هدف مشخص کنی 🎯
          <br />
          کارهای روزانه‌ تو مرتب و منظم بچینی 🗂
          <br />
          پیشرفتتو ببینی و انگیزه بگیری 🚀
        </p>
        <div className="flex justify-center items-center bg-red pt-3">
          <Link to="/home" className={styles.button}>
            بزن بریم
          </Link>
        </div>
      </div>
    </main>
  );
}

export default StartPage;
