import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  onChangeClass = () => {
    this.setState(({ primary }) => ({ primary: !primary, active: primary }));
  };

  render() {
    const btnActiveLeft = classNames(
      "btn",
      "btn-primary",
      this.state.primary ? "active" : null,
    );

    const btnActiveRight = classNames(
      "btn",
      "btn-primary",
      this.state.active ? "active" : null,
    );

    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={btnActiveLeft}
          onClick={this.onChangeClass}
        >
          Left
        </button>

        <button
          type="button"
          className={btnActiveRight}
          onClick={this.onChangeClass}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
