import React from "react";
import bgImage from "../../../images/workout-bg.jpg";
import styles from "./SingleWorkout.module.scss";
import stylesLayout from "../../common/Layout.module.scss";
import { useMutation, useQuery } from "react-query";
import { $api } from "../../api/api";
import Header from "../../common/header/header";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../ui/Alert/Alert";
import { useEffect } from "react";
import cn from 'classnames'

const SingleWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess } = useQuery(
    "get workout",
    () =>
      $api({
        url: `/workouts/log/${id}`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: setWorkoutCompleted, error: errorCompleted } = useMutation(
    "Change log state",
    () =>
      $api({
        url: "/exercises/log/completed",
        type: "PUT",
        body: { logId: id },
      }),
    {
      onSuccess(data) {
        navigate("/workouts");
      },
    }
  );

  useEffect(() => {
    if (
      isSuccess &&
      data?.exerciseLogs.length ===
        data.exerciseLogs.filter((log) => log.completed).length
    ) {
      setWorkoutCompleted();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.exerciseLogs]);

  return (
    <>
      <div
        className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
        style={{ backgroundImage: `url(${bgImage})`, height: "356px" }}
      >
        <Header />
        {isSuccess && (
          <div>
            <time>{data.minutes + " min"}</time>
            <h1 className={stylesLayout.heading}>{data.name}</h1>
          </div>
        )}
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          {errorCompleted && <Alert text="Exercise log created" />}
          {isSuccess ? (
            <div className={styles.wrapper}>
              {data.exerciseLogs.map((exLog, idx) => {
                return (
                  <React.Fragment key={`ex log ${idx}`}>
                    <div
                      className={cn(styles.item, {
                        [styles.completed]: exLog.completed,
                      })}
                    >
                      <button
                        aria-label="Move to exercise"
                        onClick={() => navigate(`/exercise/${exLog._id}`)}
                        
                      >
                        <span>{exLog.exercise.name}</span>
                        <img
                          height="34"
                          src={`/uploads/exercises/${exLog.exercise.imageName}.svg`}
                          alt=""
                        />
                      </button>
                    </div>
                    {idx % 2 !== 0 && <div className={styles.line}></div>}
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <Alert type="warning" text="Exercises not found" />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleWorkout;
