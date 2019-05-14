import React, {Component} from 'React'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        var count = this.state.count
        this.setState({count: ++count})
    }

    render() {
        return (
            <div>
                <h3>this is home!!</h3>
                <div>click count: {this.state.count}</div>
                <div><button onClick={this.handleClick}>click</button></div>
            </div>
        )
    }
}