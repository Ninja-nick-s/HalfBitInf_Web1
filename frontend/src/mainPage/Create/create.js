import React, { useEffect, useState, useRef } from 'react'
import mainpage from './create.module.css'
import Lottie from "lottie-web"
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../UI/Navbar/Navbar";
import MainNavbar from "../../UI/Navbar/MainNavbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    if (!props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return(
        <div className={mainpage.main}>
            <div className={mainpage.topright}> </div>
            <div className={mainpage.bottomleft}> </div>
            <div className={mainpage.navbar}>
                <Navbar currentActive={3} isLogin={props.isAuthenticated==null?false:props.isAuthenticated}></Navbar>
            </div>
            <div className={mainpage.mainnavbar}>
                <MainNavbar currentActive={2}></MainNavbar>
            </div>
            <div className={mainpage.cover}>
                <div className={mainpage.title}>NOTE KEEPER <span>&nbsp;TEXT&nbsp; </span> EDITOR</div>
                <div className={mainpage.name}>
                    <div className={mainpage.namecover}>
                        HEADING
                    </div>
                </div>
                <div className={mainpage.headcover}>
                    <input className={mainpage.toolbar}/>
                    <input type="color"/>
                    <input type="file" id="file-upload" accept="image/"/>
                    <label htmlFor="file-upload" className={mainpage.imagebutton}>Image</label>
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
                        <Button className={mainpage.cancelbutton}>Cancel</Button>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}
Create.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Create);