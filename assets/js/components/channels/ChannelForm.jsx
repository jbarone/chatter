import React, {Component, PropTypes} from 'react';

export default class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {addChannel} = this.props;
    const node = this.refs.channel;
    const channelName = node.value;
    addChannel(channelName);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            placeholder='Add Channel'
            className='form-control'
            type='text'
            ref='channel'
          />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
};
