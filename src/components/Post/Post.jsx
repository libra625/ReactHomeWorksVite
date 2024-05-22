import { Card, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Post = (props) => {
    return (
        <ListGroup.Item
            variant="primary"
            className="posts_single-post"
            data-post-id={props.id}
        >
            <Card border="info" bg="dark" text="light">
                <Card.Body>
                    <Card.Title className="posts__post-title">{props.title}</Card.Title>
                    <Card.Text className="posts__post-description">
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Post;
