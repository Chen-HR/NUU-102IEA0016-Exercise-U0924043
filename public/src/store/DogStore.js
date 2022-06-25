import { createStore } from "solid-js/store";
export const [DogStore, setDogStore]=createStore
  (
    {
      number: 0, 
      name: "DogDogDog", 
    }
  );