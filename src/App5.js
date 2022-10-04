import { Fragment, useContext } from "react";
import FormRef from "./component/demo5/FormRef";
import Header from "./component/demo5/Header";
import Home from "./component/demo5/Home";
import AuthContext from "./store/auth-context";

const App5 = () => {
  const authCtx = useContext(AuthContext);

  console.log(authCtx);

  return (
    <Fragment>
      <Header />
      <main>
        {!authCtx.isLoggedIn && <FormRef />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
};

export default App5;
