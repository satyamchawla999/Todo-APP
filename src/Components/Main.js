import { useEffect,useState } from "react";

import FormSection from "./FormSection";
import LinkSection from "./LinkSection";
import ListSection from "./ListSection";

import '../Assets/Styles/main.css'


const Main = ()=>{

    const[input,setInput] = useState("");
    const[date,setDate] = useState("");

    const[tasks,setTasks] = useState([]);

    useEffect(()=>{console.log(tasks)})

    const handleSubmit = (e)=>{
        e.preventDefault();

        const data = {
            input:input,
            date:date,
            id:tasks.length+1,
            delete:false,
            complete:false
        }

        setTasks(old=>[...old,data]);

        console.log(tasks);
        
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleDateChange = (e)=>{
        e.preventDefault();
        setDate(e.target.value)
    }

    return (
        <div className="todo">

            <h1>Todo List</h1>

            <hr/>

            <FormSection
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                handleDateChange = {handleDateChange}
                input={input}
                date={date}
            />

            <hr/>

            
            <LinkSection tasks={tasks}/>

            <hr/>
            
            <ListSection
                tasks={tasks}
            />

        </div>
    )
}

export default Main;