import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export default function ListItem(index) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
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
