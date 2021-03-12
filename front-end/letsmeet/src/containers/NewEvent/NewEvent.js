import React, { useState } from 'react';
import 'antd/dist/antd.css';
import classes from '../NewEvent/NewEvent.module.css'
import { Form, Input, Button, Divider } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import ScheduleSelector from 'react-schedule-selector'

const NewEvent = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className={classes.container}>
        <Form
            form={form}
            layout="vertical"
            initialValues={{
                requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
        >
            <Divider orientation="left" className="first">Create New Event</Divider>
            <Form.Item label="Event Title" required tooltip="This is a required field">
                <Input placeholder="ex. birthday party" />
            </Form.Item>
            <Form.Item
                label="Event Description"
                tooltip={{
                title: 'Write the event details here',
                icon: <InfoCircleOutlined />,
                }}
            >
                <Input.TextArea autoSize />
            </Form.Item>
            <Form.Item name="location" label="Location">
                <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                placeholder="Add a place"
                />
            </Form.Item>
            <Form.Item name="invite" label="Invite">
                <Input placeholder="..." />
            </Form.Item>
            <Divider orientation="left" className="first">Availability</Divider>
            <ScheduleSelector
                hourlyChunks={2}
                dateFormat={'ddd'}
            />
            <br></br>
            <Form.Item wrapperCol={{ span: 12, offset: 11 }}>
                <Button type="primary" className="form-button">Submit</Button>
            </Form.Item>
        </Form>
    </div>
  );
};

export default NewEvent;