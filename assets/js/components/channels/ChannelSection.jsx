import React, {Component, PropTypes} from 'react';
import ChannelList from './ChannelList.jsx';
import ChannelForm from './ChannelForm.jsx';

export default class ChannelSection extends Component {
  render() {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Channels</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  addChannel: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
};
