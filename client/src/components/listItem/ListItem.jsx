import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export default function ListItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div 
            className="listItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{left: isHovered && (props.index * 225 - 50 + props.index * 2.5) }}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" 
            alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon />
                    <AddIcon />
                    <ThumbUpOutlinedIcon />
                    <ThumbDownAltOutlinedIcon />
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className='limit'>+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore illum qui expedita, nobis dolores at dolorum quidem, cum, iste delectus ab ipsa incidunt quis autem sint eaque impedit nisi!
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
        </div>
    )
}
