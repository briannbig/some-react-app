import React from "react";


function NavBar({notesCount}) {

    return (
        <nav className=" bg-dark text-center py-2">
            <ul>
                <li className="badge badge-success text-white">Total: {notesCount}</li>
            </ul>
            <h1 className="text-center text-white"> <span className="text-success">&#9641;</span> Note App</h1>
        </nav>
    );

}

export default NavBar;