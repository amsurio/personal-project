import { Field, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppStateType } from '../store/redux/store';

type CreateBookModalType = {
    show: boolean
    onHide: () => void
}

const CreateBookModal: FC<CreateBookModalType> = ({ show, onHide }) => {
    const [file, setFile] = useState(null)
    const genres = useSelector((state: AppStateType) => state.filter.genres)

    const addFile = (e: any) => {
        setFile(e.target.files[0])
    }

    const addBook = () => {
        alert('dd')
    }


    return (
        <>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Додати нову книгу
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={{
                        name: '',
                        author: '',
                        description: '',
                        price: 0,
                        image: file,
                    }} onSubmit={addBook}>
                        <Form>
                            <div>
                                <label>Назва книги</label>
                                <Field type="text" name="name" placeholder='назва книги' />
                            </div>
                            <div>
                                <label>Автор</label>
                                <Field type="text" name="author" placeholder='Автор' />
                            </div>
                            <div>
                                <label>Опис</label>
                                <Field type="text" name="description" placeholder='Опис книги' />
                            </div>
                            <div>
                                <label>Ціна</label>
                                <Field type="number" name="price" placeholder='Вартість книги' />
                            </div>
                            <div>
                                <label>Фото</label>
                                <input type='file' name='image' onChange={addFile} />
                            </div>

                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Вибрати жанр
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {genres.map(genre => <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>)}

                                    </Dropdown.Menu>
                                </Dropdown>
                                <Field type='number' name="genreId" placeholder='Код жанру' />
                            </div>
                            <Button type='submit'>Добавити</Button>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateBookModal