import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Post from "../Post";

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        await this.getPosts();
    }

    getPosts = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await res.json();
            this.setState({ posts });
        } catch (error) {
            console.dir(error);
            throw Error(error);
        }
    };

    render() {
        const { posts } = this.state;
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
    }
}

export default PostCatalog;
