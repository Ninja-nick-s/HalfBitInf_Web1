import React, { useEffect, useState, useRef } from 'react'
import files from './Files.module.css'
import Lottie from "lottie-web"
import Navbar from "../../UI/Navbar/Navbar";
import Card from "../../UI/Card/Card";
import AddCard from "../../UI/Card/AddCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CustomModal from "../../UI/Modal/Modal";
let form;
const Main =(props)=> {
    
    // const [openModal, modalStateUpdater] = useState(-1);
    // const container = useRef(null)
    // useEffect(()=>{
    //     Lottie.loadAnimation({
    //     container:container.current,
    //     renderer:'svg',
    //     loop:true,
    //     autoplay:true,
    //     animationData:require('../General_Jsons/files_jsons/nodatajson.json')
    //     })
        
    // },[])
    // if (openModal === 0)
    //     form = ( <Folder onClose={modalStateUpdater.bind(this, -1)} changeState={modalStateUpdater} isOpen={openModal !== -1} /> );
    
    // function onClickAddButton(){
    //     modalStateUpdater(0);
    // }
    return(
        <>
        {/* <CustomModal isOpen={openModal !== -1} className={files.modal}>
            {form}
        </CustomModal> */}
        <div className={files.main}>
            <div className={files.topright}> </div>
            <div className={files.bottomleft}> </div>
            <div className={files.navbar}>
                <Navbar currentActive={3} isLogin={props.isAuthenticated==null?false:props.isAuthenticated}></Navbar>
            </div>
            <div className={files.cover}>
                <div className={files.left}></div>
                <div className={files.right}></div>
            </div>
            
        </div>
        </>
    )
}
Main.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Main);