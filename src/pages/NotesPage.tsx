import React from 'react'
import ListItem from '../components/ListItem'
import notes from '../assets/data'

const NotesPage = () => {
  return (
    <div>{notes.map((note,index)=>{
        return <>
            <ListItem note={note}/>
            </>
    })}</div>
  )
}

export default NotesPage