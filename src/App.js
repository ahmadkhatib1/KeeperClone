import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function Keper() {
  const [notes, setnotes] = useState([]);
  const handelClick = (note) => {
    setnotes(prev => {
      return [...prev, note]
    })
  }
  const handelDelet = (id) => {
    setnotes(pre => {
      return pre.filter((note, index) => {
        return index !== id;
      })
    })
  }
  return <div>
    <Header />
    <CreateArea addnote={handelClick} />
    {notes.map((note, index) => (
      <Note key={index} title={note.title} content={note.content} deletNote={handelDelet} id={index} />
    ))}
    <Footer />
  </div>
}

export default Keper;
