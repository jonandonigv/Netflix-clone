import axios from "axios";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:8000/api/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(localStorage.getItem("user"));
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    const res = await axios.delete("http://localhost:8000/api/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    console.log(movie);
    await axios.post("http://localhost:8000/api/movies/", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(movie));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};
