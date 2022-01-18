import React, { useContext } from "react";
import "./listList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../context/movieContext/ApiCall";
import { useEffect } from "react";

export const ListList = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="movieListMovie">
            <img className="movieListImg" src={params.row.img}></img>
            {params.row.title}
          </div>
        );
      },
    },
    { field: "gender", headerName: "Genre", width: 100 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSerries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/movie/" + params.row._id }}>
              <button className="movieListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="movieListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="movieList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};
