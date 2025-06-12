import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    console.log('featuredImage:', post.featuredImage);
                    console.log('previewURL:', appwriteService.getFilePreview(post.featuredImage));
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 flex justify-center bg-gray-100 min-h-screen">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
                <div className="flex flex-col items-center mb-6">
                    {post.featuredImage && (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl w-full max-h-96 object-cover mb-4"
                        />
                    )}
                    <h1 className="text-3xl font-bold mb-2 text-center">{post.title}</h1>
                    <div className="text-gray-500 mb-4 text-center">
                        {/* Optionally add author/date here */}
                    </div>
                    <div className="w-full prose prose-lg">
                        {parse(post.content)}
                    </div>
                </div>
                {isAuthor && (
                    <div className="flex justify-end gap-4 mt-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
        </div>
    ) : null;
}