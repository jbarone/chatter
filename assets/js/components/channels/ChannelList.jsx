import React, {Component, PropTypes} from 'react';
import Channel from './Channel.jsx';

export default class ChannelList extends Component {
  render() {
    const {channels, setChannel} = this.props;
    return (
      <ul>{
        channels.map((channel) => {
          return (
            <Channel
              key={channel.id}
              channel={channel}
              {...this.props}
            />
          );
        })
      }</ul>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
};
