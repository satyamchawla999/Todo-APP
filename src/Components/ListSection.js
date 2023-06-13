import { ListItems } from './SubComponents';
import '../Assets/Styles/list.css'

const ListSection = (props)=>{
    
    const {tasks} = props;
    
    return (
        <div className="listsection">

            {tasks.map((task)=>(
                <ListItems
                    task={task}
                    key={task.id}
                />
            ))}
            
            
        </div>
    )
}

export default ListSection;