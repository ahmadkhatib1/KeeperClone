import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
export default function Note({ title, content, deletNote, id }) {
    return <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => deletNote(id)}>
            <DeleteIcon />
        </button>
    </div>;
}