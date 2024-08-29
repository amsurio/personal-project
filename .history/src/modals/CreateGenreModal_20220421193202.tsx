import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const GenreCreateModal = ({ show, onHide }) => {
    c
    return (
        <>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Додати новий Жанр
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={{
                        genre: ''
                    }} onSubmit={() => console.log('Genre name is')}>
                        <Form>
                            <label>Назва жанру</label>
                            <Field />
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default GenreCreateModal
