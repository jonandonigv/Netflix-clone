import React, { useState } from "react";
import "./widgetSmall.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSmall() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/users?new=true",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken, // Here goes the token
            },
          }
        );
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        {newUser.map((user) => {
          return (
            <li className="widgetSmallListItem">
              <img
                src={
                  "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                }
                alt=""
                className="widgetSmallImg"
              />
              <div className="widgetSmallUser">
                <span className="widgetSmallUsername">{user.username}</span>
              </div>
              <button className="widgetSmallButton">
                <VisibilityIcon className="widgetSmallIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
