
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './Form.module.css'
import { useEffect, useRef, useState } from 'react'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner'
import Alert from '../../UI/Alert/Alert'
import Lottie from "lottie-web"
let timer = null
const SignUp = (props) => {
    const [error, errorStateUpdater] = useState(null)

    const container = useRef(null)
    const container1 = useRef(null)
    useEffect(()=>{
       Lottie.loadAnimation({
         container:container.current,
         renderer:'svg',
         loop:true,
         autoplay:true,
         animationData:require('./json_for_signup/signupjson_topleft.json')
       })
       Lottie.loadAnimation({
        container:container1.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('./json_for_signup/signupjson_bottomright.json')
      })
    },[])

    return <>
        <Alert error={error} onClose={errorStateUpdater.bind(this, null)} />
        <header className={classes.header}>
            <h3>Let's get <span>started</span></h3>
        </header>
        <div className={classes.topleft} ref={container}></div>
        <form  className={classes.form}>
            
            <Input type="text" placeholder="Enter Name" name="name"/>
            <Input type="email" placeholder="Email" name="email" />
            <div className={classes.siblingFields}>
                <Input type="password" placeholder="Password" name="password"  />
                <Input type="password" placeholder="Confirm Password" name="confirmPassword" />
            </div>
            {
                <div className={classes.formActions}>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button type="submit" >Sign Up</Button>
                </div>
            }
        </form>
        {
            
            <div className={classes.additionalActions}>
                <p>Already have an account? <button onClick={props.changeState.bind(this, 0)} className={classes.btn}>Sign in</button></p>
            </div>
        }
        <div className={classes.bottomright} ref={container1}></div>
    </>
}
export default SignUp

