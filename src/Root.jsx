import React from 'react';
import List from './List';
import axios from 'axios';

import {
  Jumbotron,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

const Root = () => {
  const [check, setcheck] = React.useState ('False');
  const [name, setname] = React.useState ('');
  const [num, setnum] = React.useState ('');
  const [email, setemail] = React.useState ('');
  const [list, setlist] = React.useState ([]);
  const [count, setcount] = React.useState (1);

  React.useEffect (
    () => {
      axios.get ('http://localhost:4000/getcon').then (res => {
        setlist (res.data);
      });
    },
    [list]
  );

  const add = (name, num, email) => {
    axios
      .post ('http://localhost:4000/postcon', {
        name: name,
        phone: num,
        email: email,
      })
      .then (success => {
        setlist ([...list, success.data]);
        setname ('');
        setnum ('');
        setemail ('');
      });
  };

  const Delete = id => {
    axios.delete ('http://localhost:4000/deletecon/' + id).then (success => {
      if (success.status === 200 && success.statusText === 'OK') {
        setlist (list.filter (i => i.id !== id));
      }
    });
  };

  const upd = (name, num, email, id) => {
    axios
      .put ('http://localhost:4000/updatecon/' + id, {
        name: name,
        phone: num,
        email: email,
      })
      .then (success => {
        setlist ([...list, success.data]);
        setname ('');
        setnum ('');
        setemail ('');
      })
      .catch (err => console.log (err));
  };

  return (
    <Container>
      <Jumbotron>
        <Row>
          <h2>Contact Form</h2>
          <Col xs="6">
            <Col xs="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Contact Name:
                </InputGroupAddon>
                <Input
                  placeholder="For.eg:subu"
                  onChange={e => setname (e.target.value)}
                  value={name}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Phone Number:
                </InputGroupAddon>
                <Input
                  placeholder="978797667"
                  min={0}
                  max={100}
                  type="number"
                  step="1"
                  onChange={e => setnum (e.target.value)}
                  value={num}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Email     :
                </InputGroupAddon>
                <Input
                  placeholder="username@email.com"
                  onChange={e => setemail (e.target.value)}
                  value={email}
                />
              </InputGroup><br />
              <Button
                color="primary"
                onClick={() => {
                  add (name, num, email);
                }}
              >
                Add
              </Button>{' '}
              {count % 2 !== 0
                ? <Button
                    color="primary"
                    onClick={() => {
                      setcount (count + 1);
                      setcheck ('true');
                    }}
                  >
                    Show list
                  </Button>
                : <Button
                    color="primary"
                    onClick={() => {
                      setcount (count + 1);
                      setcheck ('false');
                    }}
                  >
                    Hide list
                  </Button>}
              {check === 'true'
                ? <List list={list} Delete={Delete} upd={upd} />
                : null}
            </Col>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Root;
