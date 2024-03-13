import React, {useState,useEffect} from 'react'
import {PostCard, Container} from '../components/index'
import service from '../appwrite/config'
function Allposts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }
    , [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-3 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allposts