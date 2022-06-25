import styles from "../App.module.css";
import GetDog from "../components/GetDog.jsx";
import GetDogStore from "../components/GetDogStore.jsx";
import SetDogStore from "../components/SetDogStore.jsx";
export default function Dog() 
  {
    console.log("src/page/Dog.jsx")
    return (
      <div class={styles.App}>
        <GetDogStore /><br/>
        <SetDogStore /><br/>
        <GetDog type="puppies" color="black" /><br/>
      </div>
    );
  }