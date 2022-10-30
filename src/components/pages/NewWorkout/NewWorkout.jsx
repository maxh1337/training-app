import React from "react";
import ReactSelect from "react-select";
import Layout from "../../common/Layout";
import bgImage from "../../../images/new-workout.jpg";
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";
import styles from "./NewWorkout.module.scss";
import { Link } from "react-router-dom";

const NewWorkout = () => {
  const [name, setName] = React.useState("");
  const [exercises, setExercises] = React.useState();

  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <>
      <Layout bgImage={bgImage} heading="Create new workout" />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link to="/new-exercise" className="dark-link">
            Add new exercise
          </Link>
          <ReactSelect
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises"
            options={[
              { value: 0, label: "Push-ups" },
              { value: 1, label: "Pull-ups" },
            ]}
            isSearchable={true}
            value={exercises}
            onChange={setExercises}
          />
          <Button
            text="Create"
            callback={() => {
              console.log("ошоф");
            }}
          />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
