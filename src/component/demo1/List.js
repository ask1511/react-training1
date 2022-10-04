import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = (props) => {
  console.log(props.users);

  return (
    <ul className={styles.list}>
      {props.users.map((user) => (
        <ListItem
          key={user.id}
          name={user.name}
          userName={user.username}
          email={user.email}
        />
      ))}
    </ul>
  );
};

export default List;
