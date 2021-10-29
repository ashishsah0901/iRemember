import NoteContext from './noteContext'
import { useState } from 'react';

const NoteState = (props) => {
    const baseUrl = "http://localhost:5000"
    const initialNotes = [];
    const [notes, setNotes] = useState(initialNotes);

    const addNote = async (title, description, tag) => {
        try {
            const response = await fetch(`${baseUrl}/api/notes/addnote`, {
                method: "POST",
                headers: {
                    'Content-Type': 'Application/json',
                    'Auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag })
            })
            const json = await response.json();
            if (json.success) {
                setNotes(notes.concat(json.notes));
                props.showAlert("Data saved successfully", "success");
            } else {
                props.showAlert("Unable to save data", "danger");
            }

        } catch (error) {
            props.showAlert("Server not respondiing", "danger");
        }
    }

    const getAllNotes = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    'Content-Type': 'Application/json',
                    'Auth-token': localStorage.getItem('token')
                }
            })
            const json = await response.json();
            if (json.success) {
                setNotes(json.notes);
            } else {
                props.showAlert("Unable to get data", "danger")
                setNotes([]);
            }
        } catch (error) {
            props.showAlert("Server not respondiing", "danger");
        }
    }

    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${baseUrl}/api/notes/updatenote/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'Application/json',
                    'Auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag })
            })
            const json = await response.json();
            if (json.success) {
                let newNotes = JSON.parse(JSON.stringify(notes));
                for (let index = 0; index < newNotes.length; index++) {
                    const note = newNotes[index];
                    if (note._id === id) {
                        newNotes[index].title = title;
                        newNotes[index].description = description;
                        newNotes[index].tag = tag;
                        break;
                    }
                }
                setNotes(newNotes)
                props.showAlert("Data updated successfully", "success");
            } else {
                props.showAlert("Unable to update data", "danger");
            }
        } catch (error) {
            props.showAlert("Server not respondiing", "danger");
        }
    }

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'Application/json',
                    'Auth-token': localStorage.getItem('token')
                },
            })
            const json = await response.json();
            if (json.success) {
                const newNotes = notes.filter((note) => { return note._id !== id })
                setNotes(newNotes);
                props.showAlert("Data deleted successfully", "success");
            } else {
                props.showAlert("Unable to delete data", "danger");
            }
        } catch (error) {
            props.showAlert("Server not respondiing", "danger");
        }
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;