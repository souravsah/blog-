import React from 'react'
import Layout from '../../Layout/Layout'
import SinglePost from '../../components/SinglePost/SinglePost'
import { useParams } from 'react-router'
const PostPage = () => {
  let {post} = useParams();
  return (
    <>
    <Layout>
      <SinglePost id={post}/>
    </Layout>      
    </>
  )
}

export default PostPage