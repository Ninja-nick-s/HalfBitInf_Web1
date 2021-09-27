import React, { useEffect, useState, useRef } from "react";
import share from "./Share.module.css";
import Navbar from "../UI/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
let form;
const Share = (props) => {
  return (
    <>
      <div className={share.main}>
        <div className={share.topright}> </div>
        <div className={share.bottomleft}> </div>
        <div className={share.navbar}>
          <Navbar
            currentActive={4}
            isLogin={
              props.isAuthenticated == null ? false : props.isAuthenticated
            }
          ></Navbar>
        </div>
        <div className={share.cover}>
          <div className={share.title}><i class="fas fa-share-alt"></i>&nbsp; ALL SHARED FILES</div>
          <div className={share.SharedFiles}>
          <div className={share.SharedCover}>
                    <div className={share.SharefromCover}>
                        <div className={share.ShareFrom}>
                            From : ay70154@gmail.com
                        </div>
                    </div>
                    <div className={share.TopicDeleteCover}>
                        <div className={share.TopicCover}>
                            <button className={share.Topic}>My data</button>
                        </div>
                        <div className={share.DeleteCover}>
                            <button className={share.Delete}><i className="fas fa-trash-alt"></i>&nbsp; Delete</button>
                        </div>
                    </div>
                </div>
                <div className={share.SharedCover}>
                    <div className={share.SharefromCover}>
                        <div className={share.ShareFrom}>
                            From : ay70154@gmail.com
                        </div>
                    </div>
                    <div className={share.TopicDeleteCover}>
                        <div className={share.TopicCover}>
                            <button className={share.Topic}>My data</button>
                        </div>
                        <div className={share.DeleteCover}>
                            <button className={share.Delete}><i className="fas fa-trash-alt"></i>&nbsp; Delete</button>
                        </div>
                    </div>
                </div>
                <div className={share.SharedCover}>
                    <div className={share.SharefromCover}>
                        <div className={share.ShareFrom}>
                            From : ay70154@gmail.com
                        </div>
                    </div>
                    <div className={share.TopicDeleteCover}>
                        <div className={share.TopicCover}>
                            <button className={share.Topic}>My data</button>
                        </div>
                        <div className={share.DeleteCover}>
                            <button className={share.Delete}><i className="fas fa-trash-alt"></i>&nbsp; Delete</button>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
Share.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Share);
