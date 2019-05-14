import EsrAdd from '../components/esr/EsrAdd'
import {addEsrRequest} from "../api/EsrRequestAPI";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        addEsrRequest: (esrRequest) => {
            addEsrRequest(dispatch, esrRequest)
        }
    }
}

export default connect((state)=>({esrRequest: state.esrRequest}), mapDispatchToProps)(EsrAdd)

