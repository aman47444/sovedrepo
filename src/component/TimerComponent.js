import React, { Component } from 'react'
class TimerComponent extends Component
{
    constructor(props)
    {
        super(props   );
        this.state = {second:0,disableStart:true,disablePause:false};
        this.stop = this.stop.bind(this);
    }
    componentDidMount()
    {
        this.resumeTime(
            console.log('willmount Timer')
        );
    }
    componentWillUnmount()
    {
        this.pauseTime(
            console.log('WillUnmount timer')
        );
    }
    resumeTime = ()=>
    {
        this.disableButton(true,false,false);
        this.interval = setInterval( ()=> this.tick(),1000);
        console.log(this.interval)
    }
    tick()
    {
        this.setState(state => ({second:state.second + 1}));
    }
    pauseTime = ()=>
    {
        clearInterval(this.interval);
        console.log(this.interval)
        this.disableButton(false,true,true);
    }
    stop()
    {
        this.pauseTime();
        this.disableButton(false,true,true);
        this.setState(state =>({second:0}));
    }
    disableButton(p_start,p_pause,p_stop)
    {
        this.setState( state =>(
        {
            disableStart:p_start,
            disablePause:p_pause,
            disableStop:p_stop
        }))
    }
    render()
    {
        return(
        <div className="bg-danger p-5">
                <h4 className="text-white">Timer</h4>
            <div className="card">
                <div className="card-header">
                    <div>Seconds: {this.state.second}</div>
                </div>
                <div className="card-body m-3">
                    <button className="btn m-1" onClick={this.resumeTime} disabled={this.state.disableStart}>Start</button>
                    <button className="btn m-1" onClick={this.pauseTime} disabled={this.state.disablePause}>Pause</button>
                    <button className="btn m-1" onClick={this.stop} disabled={this.state.disableStop}>Clear</button>
                </div>
                <div className="card-footer text-muted">Use the buttons to control the timer</div>
            </div>
        </div>
        )
    }
}
export default TimerComponent;