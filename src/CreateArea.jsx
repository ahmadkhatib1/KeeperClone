import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';

const Createarea = ({ addnote }) => {
    const [isExpanding, setisExpanding] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const handelChange = (e) => {
        const { name, value } = e.target;
        setNote(prev => {
            return {
                ...prev,
                [name]: [value]
            }
        })
    }
    const submeatNote = (e) => {
        addnote(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }
    const expanding = () => {
        setisExpanding(true);
    }
    return (
        <div>
            <form className='create-note'>
                {isExpanding &&
                    <input
                        name="title"
                        onChange={handelChange}
                        value={note.title}
                        placeholder="Title"
                    />}
                <textarea
                    onClick={expanding}
                    name="content"
                    onChange={handelChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanding ? 3 : 1}
                />
                <Zoom in={isExpanding}>
                    <button onClick={submeatNote}>
                        <AddIcon />
                    </button>
                </Zoom>
            </form>
        </div>
    );
}

export default Createarea;
