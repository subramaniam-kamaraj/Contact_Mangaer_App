import React from 'react';
import Updation from './Updation';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, Table, Button} from 'reactstrap';

const List = ({list, Delete, upd}) => {
  const [check, setcheck] = React.useState (false);
  const [data, setdata] = React.useState ('');
  const [count, setcount] = React.useState (1);

  return (
    <Container>
      <Row>
        <Col sm="12" md={{size: 6, offset: 4}}>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone_Number</th>
                <th> Email_id </th>
                <th>              </th>
                <th>              </th>
              </tr>
            </thead>

            {check === true ? <Updation id={data} upd={upd} /> : null}
            <tbody>
              {list.map (lis => {
                return (
                  <tr key={lis._id}>
                    <td>{lis.name}</td>
                    <td>{lis.phone}</td>
                    <td>{lis.email}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => {
                          Delete (lis._id);
                        }}
                      >
                        Del
                      </Button>
                    </td>
                    <td>
                      {count % 2 !== 0
                        ? <Button
                            color="primary"
                            onClick={() => {
                              console.log ('entered');
                              setcount (count + 1);
                              setcheck (true);
                              setdata (lis._id);
                            }}
                          >
                            Edit
                          </Button>
                        : <Button
                            color="primary"
                            onClick={() => {
                              setcount (count + 1);
                              setcheck ('false');
                            }}
                          >
                            Cancle
                          </Button>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default List;
