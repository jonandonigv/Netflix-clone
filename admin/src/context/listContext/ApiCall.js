import axios from "axios";
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
  editMovieStart,
  editMovieSuccess,
  editMovieFailure,
} from "./ListActions";
// TODO: Change to the new list actions.
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:8000/api/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    const res = await axios.delete("http://localhost:8000/api/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
/* 
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
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

export const editMovie = async (movie, dispatch) => {
  dispatch(editMovieStart());
  try {
    await axios.put("http://localhost:8000/api/movies/" + movie._id, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(editMovieSuccess(movie));
  } catch (error) {
    dispatch(editMovieFailure());
  }
}; */
