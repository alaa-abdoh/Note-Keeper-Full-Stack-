function Button({children, onClick, submit}){
    return (
        <button className={submit?"submit btn" : "btn"} onClick={onClick} type={submit ? "submit" : ""}>
            {children}
        </button>
    )
}
export default Button;