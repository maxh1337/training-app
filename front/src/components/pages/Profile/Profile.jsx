import React from "react";
import bgImage from "../../../images/profile-bg.jpg";
import afterImg from "../../../images/after.jpg";
import styles from "./Profile.module.scss";
import stylesLayout from "../../common/Layout.module.scss";
import { useQuery } from "react-query";
import { $api } from "../../api/api";
import Header from "../../common/header/header";
import Counters from "../../ui/Counters/Counters";
import profileImage from "../../../images/header/user.svg";


const Profile = () => {
  const { data, isSuccess } = useQuery(
    "profile page counters",
    () =>
      $api({
        url: "/users/profile",
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <div
        className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
        style={{ backgroundImage: `url(${bgImage})`, height: '356px'}}
      >
        <Header />

        <div className={styles.center}>
          <img src={profileImage} alt="ProfileImage" height='60'/>
          {isSuccess && <h1 className={stylesLayout.heading}>{data.email}</h1>}
        </div>

        {isSuccess && (
          <Counters
            minutes={data.minutes}
            workouts={data.workouts}
            kgs={data.kgs}
            type="profile"
          />
        )}
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className={styles.before_after}>
          <div>
            <div className="before">BEFORE</div>
            <img src={afterImg} alt="" />
          </div>
          <div>
            <div className="after">AFTER</div>
            <img src={afterImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
