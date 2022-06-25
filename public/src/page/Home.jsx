import logo from "../logo.svg";
import styles from "../App.module.css";
export default function Home() 
  {
    console.log("src/page/Home.jsx")
    return (
      <div class={styles.App}>
        <img src={logo} class={styles.logo} alt="logo" />
        <br/>
        <br/>
        <p>
          102IEA0016 網站後端程式設計<br/>
          課堂操作練習<br/>
          日資工二甲 U0924043 陳皇任
        </p>
        <a
          class={styles.link}
          href="https://365nuu.sharepoint.com/:f:/s/110-2_U0924043_ProjectStorageArea/EkiM-tya1BJArBSXXgyxA5QBLmoDeAioKmBkAWjGJav0IQ?e=B63xyf"
        >
          <code>source code</code>
        </a>
      </div>
    );
  }