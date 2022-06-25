import styles from "../App.module.css";
import { DogStore, setDogStore } from "../store/DogStore.js";
import { InputGroup, FormControl } from "solid-bootstrap";
export default function SetDogStoreName(props) 
  {
    return (
      <div class={styles.App}>
        <InputGroup className="mb-3">
          <InputGroup.Text>name</InputGroup.Text>
          <FormControl placeholder="name" onInput={(e)=>{setDogStore({name: e.currentTarget.value})}}/>
        </InputGroup>
      </div>
    );
  }