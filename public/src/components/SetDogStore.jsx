import styles from "../App.module.css";
import SetDogStoreNumber from "../components/SetDogStoreNumber.jsx";
import SetDogStoreName from "../components/SetDogStoreName.jsx";
export default function SetDogStore(props) 
  {
    return (
      <div class={styles.App}>
        <SetDogStoreNumber/>
        <SetDogStoreName/>
      </div>
    );
  }