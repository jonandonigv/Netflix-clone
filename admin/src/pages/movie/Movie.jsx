import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './movie.scss'
import { movieData } from '../../dummyData'
import Publish from '@mui/icons-material/Publish'

export const Movie = () => {
    return (
        <div className='movie'>
            <div className="movieTitleContainer">
                <h1 className="movieTitle">Movie</h1>
                <Link to='/newMovie'>
                    <button className="movieAddButton">Create</button>
                </Link>
            </div>
            <div className="movieTop">
                <div className="movieTopLeft">
                    <Chart data={movieData} dataKey='Movie watch' title='Movie Spectators'/>
                </div>
                <div className="movieTopRight">
                    <div className="movieInfoTop">
                        <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="movieInfoImg" />
                        <span className="movieName">Movie Name</span>
                    </div>
                    <div className="movieInfoBottom">
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">id:</span>
                            <span className="movieInfoValue">123</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">sales:</span>
                            <span className="movieInfoValue">432342</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">active:</span>
                            <span className="movieInfoValue">yes</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">in Stock:</span>
                            <span className="movieInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movieBottom">
                <form action="" className="movieForm">
                    <div className="movieFormLeft">
                        <label htmlFor="">Movie Name</label>
                        <input type="text" placeholder='Movie name' />
                        <label htmlFor="">In Stock</label>
                        <select name='instock' id='inStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="movieFormRight">
                        <div className="movieUpdaload">
                            <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="movieUploadImg" />
                            <label for='file'>
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
