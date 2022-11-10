import React, { useState,useEffect } from 'react'
import { Singlell, Singlepostcss,Singlell2,Image } from './SinglePost.style'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SinglePost = ({id}) => {
  const [post,setpost]=useState(null);
  useEffect(()=>{
    const config={
        headers:{
            'app-id':"6368f06bfa56035250805f95"
        }
    }
    axios.get(`https://dummyapi.io/data/v1/post/${id}`,config).then((response)=>{
        setpost(response.data)
    });
  },[])
  console.log(post)
    return (
    <>
    {
        post?
    <Singlepostcss>
        <ul>
            <Singlell>
                <img src={post.image} />
            </Singlell>
            <Image>
                <img src={post.owner.picture} />
            </Image>
            <Singlell2>
                <h3>By {post.owner.firstName} {post.owner.lastName}</h3>
            </Singlell2>
            <li>
                <h3>{post.text}</h3>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.


                <ul>
                    <li>Dog</li>
                    <li>animal</li>
                    <li>Canine</li>
                </ul>
            </li>
        </ul>
    </Singlepostcss>:<Skeleton width={1000} height={600}/> 
}
    </>
  )
}

export default SinglePost