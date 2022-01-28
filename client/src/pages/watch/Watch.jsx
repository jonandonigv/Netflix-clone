import React from "react";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Watch() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async (id) => {
      console.log(id);
      const res = await axios.get(
        "http://localhost:8000/api/movies/find/" + id,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setMovie(res.data);
    };
    getMovie(params.id);
  }, []);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
