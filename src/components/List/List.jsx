import { Component } from "react";
import { Button } from "react-bootstrap";
import Log from "../Log/Log.jsx";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            logs: [],
        };
    }

    handleClick = (event) => {
        this.setState((previousState) => {
            const newValue =
        event.target.name === "plus"
            ? previousState.value + 1
            : previousState.value - 1;
            return {
                value: newValue,
                logs: [newValue, ...previousState.logs],
            };
        });
    };

    handleDelete = (id) => {
        this.setState((previousState) => ({
            logs: previousState.logs.filter((log, index) => id !== index),
            value: previousState.logs[0] - 1,
        }));
        console.log(this.state.logs[0]);
    };

    render() {
        const { logs } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <Button
                        name="plus"
                        variant="outline-success"
                        onClick={this.handleClick}
                        size="lg"
                    >
            +
                    </Button>
                    <Button
                        name="minus"
                        variant="outline-danger"
                        onClick={this.handleClick}
                        size="lg"
                    >
            -
                    </Button>
                    <Button
                        name="plus"
                        variant="outline-dark"
                        onClick={this.handleClick}
                        size="lg"
                    >
            ?
                    </Button>
                </div>

                <div className="list-group">
                    {logs.map((log, index) => (
                        <Log
                            key={index}
                            id={index}
                            value={log}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default List;
