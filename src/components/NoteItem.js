import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNotes } = props;
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt btn btn-sm" onClick={() => { deleteNote(note._id); props.showAlert("Data deleted successfully", "success") }}></i>
                    <i className="fas fa-edit btn btn-sm mx-1" onClick={() => { updateNotes(note) }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
