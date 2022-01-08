import React from 'react'
import './movieList.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { movieRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const MovieList = () => {
    const [data, setData] = useState(movieRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) =>{
            return (
                <div className='movieListMovie'>
                    <img className='movieListImg' src={params.row.img}></img>
                    {params.row.name}
                </div>
            );
        } },
        { field: 'stock', headerName: 'stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transactions',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={'/movie/' + params.row.id}>
                        <button className="movieListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon  className='movieListDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                );
            }
        },
        
      ];

    return (
        <div className='movieList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
