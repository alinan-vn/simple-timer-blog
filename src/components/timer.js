import React from 'react';

class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
            time: 0,
            interval: null
        }
    }

    updateTime = () => {
        this.setState( prevState => {
            return {
                ...prevState,
                time: prevState.time + 1
            }
        })
    }

    setTimeInterval = () => {
        this.setState({
            ...this.state,
            interval: setInterval(this.updateTime, 1000)
        })
    }

    clearTimeInterval = () => {
        clearInterval(this.state.interval)
    }

    componentDidMount(){
        this.setTimeInterval()
    }


    render(){
        return(
            <div>
                <p>
                    { this.state.time }
                </p>
                <button onClick={this.clearTimeInterval}>
                    STOP
                </button>
            </div>
        )
    }
}

export default Timer