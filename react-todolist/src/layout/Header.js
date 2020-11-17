import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: "2rem"
}

export default Header;