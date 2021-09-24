import React, { useEffect, useState, useRef } from 'react'
import mainpage from './Display.module.css'
import Button from '../../UI/Button/Button';

const Display =(props)=> {
    
    return(
            <div className={mainpage.cover}>
                <div className={mainpage.title}>NOTES</div>
                <button className={mainpage.buttons} onClick={props.onClose}><i class="fas fa-times"></i></button>
                
            </div>
            
    )
}
export default Display;