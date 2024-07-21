import { Col, Row, Form, Input, Button } from "antd"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card";


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    function onFinish(values: { email: string, password: string }) {

        try {
            auth.authenticateI(values.email, values.password)
            // navigate('/profile')
        
        } catch (err) {
            toast.error('Invalid email or password',)
        }

    }


    return (
        <>
            <ToastContainer />
            <Card  tittle='Login único' p1='Email: iandev@darkmail.com' p2='Senha: darkdivdev'/>
            <Row
                justify='center'
                align='middle'
                style={{ height: '50vh',
                    
                 }}
            >
                <Col span={24}>
                    <Form
                        name='basic'
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 12 }}
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

                        <Form.Item wrapperCol={{ offset: 4 }} >
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