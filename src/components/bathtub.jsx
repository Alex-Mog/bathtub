import React from 'react';
import '.././bathtub.css';

class Bathtub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      html: ''
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.updatePercent(),
      2000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  updatePercent() {
    if((this.state.percent <= 0 && this.props.status == -1) || (this.state.percent >= 100 && this.props.status == 1)){
      return false;
    }else{
      this.setState((state, props) => ({
        percent: state.percent + 20 * props.status
      }));
      this.showWater();
    }
  }
  
  showWater() {
    this.setState({html: ''});
    var count = this.state.percent / 20;
    for(var i=0; i<count; i++)
      this.setState((state, props) => ({
        html: state.html + '<div class="water"></div>'
      }));
  }
  
  render() {
    return (
      <div className="bathtub" dangerouslySetInnerHTML={{ __html: this.state.html }}>
      </div>
    );
  }
}

export default Bathtub;