import React, { useState } from "react";
import "./dialpad.css"
import { Modal, Button, Container, Row, Form, InputGroup } from "react-bootstrap"

export default function DialPad() {
    const [showModal, toggleModal] = useState(false);
    const [calling, setCalling] = useState(false);
    const [output, setOutput] = useState("");
    const openDialPad = (option: boolean) => toggleModal(option);

    function clickDialPad(key: string) {
      if (output.length < 10) {
        setOutput(output.concat(key));
      }
    }

    function deleteOutput() {
      var newOutput = output.substring(0, output.length - 1);
      setOutput(newOutput);
    }

    async function makeCall() {
      try {
        // Makes call to AWS Connect wrapper service to initialize phone call
        // await connectService.outboundCall(output);
        setCalling(true);
      } catch (e) {
        // console.error("Error from dial-pad component, makeCall method:" + e);
        // await toastr.errorMessage(ToastrMessages.OUTBOUND_CALL_ERROR);
        // callingCustomer = false;
      }
    }

    async function hangUp() {
      try {
        // await connectService.hangUp();
        setCalling(false);
      } catch (e) {
        // Toastr notification?
      }
    }

    var button
    calling
    ? button = <Button size="lg" variant="danger" type="button" onClick={() => hangUp()}>End</Button>
    : button = <Button size="lg" variant="success" type="button" onClick={() => makeCall()}>Call</Button>;


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
                    <Form.Control type="phone" aria-describedby="basic-addon1" readOnly={true} value={output}/>
                  </InputGroup>
                </Row>
                <div className="d-flex justify-content-center">
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("1")}>1</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("2")}>2</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("3")}>3</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("4")}>4</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("5")}>5</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("6")}>6</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("7")}>7</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("8")}>8</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("9")}>9</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("*")}>*</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("0")}>0</Button>
                  <Button size="lg" variant="light" type="button" onClick={() => clickDialPad("#")}>#</Button>
                </div>
                <div className="d-flex justify-content-center">
                  <Button size="lg" variant="light" type="button" onClick={() => deleteOutput()}>{'<'}</Button>
                  {button}
                </div>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
      
    )
}