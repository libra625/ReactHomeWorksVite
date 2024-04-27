import React from 'react';

class Definitions extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <dl>
                {
                    data.map(definition => (
                        <React.Fragment key={definition.id}>
                            <dt>{definition.dt}</dt>
                            <dd>{definition.dd}</dd>
                            <br/>
                        </React.Fragment>
                    ))
                }
            </dl>
        )
    }
}

Definitions.defaultProps = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
]

export default Definitions;
