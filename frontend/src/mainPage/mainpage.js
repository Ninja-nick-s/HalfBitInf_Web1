import React, { useEffect, useState, useRef } from 'react'
import mainpage from './mainpage.module.css'
import Lottie from "lottie-web"
import Navbar from "../UI/Navbar/Navbar";
import Card from "../UI/Card/Card";
import AddCard from "../UI/Card/AddCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CustomModal from "../UI/Modal/Modal";
import Folder from "./foldername/foldername";
let form;
const Main =(props)=> {
    
    const [openModal, modalStateUpdater] = useState(-1);
    const container = useRef(null)
    useEffect(()=>{
        Lottie.loadAnimation({
        container:container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('../General_Jsons/Mainpage_jsons/nodatajson.json')
        })
        
    },[])
    if (openModal === 0)
        form = ( <Folder onClose={modalStateUpdater.bind(this, -1)} changeState={modalStateUpdater} isOpen={openModal !== -1} /> );
    
    function onClickAddButton(){
        modalStateUpdater(0);
        console.log("click",openModal);
    }
    return(
        <>
        <CustomModal isOpen={openModal !== -1} className={mainpage.modal}>
            {form}
        </CustomModal>
        <div className={mainpage.main}>
            <div className={mainpage.topright}> </div>
            <div className={mainpage.bottomleft}> </div>
            <div className={mainpage.navbar}>
                <Navbar currentActive={3} isLogin={props.isAuthenticated==null?false:props.isAuthenticated}></Navbar>
            </div>
            <div className={mainpage.cover}>

                <div className={mainpage.title}>ALL FOLDER</div>
                <div className={mainpage.foldername}>
                    <Card title="Database" desc="A database is a collection of information that is organized so that it can be easily accessed, managed and updated" imageurl="/images/back.png"/>
                    <Card title="Database" desc="My database" imageurl="/images/back.png"/>
                    <Card title="Database" desc="My database" imageurl="/images/back.png"/>
                    <Card title="Database" desc="My database" imageurl="/images/back.png"/>
                    <Card title="Database" desc="My database" imageurl="/images/back.png"/>
                    <Card title="Database" desc="My database" imageurl="/images/back.png"/>
                    <AddCard AddClick={onClickAddButton}/>
                </div>
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