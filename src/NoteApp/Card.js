import React, { useState } from "react";



function Card({ title, body, priority, archived }) {

    const [note, setNote] = useState({ title: title, body: body, priority: priority, archived: archived })

    const archiveItem = () => {
        setNote(prevNote => ({ ...prevNote, archived: true }));
    }

    const unarchiveItem = () => {
        setNote(prevNote => ({ ...prevNote, archived: false }));
    }

    const increasePriority = () => {
        setNote(prevNote => ({ ...prevNote, priority: prevNote.priority + 1 }));
    }

    const decreasePriority = () => {
        setNote(prevNote => ({ ...prevNote, priority: prevNote.priority - 1 }));
    }

    const Header = () => {
        switch (note.priority) {
            case 1:
                return <div className="card-footer text-white bg-primary">{note.priority}</div>
            case 2:
                return <div className="card-footer text-white bg-secondary">{note.priority}</div>

            default:
                return <div className="card-footer text-white bg-dark">{note.priority}</div>
        }
    }

    const onLastPriority = note.priority === 1;
    const onHighestPriority = note.priority === 3;

    return (
        <div className={`card rounded  my-1 p-0 small`} >
            <Header />
            <div className="card-body py-1">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.body}</p>
                    </div>

                </div>

                <div className="row justify-content-between">

                    <div className="col-2 align-self-start " >
                        <button className={`btn btn-sm ${note.archived ? 'btn-secondary' : 'btn-danger'}`}
                            onClick={note.archived ? unarchiveItem : archiveItem}>
                            {note.archived ? 'Unarchive' : 'Archive'}
                        </button>
                    </div>

                    <div className="col-3 align-self-end " >
                        <div className="row justify-content-between">
                            <div className="col m-1">
                                <button className=" btn btn-sm btn-warning" disabled={onLastPriority} onClick={decreasePriority}>
                                    -
                                </button>
                            </div>
                            <div className="col m-1">
                                {note.priority}
                            </div>
                            <div className="col m-1">
                                <button className=" btn btn-sm btn-success" disabled={onHighestPriority} onClick={increasePriority}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;
