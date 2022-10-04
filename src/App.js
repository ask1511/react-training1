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
  return <List users={DUMMY_USERS} />;
};

export default App;
