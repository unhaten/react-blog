import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    //! const BlogList = (props) => {
    //! const blogs = props.blogs; const title = props.title; const handleDelete = props.handleDelete;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* //! we need to pass a key all the time because every blog has its own key/id */}
                    <Link to={`/blogs/${blog.id}`}>
                        {/* //! that's how we can get to specific blog news */}
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    {/* //? <button onClick={() => handleDelete(blog.id)}>
                        Delete blog
                    </button> */}
                </div>
            ))}
        </div>
    );
};

export default BlogList;
