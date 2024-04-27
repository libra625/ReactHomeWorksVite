import React from 'react';

class Card extends React.Component {
    render() {
        const {title, text} = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    {title ? <h4 className="card-title">{title}</h4> : ''}
                    {text ? <p className="card-title">{text}</p>: ''}
                </div>
            </div>
        )
    }
}

// Card.defaultProps = {
//     title: 'Buy smth padla',
//     text: 'Buy your name and email address'
// }

export default Card;
