import BlogList from "./BlogList.js";
import useFetch from "./useFetch.js";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs");

    //! npx json-server --watch data/db.json --port 8000

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}></BlogList>}
            {/* <BlogList
                blogs={blogs.filter((blog) => blog.author === "karen")}
                title={"Karen's Blogs"}
            ></BlogList> */}
        </div>
    );
};

export default Home;
