import React from 'react';

class Card extends React.Component {
    render() {
        const {title, text} = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    {title ? <h4 className="card-title">{title}</h4> : null}
                    {text ? <p className="card-title">{text}</p>: null}
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    title: null,
    text: null
}

export default Card;
