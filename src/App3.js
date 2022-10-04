import { Fragment } from "react";
import Form from "./component/demo3/Form";
import FormRef from "./component/demo3/FormRef";

const App3 = () => {
  const submitUserData = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Form onSubmit={submitUserData} />
      {/* <FormRef onSubmit={submitUserData} /> */}
    </Fragment>
  );
};

export default App3;
