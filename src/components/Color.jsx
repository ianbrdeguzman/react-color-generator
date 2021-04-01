import React, { Component } from 'react';

class Color extends Component {
    state = {
        copy: false,
    };
    handleClick = () => {
        this.setState({ copy: true });
        navigator.clipboard.writeText(`#${this.props.hex}`);
    };
    render() {
        return (
            <article
                onClick={this.handleClick}
                className='color false'
                style={{ backgroundColor: `#${this.props.hex}` }}
            >
                <p className='percent-value'>{this.props.weight}%</p>
                <p className='color-value'>#{this.props.hex}</p>
                {this.state.copy && <p className='alert'>Copied!</p>}
            </article>
        );
    }
}

export default Color;
