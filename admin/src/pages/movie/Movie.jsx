import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './movie.scss'
import Publish from '@mui/icons-material/Publish'
import axios from 'axios'

export const Movie = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async (id) => {
            const res = await axios.get("http://localhost:8000/api/movies/find/" + id, {headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
            setMovie(res.data);
        };
        getMovie(params.movieId);
    }, []);


    return (
        <div className='movie'>
            <div className="movieTitleContainer">
                <h1 className="movieTitle">Movie</h1>
                <Link to='/newMovie'>
                    <button className="movieAddButton">Create</button>
                </Link>
            </div>
            <div className="movieTop">
                <div className="movieTopRight">
                    <div className="movieInfoTop">
                        <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="movieInfoImg" />
                        <span className="movieName">{movie.title}</span>
                    </div>
                    <div className="movieInfoBottom">
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">id:</span>
                            <span className="movieInfoValue">{movie._id}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">genre:</span>
                            <span className="movieInfoValue">{movie.gender}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">year:</span>
                            <span className="movieInfoValue">{movie.year}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">limit:</span>
                            <span className="movieInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movieBottom">
                <form action="" className="movieForm">
                    <div className="movieFormLeft">
                        <label htmlFor="">Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label htmlFor="">Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder={movie.gender} />
                        <label htmlFor="">Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label htmlFor="">Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label htmlFor="">Video</label>
                        <input type="file" placeholder={movie.video} />
                        
                    </div>
                    <div className="movieFormRight">
                        <div className="movieUpdaload">
                            <img src={movie.img} alt="" className="movieUploadImg" />
                            <label htmlFor='file'>
                                <Publish/>
                            </label>
                            <input type="file" id='file' style={{display: 'none'}} />
                        </div>
                        <button className="movieButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
