import { PromiseProvider } from 'mongoose'
import card from './Card.module.css'
const AddCard = (props) => {
    return(
        <>
            <button className={card.maincard} style={{background: "white"}} onClick={props.AddClick}>
                <div className={card.addcont}>
                    <div className={card.addicon}><i className="fas fa-plus"></i></div>
                </div>
            </button>
        </>
    )
        
}
export default AddCard