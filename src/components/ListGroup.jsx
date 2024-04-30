import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {children.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
