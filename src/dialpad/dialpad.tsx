import React, { useState } from "react";
import { Modal, Button, Container, Row, Form, InputGroup } from "react-bootstrap"

export default function DialPad() {
    const [showModal, toggleModal] = useState(false);
    const openDialPad = (option: boolean) => toggleModal(option);

    return (
      <>
        <Button
          onClick={() => openDialPad(true)}
        >
          Dial pad
        </Button>
        {/* Static backdrop so that the agent doesn't close the modal while connect
        is making a call. Also 'centered' property seems to not work?  */}
        <Modal
          size="sm"
          backdrop="static"
          centered
          show={showModal}
          onHide={() => openDialPad(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter number of 3rd party to dial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Form>
                <Row>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button>+1</Button>
                    </InputGroup.Prepend>
                    <Form.Control type="phone" aria-describedby="basic-addon1"/>
                  </InputGroup>
                </Row>
                <div className="d-flex justify-content-center">
                  <Button size="lg" type="button">1</Button>
                  <Button size="lg" type="button">2</Button>
                  <Button size="lg" type="button">3</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" type="button">4</Button>
                  <Button size="lg" type="button">5</Button>
                  <Button size="lg" type="button">6</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" type="button">7</Button>
                  <Button size="lg" type="button">8</Button>
                  <Button size="lg" type="button">9</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" type="button">*</Button>
                  <Button size="lg" type="button">0</Button>
                  <Button size="lg" type="button">#</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" type="button">{'<'}</Button>
                  <Button size="lg" variant="success" type="button">Call</Button>
                </div>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
      
    )
}