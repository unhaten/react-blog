import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", { //! it is possible to change url on something more flexible
            method: "POST",
            headers: { "Content-Type": "application/json" }, //! tells that we are sending json data
            body: JSON.stringify(blog), //! turn data from object into a string
        }).then(() => {
            setIsPending(false);
            // history.go(-1); //! moves us to a BlogDetails
            history.push("/"); //! moves to homepage
        });
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //! get value of the exact input and give its value to a title that initially has useState('')
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                ></textarea>
                <label>Blog author:</label>
                <select
                    required
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="mario">mario</option>
                    <option value="carl">carl</option>
                    <option value="karen">karen</option>
                </select>
                {/* //! button appears only if isPending = false */}
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

                {/* //! here we can see that all inputs change LIVE */}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
};

export default Create;
