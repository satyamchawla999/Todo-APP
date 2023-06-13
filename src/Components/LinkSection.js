import {Link } from "react-router-dom";
import '../Assets/Styles/button.css'

const LinkSection = (props)=>{
    console.log("from link section",props.tasks)
    return (
            
        <div className="linkSection">

            <div className="deletepage">
                <Link  style={{ textDecoration: 'none', color: 'white' }} to="/delete" state={props.tasks} >
                    <span>
                        <p>Delete Page</p>
                    </span> 
                </Link>
            </div>

            <div style={{ backgroundColor: 'green' }} className="completepage green">
                <Link  style={{ textDecoration: 'none', color: 'white' }} to="/complete" state={props.tasks} >
                    <span>
                        <p>Complete Page</p>
                    </span>
                </Link>
            </div>

        </div>    
        
    )
}

export default LinkSection;