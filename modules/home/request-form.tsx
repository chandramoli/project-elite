import { Form, Input, Button, Modal } from "antd";
import Heading from "../components/Heading";
import { sendEmail } from "./util/mailer";
import TextArea from "antd/es/input/TextArea";
import { RequestFormValues } from "@/types/home";
import { Dispatch, SetStateAction, useState } from "react";


const RequestForm = ({showRquestModal}:{showRquestModal:Dispatch<SetStateAction<boolean>>}) => {
    const [form] = Form.useForm();
    const [modal,contextHolder] =Modal.useModal()
    


    const onSubmit = (values: RequestFormValues) => {
        // handle form submission
        console.log("Form values:", values);
            showRquestModal(false)
            form.resetFields();


modal.info({
            title: "Submitting your request",
            content: "Please wait while we submit your request.",
            closable: true,
            footer: null,
            centered: true,
        });

        sendEmail(values)
            .then(res => {
                Modal.destroyAll(); // Close the modal after submission
            modal.success({
                title: "Success",
                content: "Your request has been submitted successfully. We will get back to you soon.",
                closable: true,
                footer: null,
                centered: true,
            });
            })
            .catch(err => {
            console.error("Error sending email:", err);
            Modal.destroyAll(); // Close the modal on error
                modal.error({
                title: "Error",
                content: "There was an error submitting your request. Please try again later.",
                closable: true,
                // footer: null,    
                        centered: true,
                        okText: "Retry",
                        onOk: () => {
                            showRquestModal(true); // Reopen the modal to retry
                        }
                })                

            });
    };
    console.log(contextHolder)
    return (
        <div className="w-full h-full  ">
          <><Heading size="h4" className="mb-6 !text-blue-900">
                Request a Demo
            </Heading>
            
            <Form
                form={form}
                layout="vertical"
                onFinish={onSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: "Please enter your first name" }]}
                >
                    <Input size="middle" placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: "Please enter your last name" }]}
                >
                    <Input size="middle" placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                    ]}
                >
                    <Input size="middle" placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[{ required: true, message: "Please enter your phone number" }]}
                >
                    <Input size="middle" placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item
                    label="Organization Name (Optional)"
                    name="organization"
                >
                    <Input size="middle" placeholder="Enter your organization name" />
                </Form.Item>
                <Form.Item
                    label="Message (Optional)"
                    name="message"
                >
                    <TextArea placeholder="Enter your message." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Submit
                    </Button>
                </Form.Item>
            </Form></>

            {contextHolder}
        </div>
    );
};

export default RequestForm;