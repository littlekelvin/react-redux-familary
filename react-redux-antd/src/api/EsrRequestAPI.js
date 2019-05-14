import axios from "axios/index"
import {message} from 'antd'
import {searchEsr} from "../actions";

export const searchEsrRequest = (dispatch, searchCriteria) => {
    axios.request({
        url: '/api/esr',
        method: 'GET',
        params: {
            startDate: searchCriteria.startDate,
            endDate: searchCriteria.endDate,
            esrTitleKeyword: searchCriteria.esrTitleKeyword,
        }
    }).then((res) => {
        if(res.data.success) {
            dispatch(searchEsr(res.data.data))
        } else {
            message.error('Search ESR request failed!')
        }
    }).catch((err) => {
        console.log('err: ', err)
    })
}

export const addEsrRequest = (disparch, esrRequest) => {
    axios.request({
        url: '/api/esr',
        method: 'POST',
        data: esrRequest
    }).then((res) => {
        console.log(res)
        if(res.data.success) {
            message.success('Add ESR request success!')
        } else {
            message.error('Add ESR request failed!')
        }
    }).catch((err) => {
        console.log('err: ', err)
    })
}