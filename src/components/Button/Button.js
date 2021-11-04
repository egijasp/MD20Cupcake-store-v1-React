import './Button.css'

const Button = ({clickHandler, buttonTitle}) => {

    return (
        <button className="button"
                onClick={clickHandler}>
            {buttonTitle}
        </button>
    );
}

export default Button;