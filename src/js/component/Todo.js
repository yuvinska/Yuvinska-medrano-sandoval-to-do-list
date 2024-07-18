import React, { useState } from "react";

const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className="container col-4 todofondo">
                <h1 className="display-4" >My To Do List</h1>
                <ul>
                    <li>
                        <input
                            onChange={(e) => {
                                console.log(e.target.value)
                                setInputValue(e.target.value)
                            }
                            }
                            value={inputValue}
                            onKeyUp={(e) => {
                                console.log (e)
                                if (e.key === "Enter") { setTodos(todos.concat(inputValue)); setInputValue("") 
                                    
                                } }}
                            type="text"
                            placeholder="¿What you wanna do?" >
                        </input>

                    </li>
                    {todos.map((item, index) => (
                        <li key= {index}>{item} {""} <svg onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg> </li>
                    ))}

                </ul>
                <div className="tareas" >{todos.length} Tasks To Do</div>

            </div>
        </>

    );
};

export default Todo;
