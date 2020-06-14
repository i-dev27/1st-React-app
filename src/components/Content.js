import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap'




function content () {
    return (
        <div> 


            <div className="container">
            <h1>Health products!</h1>
            

                    {/* First card */}
        
            <Card style={{ width: '18rem'}}>
            
                <Card.Img variant="top" src='/images/product.png' />
                <Card.Body>
                    <Card.Title>New Product</Card.Title>
                    <Card.Text>
                        This is a new Product we are going to apply!
                        extra offer in new products.
    
                    </Card.Text>
                    <Button variant="success">Click me!</Button>
                </Card.Body>
            </Card>

                {/* SecondCard */}

            <Card style={{ width: '18rem'}}>
                <Card.Img varia nt="top" src='/images/product.png' />
                <Card.Body>
                    <Card.Title>New Product</Card.Title>
                    <Card.Text>
                        This is a new Product we are going to apply!
                        extra offer in new products.
    
                    </Card.Text>
                    <Button variant="warning">Click me!</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src='/images/product.png' />
                <Card.Body>
                    <Card.Title>New Product</Card.Title>
                    <Card.Text>
                        This is a new Product we are going to apply!
                        extra offer in new products.
    
                    </Card.Text>
                    <Button variant="warning">Click me!</Button>
                </Card.Body>
            </Card>
      
      
        </div>
        </div>
    )
}



export default content;
