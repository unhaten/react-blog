import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // ! useState -> [value, function]
    const [blogs, setBlogs] = useState([
        {
            title: "new website",
            body: "lorem ipsum",
            author: "mario",
            id: 1,
        },
        {
            title: "top shelf pussy got me disappointed in myself",
            body: "lorem ipsum",
            author: "carl",
            id: 2,
        },
        {
            title: "one time for my bitches, two times for my guys",
            body: "lorem ipsum",
            author: "karen",
            id: 3,
        },
    ]);

    const handleDelete = (id) => {
        // ! if id of the blog does not match to our blog's button we clicked than we just give another object newBlogs without our blog which id is matched
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All Blogs"
                handleDelete={handleDelete}
            ></BlogList>
            {/* is is possible to use blogs={blogs.filter((blog) => blog.author === 'karen')} to obviously filter blogs */}
        </div>
    );
};

export default Home;
