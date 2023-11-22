import React, { useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import NotesData from "./NotesData";



function NoteApp() {
    const [notes, setNotes] = useState(NotesData())

    const [note, setNote] = useState({})


    function saveNote() {
        if (note.title.trim() !== '' && note.body.trim() !== '') {
            setNotes([note, ...notes]);
            setNote({ title: '', body: '', priority: 0 })

        }

    }

    const setFormState = ({ target }) => {
        const { name, value } = target;
        setNote((prevNote) => ({
            ...prevNote, [name]: value
        }));
    };



    function Notes() {
        return (
            <div className="row justify-content-center">
                <div className=" col-8 align-self-left m-0 p-0">
                    <div className="py-1 text-success">
                        <h3 className="text-center h4">My Notes</h3>
                    </div>
                    <div className="card-body px-2">
                        {notes.map((note, index) =>
                            <Card key={index} title={note.title} body={note.body} archived={note.archived} priority={note.priority} />
                        )}

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=" pb-2">
            <NavBar notesCount={notes.length} />
            <div className="row p-4 rounded rounded-lg form-group my-2 mx-5 justify-content-center text-center">


                <div className="col-6 justify-content-center">
                    <input type="text" className="form-control mb-2" value={note.title} onChange={setFormState} name="title" id="" placeholder="Title" />
                    <input type="text" className="form-control mb-2" value={note.body} onChange={setFormState} name="body" id="" placeholder="Body" />
                    <input type="number" className="form-control mb-2" value={note.priority} onChange={setFormState} name="priority" id="" placeholder="Priority" />
                    <button name="" id="" className="btn btn-primary" onClick={saveNote} >Add Note</button>
                </div>
            </div>
            <Notes />

        </div>
    );
}

export default NoteApp;