import React from 'react';
import {Button, Col, DatePicker, Form, Input, Row, Table} from 'antd';
import moment from 'moment'
import "../../asserts/App.css"

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

const columns = [{
    title: 'ESR ID',
    dataIndex: 'id',
    key: 'id',
    width: 200,
}, {
    title: 'ESR Title',
    dataIndex: 'esrTitle',
    key: 'esrTitle',
    width: 350,
}, {
    title: 'ESR Link',
    dataIndex: 'esrLink',
    key: 'esrLink',
    width: 300,
    render: text => <a href={text} target="_blank">{text}</a>
}, {
    title: 'SQL',
    dataIndex: 'esrSql',
    key: 'esrSql',
    width: 550,
},{
    title: 'Report ClassFullName',
    dataIndex: 'reportClassFullName',
    key: 'reportClassFullName',
    width: 250,
}, {
    title: 'Create Time',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 105,
    render: val => <span>{moment(val).format('YYYY-MM-DD')}</span>
}, {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
}];

class EsrSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    searchAll = () => {
        this.props.searchAllEsr();
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    handleReset = () => {
        this.props.form.resetFields();
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let hasEsrFromTo = (values.esrFromTo === undefined || values.esrFromTo.length === 0);
                let searchCriteria = {
                    startDate: hasEsrFromTo ? null : values.esrFromTo[0].format('YYYY-MM-DD'),
                    endDate: hasEsrFromTo ? null : values.esrFromTo[1].format('YYYY-MM-DD'),
                    esrTitleKeyword: values.esrTitleKeyword === undefined? "": values.esrTitleKeyword.trim()
                }
                this.props.searchEsr(searchCriteria)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let esrRequestList = this.props.esrRequest.payload
        console.log('this.props.esrRequest', this.props.esrRequest)

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        }

        return (
            <div>
                <Form {...formItemLayout}
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>
                        <Col span={16}>
                            <Form.Item label = {`Create time`}>
                                {getFieldDecorator('esrFromTo')(
                                    <RangePicker showTime format="YYYY-MM-DD" onChange={this.onChange} />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={16}>
                            <Form.Item label = {`ESR Title Keyword:`}>
                                {getFieldDecorator('esrTitleKeyword')(
                                    <Input/>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">Search ESR</Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Table columns={columns} dataSource={esrRequestList} scroll={{ x: 2200 }} bordered={true}/>
            </div>
        )
    }
}

export default Form.create({name: 'esrSearchForm'})(EsrSearch)