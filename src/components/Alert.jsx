import "/node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";

class Alert extends React.Component {
  render() {
    const { type, text } = this.props;

    return (
      <div className={"alert alert-" + type} role="alert">
        {text}
      </div>
    );
  }
}

Alert.defaultProps = {
  type: "warning",
  text: "Alert",
};

export default Alert;
