import React from 'react'
import './list.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem'
import { useRef } from 'react';

export default function List() {
    
    const listRef = useRef();
    
    const handleClick = (direction) => {
        let distance = 
        if (direction === 'left') {
            listRef.current.style.transform = `translateX(230)`
        }
    };
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={() => handleClick('left')}/>
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick('right')}/>
            </div>            
        </div>
    )
}
