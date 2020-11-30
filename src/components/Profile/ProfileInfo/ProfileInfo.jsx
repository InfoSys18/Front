import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img
          src='https://www.sydney.com/sites/sydney/files/styles/landscape_1400x788/public/2019-09/147392-56.webp?itok=tAF0pB0b'/>
        <div className={s.descriptionBlock}>
          <h2>{"Id: " + props.profile.userId}</h2>
          <h3>{props.profile.aboutMe}</h3>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.contacts.website}</div>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
