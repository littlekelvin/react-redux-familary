import React from 'react'
import EsrAddContainer from "../../containers/EsrAddContainer";

export default () => {
    return (
        <div id='EsrSearch'>
            <div>
                <h2 style={{margin : '10px 5px'}}>Add ESR Request</h2>
            </div>
            <EsrAddContainer />
        </div>
    )
}