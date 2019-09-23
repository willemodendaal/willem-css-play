import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";

const App = () => {
    return (
        <div className={"container"}>
            <div id={"header"}>
                <div id={"logo"} >[logo]</div>
                <div id={"header-links"}>
                    <a href>About</a>
                    <a href>Guide</a>
                </div>
            </div>
            
            <div id={"toolbar"}>Toolbar</div>
            
            <div id={"main"}>Main Body</div>
            
            <div id={"footer"}>Footer</div>
        </div>
    );
};

export default App;

ReactDOM.render(<App/>, document.getElementById("app"));