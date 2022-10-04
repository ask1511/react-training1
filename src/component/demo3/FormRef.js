import { useRef } from "react";
import styles from "./Form.module.css";

const FormRef = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);

    props.onSubmit({
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    nameInputRef.current.value =
      emailInputRef.current.value =
      passwordInputRef.current.value =
        "";
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter you name"
          ref={nameInputRef}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          ref={emailInputRef}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          placeholder="Please enter you password"
          ref={passwordInputRef}
        />
      </div>

      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormRef;
