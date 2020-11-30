import React from "react";
import Block1 from "./Barbery/Block1";
import Context from "./Barbery/context";

function App(){
    return (
        <Context.Provider>
            <div className="wrapper">
                <div style={{textAlign: "center", marginTop: "3rem"}}>
                    <h2>Вийшло!</h2>
                </div>
                <Block1/>
            </div>
        </Context.Provider>
    );
}

export default App;
