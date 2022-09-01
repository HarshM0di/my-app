import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from'react-bootstrap';
import { useState, useEffect} from 'react';

const CLIENT_ID = "748acd3006d04d8e9ea6e04173bdd95e";
const CLIENT_SECRET ="120d020b910d47c694845850976f86f3";
function App() {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {

  },[])

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">

          <FormControl
           placeholder="Search For Artist"
           type="input"
           onKeyPress={event => {
            if (event.key =="Enter")
               console.log("Pressed enter")


           }}
           onChange={event => setSearchInput(event.target.value)}

          />
          <Button onClick={() => {console.log("Clicked Button")}}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
        <Card>
          <Card.Img src="#" />
          <Card.Body>
            <Card.Title>Album Name Here</Card.Title>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
