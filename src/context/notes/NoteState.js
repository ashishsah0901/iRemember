import NoteContext from './noteContext'
import { useState } from 'react';

const NoteState = (props) => {
    const baseUrl = "http://localhost:5000"
    const initialNotes = [];
    const [notes, setNotes] = useState(initialNotes);

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${baseUrl}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
                'Auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json();
        setNotes(notes.concat(note));
    }

    const getAllNotes = async () => {
        const response = await fetch(`${baseUrl}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'Application/json',
                'Auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setNotes(json);
    }

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${baseUrl}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'Application/json',
                'Auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();
        console.log(json);
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
    }

    const deleteNote = async (id) => {
        const response = await fetch(`${baseUrl}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'Application/json',
                'Auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json();
        console.log(json);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;