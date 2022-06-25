import styles from "../App.module.css";
import GetMemberStore from "../components/GetMemberStore.jsx";
export default function AboutUs() 
  {
    console.log("src/page/AboutUs.jsx")
    return (
      <div class={styles.App}>
        <GetMemberStore/>
      </div>
    );
  }