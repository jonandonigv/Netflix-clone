import React, { useEffect, useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get('/movies/find/' + item ,{
                    headers: {
                        token: "Bearer " // TODO: Here goes the jwt token.
                    }
                });
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovie();
    }, [item]);
    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
            <div 
                className="listItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{left: isHovered && (index * 225 - 50 + index * 2.5) }}>
                <img src={item.img}
                alt="" />
                {isHovered && (
                    <>
                    <video src={movie.trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className='icon'/>
                            <AddIcon className='icon'/>
                            <ThumbUpOutlinedIcon className='icon'/>
                            <ThumbDownAltOutlinedIcon className='icon'/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className='limit'>+{movie.limit}</span>
                            <span>{item.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">
                            {movie.genre}
                        </div>
                    </div></>
                )}
            </div>
        </Link>
    );
}
