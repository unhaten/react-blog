import { useParams } from "react-router-dom";
import useFetch from "./useFetch.js";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams(); //! allow to grab parameters or route parameters from Routes
    const {
        data: blog,
        error,
        isPending,
    } = useFetch("http://localhost:8000/blogs/" + id); //! getting data again from useFetch function that is returned like -> return { data, isPending, error }; id is what we get from useParams() that are coming from App.js
    const history = useHistory();

    // ! BLOG.ID OR JUST ID HERE MAKES NO MATTER CUZ THEY JUST IMPORTED DIFFERENT WAYS

    const handleClick = (e) => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        }); //! it is possible to change url on something more flexible
    };

    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
            {error && <p>error</p>}
            {/* //! must not forget that fetch from data takes time so that is why we use blog && ... */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
