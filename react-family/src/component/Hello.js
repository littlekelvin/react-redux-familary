import React, {Component} from 'react'

export default class Hello extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            hello, {this.props.name}
            </div>
        )
    }
}