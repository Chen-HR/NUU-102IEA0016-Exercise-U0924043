import { InputGroup, FormControl } from "solid-bootstrap";
import { Switch, Match, createSignal, batch } from "solid-js";
import { MemberStore, setMemberStore } from "../store/MemberStore.js" ;
import { TempMemberStore, setTempMemberStore } from "../store/TempMemberStore.js" ;
import { socket } from "../network/websocket";
export default function GetMemberTableRow(props) 
  {
    //let index=props.index;
    let item=props.item;
    let temp=props.temp;
    const [TempMember, setTempMember]=createSignal(item);
    //const [Member, setMember]=createSignal(item);
    function cloneTempMember(params) 
      {
        const _tempMember={};
        for (let key in TempMember())
          {
            _tempMember[key]=TempMember()[key];
          }
        return _tempMember;
      }
    function updateTempMember(key, value) 
      {
        const _tempMember=cloneTempMember();
        _tempMember[key]=value;
        setTempMember(_tempMember);
      }
    // function cloneObject(obj) 
    //   {
    //     return JSON.parse(JSON.stringify(obj));
    //   }
    return (
      <tr>
        {/* <td>{index()    }</td> */}
        <td>{props.index    }</td>
        <Switch fallback={<dev>modeERROR</dev>}>
          <Match when={temp.mode==="read"||temp.index!==props.index}>
            <td>{item.id    }</td>
            <td>{item.name  }</td>
            <td>{item.email }</td>
            <td>
              <Switch fallback={<dev>UnknowStatus</dev>}>
                <Match when={item.status==="active"}>
                  <i class="bi bi-lightbulb-fill" style="color:yellow;" />
                </Match>
                <Match when={item.status==="in-active"}>
                  <i class="bi bi-lightbulb-off" style="color:gray;" />
                </Match>
              </Switch>
            </td>
            <td>
              <button 
                className="btn btn-primary mx-2" 
                onClick={(e) => {setTempMemberStore({mode: "edit-table",index: props.index,data: item});setTempMember(item);}}
              >
                <i class="bi bi-pencil" />
              </button>
              <button 
                className="btn btn-primary mx-2"
                onClick={(e) => {setTempMemberStore({mode: "edit-table",index: props.index,data: item});setTempMember(item);}}
              >
                <i class="bi bi-pencil-square" />
              </button>
              <button 
                className="btn btn-primary mx-2"
                onClick={(e) => 
                  {
                    const members_ = [ ...MemberStore.members];
                    members_.splice(props.index, 0, cloneTempMember());
                    //console.log(members_);
                    setMemberStore("members", members_);
                    setTempMemberStore({mode: "edit-table",index: props.index,data: cloneTempMember()});
                  }}
              >
                <i class="bi bi-clipboard" />
              </button>
              <button 
                className="btn btn-danger mx-2"
                onClick={(e) => 
                  {
                    const members_ = [...MemberStore.members];
                    members_.splice(props.index, 1);
                    //console.log(members_);
                    setMemberStore("members", members_);
                    socket.emit("delete-member",
                      {
                        from: "GetMemberTableRow-Delete", 
                        data: item, 
                      });
                  }}
              >
                <i class="bi bi-trash" />
              </button>
            </td>
          </Match>
          <Match when={temp.mode==="edit-table"&&temp.index===props.index}>
            <td>
              <InputGroup>
                <FormControl
                  type="text"
                  style={{"width":"4ch", "font-size":"1.1rem"}}
                  placeholder="ID"
                  value={TempMember().id}
                  onChange={(e)=>updateTempMember("id", e.target.value)}
                />
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                <FormControl
                  type="text"
                  style={{"width":"4ch", "font-size":"1.1rem"}}
                  placeholder="Name"
                  value={TempMember().name}
                  onChange={(e)=>updateTempMember("name", e.target.value)}
                />
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                <FormControl
                  type="text"
                  style={{"width":"4ch", "font-size":"1.1rem"}}
                  placeholder="Email"
                  value={TempMember().email}
                  onChange={(e)=>updateTempMember("email", e.target.value)}
                />
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                <FormControl
                  type="text"
                  style={{"width":"4ch", "font-size":"1.1rem"}}
                  placeholder="Statues"
                  value={TempMember().status}
                  onChange={(e)=>updateTempMember("status", e.target.value)}
                />
                {/* <Select >
                  <option selected>Choose...</option>
                  <option value="active">active</option>
                  <option value="in-active">in-active</option>
                </Select> */}
              </InputGroup>
            </td>
            <td>
              <button 
                className="btn btn-primary mx-2"
                onClick={(e) => 
                  {
                    batch(()=>
                      {
                        setTempMemberStore("mode", "read");
                        setTempMemberStore("data", TempMember());
                        setMemberStore("members", TempMemberStore.index, TempMemberStore.data);
                        socket.emit("update-member",
                          {
                            from: "GetMemberTableRow-EditMode-Update", 
                            data: cloneTempMember(), 
                          });
                      });
                    setTempMemberStore({mode: "read"});
                  }}
              >
                <i class="bi bi-check-square" />
              </button>
              <button 
                className="btn btn-primary mx-2"
                onClick={(e) => {setTempMemberStore({mode: "read"});}}
              >
                <i class="bi bi-x-square" />
              </button>
            </td>
          </Match>
        </Switch>
        {/* <td>
          {JSON.stringify(item)}<br/>
          {JSON.stringify(TempMember())}
        </td> */}
      </tr>
    );
  };