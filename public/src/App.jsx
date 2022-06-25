import styles   from "./App.module.css";
import MainMenu from "./components/MainMenu.jsx";
import Home     from "./page/Home.jsx";
import Dog      from "./page/Dog.jsx";
import Features from "./page/Features.jsx";
import AboutUs  from "./page/AboutUs.jsx";
import { onMount } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { socket } from "./network/websocket";

export default function App() {
  onMount(() =>
    {
      socket.on("update-member", (data) => 
        {
          console.log(`${socket.id} update a member:`, data);
          alert(JSON.stringify(data, null, 2));
        });
      socket.on("delete-member", (data) => 
        {
          console.log(`${socket.id} delete a member:`, data);
          alert(JSON.stringify(data, null, 2));
        });
    });
  return (
    <div class={styles.App}>
      <MainMenu/>
      <header class={styles.header}>
        <Routes>
          <Route path="/        " element={<Home    />}></Route>
          <Route path="/Dog     " element={<Dog     />}></Route>
          <Route path="/Features" element={<Features/>}></Route>
          <Route path="/AboutUs"  element={<AboutUs />}></Route>
        </Routes>
      </header>
    </div>
  );
}