import React, {Component} from 'react'
import {Badge, Col, Icon, Row} from 'antd'
import {Link} from 'react-router'

class Top extends Component {
	render(){
		return (
		  <Row className="top_row">
		    <Col xs={12} sm={12} md={18} lg={22} xl={22}>
		    <h1 className="top_title"><Icon type="rocket" className="top_icon" /> SUPPORT TOOL</h1>
		    </Col>
		    <Col xs={12} sm={12} md={6} lg={2} xl={2} className="top_leftcol">
			    <div className="top_style">
				    <Badge dot>
				      <Icon type="notification" />
				    </Badge>	
				    <Link to="/" className="top_link"><Icon type="poweroff" /> 退出</Link>			    	
				</div>    
		    </Col>
		  </Row>
		)
	}
}
export default Top