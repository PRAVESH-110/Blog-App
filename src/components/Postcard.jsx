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
            <div className='w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200'>
                <div className='w-full h-48 mb-4 overflow-hidden rounded-xl'>
                    {imageUrl && !imageError ? (
                        <img 
                            src={imageUrl} 
                            alt={title} 
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                            <span className='text-gray-500'>No image available</span>
                        </div>
                    )}
                </div>
                <div className='p-2'>
                    <h2 className='text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300'>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    )
}
export default PostCard;