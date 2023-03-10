import React, {useState} from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''   
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Отправить');
    const [status, setStatus] = useState({});

    const onFormUpdate = (categoty, value) => {
        setFormDetails({
            ...formDetails,
            [categoty]: value
        })
    }

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Отправляется...");

        let response = await fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Отправить");
        let result = response.json();
        setFormDetails(formInitialDetails);

        if(result.code === 200) {
            setStatus({success: true, message: 'Message sent successfully'});
        } else {
            setStatus({success: false, message: "Smth went wrong, please try again later."})
        }
    };

    return ( 
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Свяжитесь с нами</h2>
                        <form onSubmit={hanldeSubmit}>
                            <Row>
                                <Col className='px-1' sm={6}>
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder='Имя' 
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>

                                <Col className='px-1' sm={6}>
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder='Фамилия' 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>

                                <Col className='px-1' sm={6}>
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder='Почта' 
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>

                                <Col className='px-1' sm={6}>
                                    <input 
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder='Телефон' 
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>

                                <Col>
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Сообщение"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    >
                                    </textarea>
                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message && (
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>
                                                {status.message}
                                            </p>
                                        </Col>
                                    )
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Contact;