import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './Form.module.css'
import { useEffect, useRef, useState } from 'react'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner'
import Alert from '../../UI/Alert/Alert'
import Lottie from "lottie-web"
let timer = null
const SignIn = (props) => {
    
    const [error, errorStateUpdater] = useState(null)
    const container = useRef(null)
    const container1 = useRef(null)
    useEffect(()=>{
       Lottie.loadAnimation({
         container:container.current,
         renderer:'svg',
         loop:true,
         autoplay:true,
         animationData:require('./jsons_for_signin/signinjson_topright.json')
       })
       Lottie.loadAnimation({
        container:container1.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('./jsons_for_signin/signinjson_bottomleft.json')
      })
    },[])
    
    return <>
        <Alert error={error} onClose={errorStateUpdater.bind(this, null)} />
        <header className={classes.header}>
            <h3><span>Ready</span> to jump back in?</h3>
        </header>
        <div className={classes.topright} ref={container}></div>
        <form className={classes.form}>
            <Input type="email" placeholder="Email" name="email"  />
            <Input type="password" placeholder="Password" name="password" />
           
                <div className={classes.formActions}>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button type="submit">Sign In</Button>
                </div>
            
        </form>
        <div className={classes.additionalActions}>
            
            <div className={classes.stateHandler}>
                <p>New here?<button onClick={props.changeState.bind(this, 1)} className={classes.btn}>Sign up here</button></p>
                <button onClick={props.changeState.bind(this, 2)} className={classes.btn} >Forgot Password?</button>
            </div>
        </div>
        <div className={classes.bottomleft} ref={container1}></div>
    </>
}
export default SignIn