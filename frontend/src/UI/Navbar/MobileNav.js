import { NavLink } from 'react-router-dom'
import classes from './MobileNav.module.css'
const MobileNav = (props) => {
    return <nav className={classes.nav}>
        
        <NavLink to="/" exact className={`${classes.link}`} activeClassName={`${props.currentActive===1?classes.activeLink:null}`}>
            <i className="fas fa-home" />
        </NavLink>
        {props.isLogin?
        <>
            <NavLink to="/main" exact className={`${classes.link} `} activeClassName={`${props.currentActive===3?classes.activeLink:null}`}>
                <i class="fas fa-clipboard"></i>
            </NavLink>
            <NavLink className={`${classes.link}  ${classes.notifications}`} to="/" onClick={props.logout} activeClassName={`${props.currentActive===2?classes.activeLink:null}`}>
                <i class="fas fa-sign-out-alt"></i>
            </NavLink>
        </>
    :
            <NavLink to="/login" exact className={`${classes.link}`} activeClassName={`${props.currentActive===2?classes.activeLink:null}`}>
                <i class="fas fa-sign-in-alt"></i>
            </NavLink>
        }
        
        
    </nav>
}

export default MobileNav