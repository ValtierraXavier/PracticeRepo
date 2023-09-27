import React from 'react'
import './CommentBox.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CommentBox(comm){
comm = comm.comm
const [comments, setComments] = useState(comm.Comments)
const [showComments, setShowComments] = useState(false)
const [likes, setLikes] = useState(comm.Likes)
const [showingForm, setShowingForm] = useState(false)


// const [liked, setLiked] = useState(false)

// function handlelikes(){
//   if(liked == false){
//     setLikes(likes + 1)
//     document.getElementById('likeIcon').style.color = 'red'
//     setLiked(true)
//   }else if(liked == true){
//     setLikes(likes - 1)
//     document.getElementById('likeIcon').style.color = 'black'
//     setLiked(false)
// }
// }
return (
  <div className='commentsContainer'>
      <button>Press</button>
      <h1 className='commentsTitle'>Comments</h1>
      <div className='commentsBoxBanner'>
        <div className ='bannerItems' id='commenter'>Name</div>
        <div className = 'bannerItems' id='postDate'>Post Date</div>
        <div className='bannerItems' id ='likeDiv'>
          <div className='likeDivItems' id = 'likeIcon'>♡</div>
          <div className='likeDivItems' id = 'likeCount'>{likes}</div>
        </div>
      </div>
      <div className='commentsTextWindow'>
        {comments.map((commentText, index)=>{
       
            return(<p className='comment' key={index} placeholder='Join the Discussion'>{commentText}</p>)
          
        })}
      </div>
    </div>
  )
}
