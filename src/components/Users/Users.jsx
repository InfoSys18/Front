import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div>
    
    <div className='pages'>
      {pages.map(p => {
        return <span className={props.currentPage === p ? styles.selectedPage : styles.simplePage}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}
                     key={p}>{p}</span>
      })}
    </div>
    {
      props.users.map(
        u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'./profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
    
                  // Оскільки закоментоване нижче працює тільки на платній підписці,
                  // винесемо сюди props.unfollow(u.id); для обох кнопок
                  props.unfollow(u.id);
                  
                  // props.toggleFollowingProgress(true)
                  // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  //   withCredentials: true,
                  //   headers: {
                  //     "API-KEY": ""
                  //   }
                  // })
                  //   .then(response => {
                  //     if (response.data.resultCode == 0) {
                  //       props.unfollow(u.id);
                  //     }
                  //     props.toggleFollowingProgress(false)
                  //   });
                }}>Unfollow</button>
                
                : <button onClick={() => {
                  props.follow(u.id);
                  
                  // props.toggleFollowingProgress(true)
                  // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  //   withCredentials: true,
                  //   headers: {
                  //     "API-KEY": ""
                  //   }
                  // })
                  //   .then(response => {
                  //     if (response.data.resultCode == 0) {
                  //       props.follow(u.id);
                  //     }
                  //     props.toggleFollowingProgress(false)
                  //   });
                }}>Follow</button>
                }
                </div>
                </span>
                <span>
                <span>
                <div>
                {u.name}
                </div>
                <div>
                {u.status}
                </div>
                </span>
                <span>
                <div>
                {"u.location.country"}
                </div>
                <div>
                {"u.location.city"}
                </div>
                </span>
                </span>
                </div>
                )
                }
                </div>
                }
  
                export default Users;
