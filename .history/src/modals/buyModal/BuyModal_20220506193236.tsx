import React, { FC, useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/redux/reducers/orderReducer';
import { CartType, UserCartItemsType } from '../../types/generalTypes';

type BuyModalType = {
    show: boolean
    onHide: () => void
    cartId: number
    totalCartPrice: number
    orders: Array<CartType[]>
}

const BuyModal: FC<BuyModalType> = ({ show, cartId, totalCartPrice, orders, onHide }) => {
    const dispatch = useDispatch()
    const orderId = orders.map(orderItem => orderItem.map(order => order.bookId))
    const orderBookName = orders.map(orderItem => orderItem.map(order => order.book.name))
    const [values, setValues] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        price: totalCartPrice,
        bookId: orderId,
        bookName: orderBookName
    })
    console.log(orders);


    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.send('service_hxod138', 'template_ioxwesk', values, 'hIa6EbQItOhL_Sxmg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        dispatch(createOrder(cartId))
        onHide()
    };

    const handleChange = (e: any) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Оформлення замовлення
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={style.formBlock}>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Ім&#39;я</label>
                            <input className={style.formItemInput} type="text"
                                name="name" onChange={(e: any) => handleChange(e)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Ел.пошта</label>
                            <input className={style.formItemInput} type="еуче"
                                name="email" onChange={handleChange} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Вулиця</label>
                            <input className={style.formItemInput} type="text"
                                name="street" onChange={handleChange} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Місто</label>
                            <input className={style.formItemInput} type="text"
                                name="city" onChange={handleChange} />
                        </div>

                        <button onClick={sendEmail}>Купити</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default BuyModal