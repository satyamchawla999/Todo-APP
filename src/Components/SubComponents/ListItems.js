import { useState } from 'react';
import '../../Assets/Styles/items.css'

const ListItems = (props)=>{

    const task = props.task
    const toggle = props.toggle;

    const [check,setCheck] = useState(false);
    const [complete,setComplete] = useState(false);


    const handleCheckBoxChange = ()=>{

        task.delete = (!check ? task.delete = true : task.delete = false)

        setCheck(!check);
    }

    const handleComplete = (e)=>{
        e.preventDefault();

        task.complete = (!complete ? task.complete = true : task.complete = false)

        setComplete(!complete);
    }

    return (
        <div className="items">
            
            <div>
                <p className='info'>Task : {task.input}</p>
                <p className='info'>Date : {task.date}</p>
            </div>
            
            {!toggle && 
                <>
                    <form>
                        <input type='checkbox' checked={check} onChange={handleCheckBoxChange}/>
                        <button onClick={handleComplete}>{complete ? <>Completed</> : <>Complete</>}</button>
                    </form>
                </>
            }
            
            
        </div>
    )
}

export default ListItems