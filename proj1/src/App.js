import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App(){
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: "Купити хліб"},
        {id: 2, completed: true, title: "Купити масло"},
        {id: 3, completed: false, title: "Купити молоко"},
    ]);

    function toggleTodo(id){
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function removeTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function addTodo(title){
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                },
            ])
        );
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React Tutorial</h1>
                <div className="myLink">
                    <a href="https://www.youtube.com/watch?v=xJZa2_aldDs">
                        React JS. Полный Курс 2020 (Вся Теория Включена!) - Владилен Минин
                    </a>
                    <h4 className='tx' style={{color: 'red'}}>Доробив до: 1:00:08 з 1:17:30. Далі поки що складно для
                        мене...</h4>
                </div>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                ) : (
                    <p>No todos!</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
