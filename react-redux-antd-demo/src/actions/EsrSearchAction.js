import axios from 'axios'

const searchAllEsrRequest = () => {
    return {
        type: "AJAX_REQUEST"
    }
}

const searchAllEsrSuccess = (esrRequestList) => {
    return {
        type: "AJAX_REQUEST_SUCCESS",
        esrRequestList: esrRequestList
    }
}

const searchAllEsrFail = () => {
    return {
        type: "AJAX_REQUEST_FAIL"
    }
}

export const searchAllEsr = (dispatch) => {
    dispatch(searchAllEsrRequest())
    axios.get('/api/ear/search').then((res) => {
        console.log(res)
        if(res.data.success) {
            dispatch(searchAllEsrSuccess(res.data))
        } else {
            dispatch(searchAllEsrFail())
        }
    }).catch((err) => {
        dispatch(searchAllEsrFail())
    })
}