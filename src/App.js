import React from 'react';
import topImage from './illust.svg';
import './App.css';
import CountUp from 'react-countup';
class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      voters:4232,
      issues:4237,
      engage:false
    }
  }

  render(){    
    return (
      <div className="App">
        <div className="desc-wrapper">
          <div className="desc">    
            <div>
              <img src={topImage} alt="" style={{width:120}}/>
            </div>
            <div>
                Participation in engagements let you take judgements for the issued deals. You earn piggy tokens as a reward.
            </div>
          </div>
        </div>
        <div className="heading">
          Take a closer look
        </div>
        <div className="button-section-wrapper">
          <div className="button-section">
            <div style={{flex:1}}>
              <div>
                Want to dig in?
              </div>
              <div>
                <button disabled={this.state.engage}>
                  Engage
                </button>
              </div>
            </div>
            <div style={{flex:1}}>
              <div>
                Want to Opt out?
              </div>
              <div>
                <button disabled={!this.state.engage}>
                  Disengage
                </button>
              </div>
            </div>
            <div style={{flex:1}}>
              <div>
                Ready to participate?
              </div>
              <div>
                <button disabled={!this.state.engage}>
                  Enter the chatroom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-item-wrapper">
            <div className="footer-item">    
              <div>
                <div>
                  Voters
                </div>
                <div className="count">
                  <CountUp end={this.state.voters} />
                </div>
              </div>
              <div>
                <div>
                  Issues
                </div>
                <div className="count">
                  <CountUp end={this.state.issues} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
