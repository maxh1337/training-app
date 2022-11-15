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
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("auth"); // auth or register

  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  const successLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuth(true);

    setPassword("");
    setEmail("");

    navigate("/");
  };

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation(
    "Registration",
    () =>
      $api({
        url: "/users",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token);
      },
    }
  );

  const {
    mutate: auth,
    isLoading: isLoadingAuth,
    error: errorAuth,
  } = useMutation(
    "Auth",
    () =>
      $api({
        url: "/users/login",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "auth") {
      auth();
      
    } else {
      register();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Auth || Register" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {errorAuth && <Alert type="error" text={errorAuth} />}
        {(isLoading || isLoadingAuth) && <Loader />}
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
