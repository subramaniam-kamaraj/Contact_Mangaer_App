import React from 'react';
import {InputGroup, Input, Button, Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Updation = ({id, upd}) => {
  const [name, setname] = React.useState ('');
  const [num, setnum] = React.useState ('');
  const [email, setemail] = React.useState ('');

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup>
            <Input
              placeholder="Contact Name"
              onChange={e => setname (e.target.value)}
              value={name}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <Input
              placeholder="Phone Number"
              minlength={0}
              maxlength={9999999999}
              type="number"
              step="1"
              onChange={e => setnum (e.target.value)}
              value={num}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <Input
              placeholder="username@email.com"
              onChange={e => setemail (e.target.value)}
              value={email}
            />
          </InputGroup>
        </Col>
        <Button
          color="primary"
          onClick={() => {
            upd (name, num, email, id);
          }}
        >
          Save
        </Button>
      </Row>
    </Container>
  );
};
export default Updation;
