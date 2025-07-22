import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center" style={{ background: '#0a192f', color: '#ccd6f6', fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif" }}>
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-100">
                            <h1 className="text-3xl font-bold hover:text-[#64ffda]" style={{ color: '#64ffda' }}>
                                Login/ Signup to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center" style={{ background: '#0a192f', color: '#ccd6f6', fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif" }}>
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-100">
                            <h1 className="text-2xl font-bold hover:text-[#64ffda]">
                                No posts to show
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8' style={{ background: '#0a192f', color: '#ccd6f6', fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif" }}>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home