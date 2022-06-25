import styles from "../App.module.css";
import { DogStore, setDogStore } from "../store/DogStore.js";
export default function GetDogStore(props) 
  {
    return (
      <div class={styles.App}>
        <h1>GetDogStore</h1>
        number: {DogStore.number}, name: {DogStore.name}<br/>
        {props.children}
      </div>
    );
  }