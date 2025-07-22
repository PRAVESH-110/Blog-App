import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}){
    const [imageUrl, setImageUrl] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (featuredImage) {
            try {
                const url = appwriteService.getFilePreview(featuredImage);
                console.log('Image preview URL:', url);
                setImageUrl(url);
            } catch (error) {
                console.error("Error loading image:", error);
                setImageError(true);
            }
        }
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`} className="block">
            <div className='w-full rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border' style={{ background: '#112240', color: '#ccd6f6', borderColor: '#233554' }}>
                <div className='w-full h-48 mb-4 overflow-hidden rounded-xl'>
                    {imageUrl && !imageError ? (
                        <img 
                            src={imageUrl} 
                            alt={title} 
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className='w-full h-full bg-[#233554] flex items-center justify-center'>
                            <span className='text-[#8892b0]'>No image available</span>
                        </div>
                    )}
                </div>
                <div className='p-2'>
                    <h2 className='text-xl font-semibold transition-colors duration-300' style={{ color: '#ccd6f6' }}>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    )
}
export default PostCard;