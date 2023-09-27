import React from 'react'
import './Card.css'
import CommentBox from '../Comments/CommentBox.jsx'

export default function Card({item}) {
  // console.log(item)
  return (
    <div className = 'card'>
    <h1>Name: {item.ProjectName} </h1>
    <h2>Url:{item.URL} </h2>
    <img  className = 'image' width={400} src = {`${item.imgURL}`} alt = 'Project Screenshot'/>
    <h2>Point1:{item.Point1} </h2>
    <h2>Point2:{item.Point2} </h2>
    <h2>Point3:{item.Point3} </h2>
    <CommentBox comm = {item}/>
    </div>
  )
}
