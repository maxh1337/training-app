import React from "react";
import bgImage from "../../../images/workout-bg.jpg";
import styles from "./SingleWorkout.module.scss";
import { useMutation, useQuery } from "react-query";
import { $api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Alert from "../../ui/Alert/Alert";
import Layout from "../../common/Layout";
import Loader from "../../ui/Loader";

const ListWorkouts = () => {
  const navigate = useNavigate();
  
  const { data, isSuccess } = useQuery(
    "get all workouts",
    () =>
      $api({
        url: `/workouts`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate: createWorkoutLog,
    isLoading,
    isSuccess: isSuccessMutate,
    error,
  } = useMutation(
    "Create new workout log",
    ({ workoutId }) =>
      $api({
        url: "/workouts/log",
        type: "POST",
        body: { workoutId },
      }),
    {
      onSuccess(data) {
        navigate(`/workout/${data._id}`);
      },
    }
  );

  return (
    <>
      <Layout bgImage={bgImage} heading="Workout list" />
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type="error" text={error} />}
        {isSuccessMutate && <Alert text="Workout log created" />}
        {isLoading && <Loader />}
        {isSuccess ? (
          <div className={styles.wrapper}>
            {data.map((workout, idx) => {
              return (
                <div className={styles.item} key={`workout ${idx}`}>
                  <button
                    aria-label="Create new workout log"
                    onClick={() =>
                      createWorkoutLog({
                        workoutId: workout._id,
                      })
                    }
                  >
                    <span>{workout.name}</span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <Alert type="warning" text="Workouts not found" />
        )}
      </div>
    </>
  );
};

export default ListWorkouts;
