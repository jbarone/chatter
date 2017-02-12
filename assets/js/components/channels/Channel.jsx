import React, { Component, PropTypes } from 'react';

class Channel extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const {channel, setChannel} = this.props;
    setChannel(channel);
  }

  render() {
    const {channel, activeChannel} = this.props;
    const active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick}>
          {channel.name}
        </a>
      </li>
    );
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
};

export default Channel;
