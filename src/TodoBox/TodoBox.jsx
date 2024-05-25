import { Component } from "react";
import { cloneDeep } from "lodash";
import { Button, Form } from "react-bootstrap";
import Item from "../Item/index.js";

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            notes: [],
        };
    }

    handleDelete = (indexToDelete) => () => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((item, index) => index !== indexToDelete),
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const prevState = cloneDeep(this.state);

        if (!this.state.value.trim()) return;

        this.setState({
            value: "",
            notes: [prevState.value, ...prevState.notes],
        });
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <>
                <div className="mb-3">
                    <Form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <Form.Control
                                type="text"
                                value={this.state.value}
                                placeholder="I am going..."
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </div>
                        <Button variant="primary" type="submit">
              Add
                        </Button>
                    </Form>
                </div>
                {this.state.notes.map((note, index) => (
                    <Item
                        key={index}
                        task={note.toString()}
                        id={index}
                        onRemove={this.handleDelete(index)}
                    />
                ))}
            </>
        );
    }
}

export default TodoBox;
