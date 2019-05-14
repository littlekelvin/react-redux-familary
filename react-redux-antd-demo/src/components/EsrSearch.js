import React from 'react';
import Button from 'antd/lib/button'
import {connect} from 'react-redux'
import {searchAllEsr} from '../actions/EsrSearchAction'

class EsrSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    searchAll = () => {
        this.props.searchAllEsr();
    }

    render() {
        let esrRequest = this.props.esrRequest
        console.log('esrRequest-> ', esrRequest)

        return (
            <div>
                <Button onClick={this.searchAll}>searchAll</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchAllEsr: () => {
            searchAllEsr(dispatch)
        }
    }
}

export default connect((state)=>({esrRequest: state.esrRequest}), mapDispatchToProps)(EsrSearch)