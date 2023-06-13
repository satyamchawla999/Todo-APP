import { useLocation } from "react-router-dom";
import {ListItems} from '/';


const Complete = ()=>{

    const location = useLocation();
    const state = location.state;

    console.log(state);
    return (
        <div className="todo">
            
            <h1 style={{color:"green"}}>Completed Tasks</h1>
            <hr></hr>

            <div className="listsection">
                {state.map((data)=>{
                    return (data.complete === true && <ListItems task={data} key={data.id} toggle={true}/>)
                })}
            </div>
            
        </div>
    )
}

export default Complete;