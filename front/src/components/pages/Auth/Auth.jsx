import React from "react";
import Layout from "../../common/Layout";
import bgImage from "../../../images/auth.jpg";
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";
import styles from "./Auth.module.scss";
import Alert from "../../ui/Alert/Alert";
import { useMutation } from "react-query";
import { $api } from "../../api/api";
import Loader from "../../ui/Loader";
const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("auth"); // auth or register

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation("Registration", () =>
    $api({
      url: "/users",
      type: "POST",
      body: { email, password },
      auth: false,
    }), {
      onSuccess(data){
        console.log(data)
      }
    }
  );



  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "auth") {
      console.log("Auth");
    } else {
      register();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Auth || Register" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <Field
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <div className={styles.wrapperButtons}>
            <Button text="Sign in" callback={() => setType("auth")} />
            <Button text="Sign up" callback={() => setType("reg")} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
