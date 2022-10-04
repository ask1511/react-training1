import { Fragment, useEffect, useState } from "react";
import List from "./component/demo1/List";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Amit Kaushik",
    username: "amitkaushik",
    email: "amitkaushik@gmail.com",
  },

  {
    id: "u2",
    name: "Guru Acharya",
    username: "guruacharya",
    email: "guruacharya@gmail.com",
  },

  {
    id: "u3",
    name: "Nagesh K",
    username: "nageshk",
    email: "nageshk@gmail.com",
  },
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFetched, setIsFetched] = useState(true);

  useEffect(() => {
    setIsFetched(false);

    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Could not fetch users data!");
      }

      const data = await response.json();

      setIsFetched(true);

      const usersData = [];

      for (const user of data) {
        usersData.push({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        });
      }

      setUsers(usersData);
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log(error.message);
      setIsFetched(false);
    }
  }, []);

  return (
    <Fragment>
      {!isFetched && <p style={{ textAlign: "center" }}>Fetching users data</p>}
      <List users={users} />
    </Fragment>
  );
};

export default App;
