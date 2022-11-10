import axios from "axios"
import React,{useEffect, useState} from 'react'
import { Commoncompcss ,Heading, Stylecss } from './Commoncomp.style.js'
import Post from './../Post/Post'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Commoncomp = () => {
  const [data,setpost]=useState(null);

  useEffect(()=>{
    const config={
        headers:{
            'app-id':"6368f06bfa56035250805f95"
        }
    }
    axios.get('https://dummyapi.io/data/v1/post',config).then((response)=>{
        setpost(response.data.data)
    });
  },[])
//   console.log(data)
    return (
        <Heading>
        <Stylecss>
        <h1>
          {/* <span>~~~~~~~~</span> */}
          <span>Post</span>
          {/* <span>~~~~~~~~</span> */}
          </h1>
        </Stylecss>
          
  <Commoncompcss>
  {data?data.map((item,idx)=>
        // <img src={`${item.addImageLink}`} alt="" />
        <Post item={item}/>
       ):new Array(21).fill(21).map(()=><Skeleton width={200} height={350} />)}
      </Commoncompcss>
      </Heading>
    
  )
}

export default Commoncomp