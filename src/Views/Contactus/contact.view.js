import React from 'react';
import Navb from "../../Components/Navbar/navbar";
import "./contact.style.css";
import {Card,Form,Button} from 'react-bootstrap'

export default function Contact() {
    return (
        <div>
            <Navb imagePath="/icons/logo.png" selectedOption={3} />

            <div className='card1'>

                <h5 className='add' >OUR ADDRESS</h5>
                <br />
                <h3 className='hes'>Do not hesitate to message us</h3>

                <div className='cards'>
            
                    <Card style={{ width: '18rem', border:'none' , display:'flex',flexDirection:'column',alignItems:'center', marginRight:100 }}>
                        <Card.Img variant="top" src="/icons/loca.png" style={{width:45,height:70}} />
                        <Card.Title >Our Location</Card.Title>
                        <Card.Text >Andorra</Card.Text>
                    </Card>
                    
                    <Card style={{ width: '18rem', border:'none' , display:'flex',flexDirection:'column',alignItems:'center' }}>
                        <Card.Img variant="top" src="/icons/emanpho.png" style={{width:70,height:49,marginBottom:21}} />
                        <Card.Title >Email & Phone</Card.Title>
                        <Card.Text >mary.ann@mail.com <br /> &nbsp; &nbsp; (929)953-8315</Card.Text>
                    </Card>

                    <Card style={{ width: '18rem', border:'none' , display:'flex',flexDirection:'column',alignItems:'center',marginLeft:100 }}>
                        <Card.Img variant="top" src="/icons/shareit.png" style={{width:70,height:70}} />
                        <Card.Title >Get In Touch</Card.Title>
                        <Card.Text >Also find us social media below</Card.Text>
                        <div style={{display: 'flex', justifyContent:'space-evenly',marginBottom:50}}>
                            <Card.Img variant="top" src="/icons/facebook.png" style={{width:8.53,height:16,marginRight:20}} />
                            <Card.Img variant="top" src="/icons/twitter.png" style={{width:21,height:17.12}} />
                            <Card.Img variant="top" src="/icons/soc.png" style={{width:17,height:17,marginLeft:20}} />
                        </div>
                        
                    </Card>
            </div>
            </div>
            <div className='but-dev'>
                    
                    <Card.Img  style={{width:'calc(100%/2)',height:"100%"}} variant="top" src="/icons/Map.png" />
                    
                
                    <Form>
                        <div className='Form-Content'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='email' type="email" placeholder="Enter email*"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='subject' type="text" placeholder="Subject*" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='message' as="textarea" rows={5} placeholder="Your Message*" />
                            </Form.Group>
                        </div>
                        

                        <Button style={{alignContent:'flex-start'}} className='butt' variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
            </div>

           
            
        </div>
    );
}