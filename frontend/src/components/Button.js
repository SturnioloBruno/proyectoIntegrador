function Button(props) {
    return (
        <button data-testid="Button" className={props.className}>{props.text}</button>
    )
}

export default Button;