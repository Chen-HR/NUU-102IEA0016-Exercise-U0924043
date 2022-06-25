import styles from "../App.module.css";
export default function GetDog(props) 
  {
    return (
      <div class={styles.App}>
        <h1>GetDog</h1>
        type: {props.type}, color: {props.color}<br/>
        {props.children}
      </div>
    );
  }