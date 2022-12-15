const Card = (props) => {
    return (
        <div className='skill' style={props.style.div}>
            <img src={props.img} alt={props.skill} style={props.style.img}/>
            <p style={props.style.p} >{props.skill}</p>
        </div>
    )
}

export default Card;
