import './Campo.css';

const Campo = (props) => {
    const { titulo, setValue, type = 'text' } = props;

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return (
        <div className={ `campo campo-${type}` }>
            <label>{ titulo }</label>
            <input type={ type } {...props} onChange={handleChange} />
        </div>
    )
}

export default Campo