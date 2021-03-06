import React, {Component} from 'react';
import ChannelSection from './components/channels/ChannelSection.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {}
    };
    this.addChannel = this.addChannel.bind(this);
    this.setChannel = this.setChannel.bind(this);
  }

  addChannel(name) {
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    //TODO: send to server
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    //TODO: get messages from server
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel}
            setChannel={this.setChannel}
          />
        </div>
      </div>
    );
  }
}
