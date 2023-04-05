import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SongAdd = (props) => {
  // initialize the modal to be hidden using state hook, all song actions will utilise Modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function to gather song data and pass it to the addSong function from the SongList then closes the Modal
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.add(Object.fromEntries(formData)).then(() => handleClose());
  };

  return (
    <>
      {/* Button to initially show and control the showing of the Modal */}
      <Button variant="outline-success" size="sm" onClick={handleShow}>
        Add Song
      </Button>
      <Modal show={show} onHide={handleClose} className="text-black">
        <Modal.Header closeButton>
          <Modal.Title>Add Song</Modal.Title>
        </Modal.Header>
        {/* instead of triggering on the button click, handle on submit as clicking the submit button can be bypassed */}
        <Form onSubmit={handleAdd}>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Control name="artist" placeholder="Artist Name" />
              </Col>
              <Col>
                <Form.Control name="title" placeholder="Song Title" />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="outline-primary">
              Add Song
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default SongAdd;
