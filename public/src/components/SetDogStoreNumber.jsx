import styles from "../App.module.css";
import { DogStore, setDogStore } from "../store/DogStore.js";
import { Button, ButtonGroup } from "solid-bootstrap";
export default function SetDogStoreNumber(props) 
  {
    return (
      <div class={styles.App}>
        <ButtonGroup class="lg">
          <Button variant="primary" onClick={(e)=>{setDogStore({number: DogStore.number+1})}}>
            +1
          </Button>
          <Button variant="success" disabled>
            {DogStore.number}
          </Button>
          <Button variant="primary" onClick={(e)=>{setDogStore({number: DogStore.number-1})}}>
            -1
          </Button>
        </ButtonGroup>
      </div>
    );
  }