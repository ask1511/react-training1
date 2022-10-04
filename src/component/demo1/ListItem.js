import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li className={styles.item}>
      <h2>{props.name}</h2>
      <div>
        <p>Username: {props.userName}</p>
        <p>Email: {props.email}</p>
      </div>
    </li>
  );
};

export default ListItem;
