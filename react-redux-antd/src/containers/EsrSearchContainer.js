import {connect} from "react-redux";
import EsrSearch from "../components/esr/EsrSearch";
import {searchEsrRequest} from "../api/EsrRequestAPI";

const mapDispatchToProps = (dispatch) => {
    return {
        searchEsr: (searchCriteria) => {
            searchEsrRequest(dispatch, searchCriteria)
        }
    }
};

export default connect((state) => ({esrRequest: state.esrRequest}), mapDispatchToProps)(EsrSearch)