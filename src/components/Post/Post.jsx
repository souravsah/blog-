import React from 'react'
import { useNavigate } from 'react-router';
import { Postcss, Postcss1, Postcss2 } from './Post.style'

const Post = ({item}) => {
  // console.log(data)
  const navigate = useNavigate();
  const handlePost = (id) =>{
    navigate(`/${id}`)
  }
  console.log(item)
  return (
    <Postcss1 onClick={()=>handlePost(item.id)}>
        <ul>
            <Postcss>
            <img src={`${item.owner.picture}`} />
            <h3>{item.owner.firstName} {item.owner.lastName}</h3>    
            </Postcss>
            <li><span>{item.publishDate.substr(0,10)}</span></li>
            <li><span>{item.text.substring(1,10)}...</span></li>
            <Postcss2>
                <img src={`${item.image}`}/>
            </Postcss2>
        </ul>
    </Postcss1>
  )
}

export default Post