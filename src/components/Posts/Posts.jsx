import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import { v4 as uuidv4 } from 'uuid'


const Posts = () => {
  return (
    <div className='Posts'>
        {PostsData.map((post, id)=>{
            return <Post key={uuidv4()} data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts
