import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Post from "../Post";

const PostCatalog = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: [],
    //     };
    // }
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
    // try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        setPosts(posts);
    // } catch (error) {
    //     console.dir(error);
    //     throw Error(error);
    // }
    };

    useEffect(() => {
        getPosts().catch(console.error);
    }, []);

    return (
        <div className="posts">
            <ListGroup className="posts__list">
                {posts.map((post) => {
                    return (
                        <Post
                            title={post.title}
                            id={post.id}
                            content={post.body}
                            key={post.id}
                        ></Post>
                    );
                })}
            </ListGroup>
        </div>
    );
};

export default PostCatalog;
