import React from 'react';
import {
  InputGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
  Table,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Updation = ({id, upd}) => {
  const [name, setname] = React.useState('');
  const [num, setnum] = React.useState('');
  const [email, setemail] = React.useState('');

  return (
    <Container>
      <Table hover dark>
        <thead>
          <br />
          <h5> update here....... </h5>
          {''}
          <tr>
            <th>
              {' '}
              <InputGroup>
                <Input
                  style={{width: 150}}
                  placeholder=" Name"
                  onChange={e => setname(e.target.value)}
                  value={name}
                />
              </InputGroup>
            </th>
            <th>
              <InputGroup>
                <Input
                  placeholder="Phone"
                  style={{width: 100}}
                  minlength={0}
                  maxlength={9999999999}
                  type="number"
                  step="1"
                  onChange={e => setnum(e.target.value)}
                  value={num}
                />
              </InputGroup>
            </th>
            <th>
              <InputGroup>
                <Input
                  placeholder="username@email.com"
                  style={{width: 150}}
                  onChange={e => setemail(e.target.value)}
                  value={email}
                />
              </InputGroup>
            </th>
            <th>
              <Button
                color="primary"
                onClick={() => {
                  upd(name, num, email, id);
                }}
              >
                Save
              </Button>
            </th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};
export default Updation;
