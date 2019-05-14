import React from 'react';
import {Button, Form, Input} from 'antd'

const {TextArea} = Input

class EsrAdd extends React.Component {

    handleSubmit = (e) => {
        console.log("11111")
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values)
            if (!err) {
                console.log(values)
                let esrRequest = {
                    esrTitle: values.esrTitle,
                    esrLink: values.esrLink,
                    esrSql: values.esrSql,
                    reportClassFullName: values.reportClassFullName,
                    comments: values.comments
                }

                this.props.addEsrRequest(esrRequest)
                this.handleReset();
            }
        })
    }

    handleReset = () => {
        this.props.form.resetFields()
    }

    render () {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 21 },
            },
        }

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 10,
                },
            },
        }

        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{width: 1100, margin: 'auto'}}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="ESR Title"
                    >
                        {getFieldDecorator('esrTitle', {
                            rules: [{
                                required: true, message: 'Please input ESR title!',
                            }],
                        })(
                            <TextArea placeholder="EST Title" rows={2} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="ESR Link"
                    >
                        {getFieldDecorator('esrLink', {
                            rules: [{
                                required: true, message: 'Please input ESR Link!',
                            }],
                        })(
                            <TextArea placeholder="EST Link" rows={2} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="ESR Sql"
                    >
                        {getFieldDecorator('esrSql', {
                            rules: [{
                                required: true, message: 'Please input ESR Sql!',
                            }],
                        })(
                            <TextArea placeholder="EST Sql" rows={5} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="reportClassFullName"
                    >
                        {getFieldDecorator('reportClassFullName', {
                            rules: [{
                                required: false
                            }],
                        })(
                            <TextArea placeholder="reportClassFullName" rows={2} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="comments"
                    >
                        {getFieldDecorator('comments', {
                            rules: [{
                                required: false
                            }],
                        })(
                            <TextArea placeholder="comments" rows={4} />
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout} style={{marginTop: '40px'}}>
                        <Button type="primary" onClick={this.handleReset}>Reset</Button>
                        <Button type="primary" htmlType="submit" style={{marginLeft: '190px'}}>Save</Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}

export default Form.create({name: 'earAddForm'})(EsrAdd)