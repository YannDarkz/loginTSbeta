import { Col, Row, Form, Input, Button } from "antd"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    function onFinish(values: { email: string, password: string }) {

        try {
            auth.authenticateI(values.email, values.password)
            navigate('/profile')
        } catch (err) {
            toast.error('Invalid email or password',)
        }

    }

    // async function onFinish(values: { email: string, password: string }) {

    //     try {
    //         await auth.authenticate(values.email, values.password)
    //         navigate('/profile')
    //     } catch (error) {
    //         toast.error('Deu ruim aqui')
    //     }
    // }

    return (
        <>
            <ToastContainer />
            <Row
                justify='center'
                align='middle'
                style={{ height: '100vh' }}
            >
                <Col span={24}>
                    <Form
                        name='basic'
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label='Email'
                            name='email'
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label='Password'
                            name='password'
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                            <Button type='primary' htmlType='submit'>
                                Sign
                            </Button>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>
        </>


    )

}