import { useLocation } from "react-router-dom";
import {ListItems} from '/';


const Delete = ()=>{

    const location = useLocation();
    const state = location.state;

    console.log(state);
    return (
        <div className="todo">

            <h1 style={{color:"red"}}>Deleted Tasks</h1>
            <hr></hr>

            <div className="listsection">
                {state.map((data)=>{
                    return (data.delete === true && <ListItems task={data} key={data.id} toggle={true}/>)
                })} 
            </div>  
            
        </div>
    )
}

export default Delete;