import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs"); //! import data, isPending and error from useFetch; data: blogs means that in this file data gets attribute blogs for convenience

    // const handleDelete = (id) => {
    //     // ! if id of the blog does not match to our blog's button we clicked than we just give another object newBlogs without our blog which id is matched
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    //     // ! to BlogList -> handleDelete={handleDelete}
    // };

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {/* //! if no blogs than it doesn't even go further */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
            {/* //! it is possible to use blogs={blogs.filter((blog) => blog.author === 'karen')} to obviously filter blogs */}
        </div>
    );
};

export default Home;
