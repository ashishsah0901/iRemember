import NoteContext from './noteContext'
import { useState } from 'react';

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "617970cf07f49cef4ac35e8d",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:27.850Z",
            "__v": 0
        },
        {
            "_id": "617970cf07f49cef4ac35e8d",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:27.850Z",
            "__v": 0
        },
        {
            "_id": "617970cf07f49cef4ac35e8d",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:27.850Z",
            "__v": 0
        },
        {
            "_id": "617970cf07f49cef4ac35e8d",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:27.850Z",
            "__v": 0
        },
        {
            "_id": "617970cf07f49cef4ac35e8d",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:27.850Z",
            "__v": 0
        },
        {
            "_id": "617970d007f49cef4ac35e8f",
            "user": "6179346dbe1b8402d7850e7b",
            "title": "Test note2",
            "description": "This is a demo description2",
            "tag": "test",
            "date": "2021-10-27T15:31:28.345Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;