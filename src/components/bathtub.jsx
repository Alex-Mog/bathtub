import React from 'react';
import '.././bathtub.css';

class Bathtub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water_percent: 0,
      water_fillable: [0,0,0,0,0]
    };
  }
  
  componentDidMount() {
    this.timer = setInterval(
      () => this.updatePercent(),
      2000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  updatePercent() {
    if((this.state.water_percent <= 0 && this.props.cockStatus == -1) || (this.state.water_percent >= 100 && this.props.cockStatus == 1)){
      return false;
    }else{
      this.setState((state, props) => ({
        water_percent: state.water_percent + 20 * props.cockStatus
      }));
      this.showWater();
    }
  }
  
  showWater() {
    var count = this.state.water_percent / 20;
    switch(count){
      case 0:
        this.setState({water_fillable: [0,0,0,0,0]})
        break;
      case 1:
        this.setState({water_fillable: [1,0,0,0,0]})
        break;
      case 2:
        this.setState({water_fillable: [1,1,0,0,0]})
        break;
      case 3:
        this.setState({water_fillable: [1,1,1,0,0]})
        break;
      case 4:
        this.setState({water_fillable: [1,1,1,1,0]})
        break;
      case 5:
        this.setState({water_fillable: [1,1,1,1,1]})
        break;
    }
  }
  
  render() {
    return (
      <div className="bathtub">
        <div className={ this.state.water_fillable[0] == 0 ? 'water empty' : 'water' }></div>
        <div className={ this.state.water_fillable[1] == 0 ? 'water empty' : 'water' }></div>
        <div className={ this.state.water_fillable[2] == 0 ? 'water empty' : 'water' }></div>
        <div className={ this.state.water_fillable[3] == 0 ? 'water empty' : 'water' }></div>
        <div className={ this.state.water_fillable[4] == 0 ? 'water empty' : 'water' }></div>
      </div>
    );
  }
}

export default Bathtub;