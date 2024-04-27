import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <button type="button" className="btn btn-primary">{this.props.btnText}</button>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    title: "Buy smth padla!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    description: "Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla Buy smth padla ",
    btnText: "Buy smth padla Buy smth padla Buy smth padla I'll find you in 3 2 1 YOU ARE DEAD PADLA"
}

export default Card;
