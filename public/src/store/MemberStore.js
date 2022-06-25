import { createStore } from "solid-js/store";
let members = [
    { id: 1, name: "David", email: "david@gmail.com", status: "active"    ,}, 
    { id: 2, name: "Brown", email: "brown@gmail.com", status: "in-active" ,}, 
    { id: 3, name: "Merry", email: "merry@gmail.com", status: "active"    ,}, 
    { id: 4, name: "Leefo", email: "Leefo@gmail.com", status: "in-active" ,}, 
    { id: 5, name: "Chouw", email: "chouw@gmail.com", status: "active"    ,}, 
  ];
export const [MemberStore, setMemberStore]= createStore 
  (
    {
      members: members
    }
  );