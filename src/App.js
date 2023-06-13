import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Delete,Complete } from "./Components/SubComponents";
import Main from './Components/Main'

const MainComponent = ()=>{
    return (
        <div className="main">
            
            
            <Router>
                <Routes>
                    <Route path = "/" element={<Main/>}/>
                    <Route path = "/delete" element={<Delete/>}/>
                    <Route path = "/complete" element={<Complete/>}/>
                </Routes>
            </Router>
            
        
        </div>
      );
}

export default MainComponent;