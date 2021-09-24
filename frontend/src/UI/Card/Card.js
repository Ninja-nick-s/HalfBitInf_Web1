import card from './Card.module.css'
import axios from "axios";
import React, { useEffect, useState, Component } from 'react'
const Card = (props) => {
    const [ImageURL,SetImageURL]=useState("");
    function setActive() {
        document.getElementById(`coverid ${props.index}`).style.display="none";
        document.getElementById(`maincardid ${props.index}`).style.transform="rotateY(180deg)";
        document.getElementById(`filecoverid ${props.index}`).style.display="flex";
        document.getElementById(`filecoverid ${props.index}`).style.width="100%";
        document.getElementById(`filecoverid ${props.index}`).style.height="100%";

    }
    function setInactive() {
        document.getElementById(`coverid ${props.index}`).style.display="block";
        document.getElementById(`maincardid ${props.index}`).style.transform="rotateY(0deg)";
        document.getElementById(`filecoverid ${props.index}`).style.display="none";
        document.getElementById(`filecoverid ${props.index}`).style.width="0%";
        document.getElementById(`filecoverid ${props.index}`).style.height="0%";

    }
    useEffect(()=>{
        axios.get(
            `https://api.unsplash.com/search/photos?page=1&query=${props.title}&client_id=qdvH4yeGiC-wAUJOgaQ0dPdDvdXjRSIjWAO4yDsPD9Q`
        )
        .then(res=>(SetImageURL(res.data.results[2].urls.full),console.log(res)))
        .catch(err=>console.log(err));
    },[])
    return(
        <>
            <div className={`${card.maincard}`} id={`maincardid ${props.index}`} >
                <div className={card.filescover} id={`filecoverid ${props.index}`} >
                    <div className={card.top}>
                        <button className={card.buttons} onClick={setInactive}><i class="fas fa-times"></i>&nbsp; CLOSE</button>
                        <button className={card.buttons} onClick={props.AddFiles}><i className="fas fa-plus-circle"></i>&nbsp; CREATE</button>
                    </div>
                    <div className={card.bottom}>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version</button>
                        <button onClick={props.Display} className={card.files}>Database</button>
                        <button onClick={props.Display} className={card.files}>Database</button>
                        <button onClick={props.Display} className={card.files}>Database</button>
                        <button onClick={props.Display} className={card.files}>Database</button>
                        <button onClick={props.Display} className={card.files}>Database</button>

                    </div>
                </div>
                <div className={card.cover} id={`coverid ${props.index}`}>
                    <div className={card.cont}>
                        <div className={card.imagecont}>
                            <img className={card.image} src={ImageURL}/>
                        </div>
                        <div className={card.gap}></div>
                        <div className={card.title}>{props.title}</div>
                        <div className={card.gap}></div>
                        <div className={card.desc}>{props.desc}</div>
                        <div className={card.gap}></div>
                    </div>
                    <div className={card.option} style={{background: props.col}}>
                        <button className={card.buttons} onClick={setActive}><i className="fas fa-folder-open"></i>&nbsp; OPEN</button>
                        <button className={card.buttons}><i className="fas fa-trash-alt"></i>&nbsp; DELETE</button>
                    </div>
                </div>
                
                
                 
            </div>
        </>
    )
        
}
export default Card