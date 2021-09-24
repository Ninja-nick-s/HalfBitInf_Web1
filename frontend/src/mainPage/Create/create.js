import React, { useEffect, useState, useRef } from 'react'
import mainpage from './create.module.css'
import Quill from "quill";
import Button from '../../UI/Button/Button';

const Create =(props)=> {
    var toolbarOptions=[
        [{'font':[]}],
        ['bold','italic','underline','strike'],
        [{'align':[]}],
        [{'script':'sub'},{'script':'super'}],
        [{'list':'ordered'},{'list':'bullet'}],
        [{'indent':'-1'},{'indent':'+1'}],
        [{'direction':'rtl'}],
        [{'size':['small',false,'large','huge']}],
        ['link','image','video','formula','code-block'],
        [{'color':[]},{'background':[]}]
    ];
    useEffect(()=>{
        var quill =new Quill('.editor',{
            modules:{
                toolbar:toolbarOptions
            },
            theme:'snow'
        });
    },[])
    return(
            <div className={mainpage.cover}>
                <div className={mainpage.title}>NOTE KEEPER <span>&nbsp;TEXT&nbsp; </span> EDITOR</div>
                <div className={mainpage.name}>
                    <div className={mainpage.namecover}>
                        HEADING
                    </div>
                </div>
                <div className={mainpage.headcover}>
                    <input className={mainpage.toolbar}/>
                </div>
                <div className={mainpage.name}>
                    <div className={mainpage.namecover}>
                        NOTE
                    </div>
                </div>
                <div className={mainpage.editorarea}>
                    <div className={`${mainpage.area} ${"editor"}`}></div>
                    
                    <div className={mainpage.buttoncover}>
                        <Button className={mainpage.savebutton}>Save</Button>
                        <Button className={mainpage.cancelbutton} onClick={props.onClose} >Cancel</Button>
                    </div>
                    
                    
                </div>
                
            </div>
            
    )
}
export default Create;