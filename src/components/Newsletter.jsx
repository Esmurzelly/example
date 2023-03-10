import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Nav, Tab, Alert } from 'react-bootstrap';


const Newsletter = ({ onValidated, status, message}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === 'success') clearField()
    }, [status])

    const handleSubmit =  (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    };

    const clearField = () => {
        setEmail('');
    }

    return ( 
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Подпишись на нашу рассылку</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                        {status === 'success' && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder = 'Почта'
                                />
                                <button style={{width: 200}} type='submit'>Отправить</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
     );
}
 
export default Newsletter;