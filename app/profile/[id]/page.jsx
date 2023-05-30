"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const Profile = ({ params }) => {

    const [posts, setPosts] = useState([]);

    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?._id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, [params._id])

    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName} personalized profile page`}
            data={posts}
        />
    )
}

export default Profile
