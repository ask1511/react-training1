import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter you name"
          onChange={nameChangeHandler}
          value={name}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          onChange={emailChangeHandler}
          value={email}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          placeholder="Please enter you password"
          onChange={passwordChangeHandler}
          value={password}
        />
      </div>

      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
