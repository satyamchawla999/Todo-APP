import '../Assets/Styles/form.css'

const FormSection = (props) => {
    return (
        <div className="formSection">

            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.input} onChange={props.handleChange} placeholder='Add Task' required/>
                <input type="date" value={props.date} onChange={props.handleDateChange} required/>
                <button>Add</button>
            </form>

        </div>
    )
}

export default FormSection;