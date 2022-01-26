import React, { useState, useContext, useEffect } from "react";
import storage from "../../firebase";
import "./newList.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getMovies, createMovie } from "../../context/movieContext/ApiCall";
import { createList } from "../../context/listContext/ApiCall";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useNavigate } from "react-router-dom";

export const NewList = () => {
  const [list, setList] = useState(null);
  const navigation = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigation("/lists");
  };

  return (
    <div className="newMovie">
      <h1 className="newUser">New List</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Type</label>
          <select
            name="type"
            id="type"
            className="newUserSelect"
            onChange={handleChange}
          >
            <option value="">Type</option>
            <option value="series">Series</option>
            <option value="movie">Movie</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Content</label>
          <select
            type="text"
            placeholder="content"
            multiple
            name="content"
            onChange={handleSelect}
          >
            {movies.map((movie) => {
              console.log(movie)
              return <option key={movie._id} value={movie._id}>{movie.title}</option>
            })}
          </select>
        </div>

        <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};
