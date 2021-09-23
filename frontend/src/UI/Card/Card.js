import card from './Card.module.css'
const Card = (props) => {
    return(
        <>
            <div className={card.maincard}>
                <div className={card.overlay}></div>
                <div className={card.cover} >
                    <div className={card.cont}>
                        <div className={card.imagecont}>
                            <img className={card.image} src={props.imageurl}/>
                        </div>
                        <div className={card.title}>{props.title}</div>
                        <div className={card.desc}>{props.desc}</div>
                    </div>
                    <div className={card.option} style={{background: props.col}}>
                        <button className={card.delete}>Delete</button>
                    </div>
                </div>
                
                
                 
            </div>
        </>
    )
        
}
export default Card