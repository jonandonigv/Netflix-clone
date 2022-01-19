import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./list.scss";
import axios from "axios";

export const List = () => {
  const params = useParams();
  const [list, setList] = useState({});
  useEffect(() => {
    const getMovie = async (id) => {
      const res = await axios.get(
        "http://localhost:8000/api/lists/find/" + id,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setList(res.data);
    };
    getMovie(params.listId);
  }, []);

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img
              src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="movieInfoImg"
            />
            <span className="movieName">{list.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">{list._id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">genre:</span>
              <span className="movieInfoValue">{list.genre}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">type:</span>
              <span className="movieInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form action="" className="movieForm">
          <div className="movieFormLeft">
            <label htmlFor="">List Title</label>
            <input type="text" placeholder={list.title} />
            <label htmlFor="">Type</label>
            <input type="text" placeholder={list.type} />
            <label htmlFor="">Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="movieFormRight">
            <button className="movieButton">Update</button>
            {/* TODO: make the button update the db */}
          </div>
        </form>
      </div>
    </div>
  );
};
