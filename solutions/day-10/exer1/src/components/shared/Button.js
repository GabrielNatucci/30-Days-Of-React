const Button = (props) => (
    <button className={props.class} style={props.style} onClick={props.onclick}>{props.text}</button>
)

export default Button;
