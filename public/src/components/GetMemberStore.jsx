import { MemberStore, setMemberStore } from "../store/MemberStore.js" ;
import { TempMemberStore, setTempMemberStore } from "../store/TempMemberStore.js" ;
import { Table } from "solid-bootstrap";
import { For   } from "solid-js";
import GetMemberTableRow from "./GetMemberTableRow";
export default function GetMemberStore(props) {
    return (
      <div >
        <h1>GetMemberStore</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">#      </th>
              <th scope="col">ID     </th>
              <th scope="col">Name   </th>
              <th scope="col">Email  </th>
              <th scope="col">Statues</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            <For each={MemberStore.members} fallback={<div>loding...</div>}>
              {
                (item, index) => (
                    <GetMemberTableRow index={index()} item={item} temp={TempMemberStore}/>
                  )
              }
            </For>
          </tbody>
        </Table>
      </div>
    );
  };