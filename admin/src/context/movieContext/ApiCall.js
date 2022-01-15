import axios from "axios";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("http://localhost:8000/api/movies", {headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
        console.log(localStorage.getItem("user"))
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
};

export const deleteMovie = () => {}


