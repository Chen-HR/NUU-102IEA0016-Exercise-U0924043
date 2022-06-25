import { createStore } from "solid-js/store";

export const [TempMemberStore, setTempMemberStore]= createStore 
  (
    { 
      mode: "read",
      index: -1,
      data: 
        {
          id: 0, 
          name: "", 
          email: "", 
          status: "",
        }
    }
  );