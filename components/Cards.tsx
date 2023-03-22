import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductManager from "../public/images/ProductManager.png"

function AssignmentCard (props) {
    return (
        
        
            <Card>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button href={props.gitLink} variant="primary">View in GitHub</Button>
                </Card.Body>
            </Card>
    );
}


const CardList = () => {
    return (
        <AssignmentCard 
            title="Product Manager" description="Create products with descriptions and prices; view and delete components." 
            gitLink="https://github.com/chandler-mcadory/CodingDojo/tree/master/MERN/Assignments/Week3/product-manager-3"
            src={ProductManager.src}
        />
    )
}

export default CardList;