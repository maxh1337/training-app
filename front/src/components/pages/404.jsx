import React from "react";
import bgImage from "../../images/new-workout.jpg";
import Layout from "../common/Layout";

const error404 = () => {
  return (
    <>
      <Layout bgImage={bgImage} heading="Page not found" />
      <div className="wrapper-inner-page">404 page not found</div>
    </>
  );
};

export default error404;
