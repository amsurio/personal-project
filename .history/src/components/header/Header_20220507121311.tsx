import React from 'react';
import style from './Header.module.scss';
import { Cart2, Heart, MenuAppFill, MenuDown, Person, PersonFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { ADMIN_ROUTE, CART_ROUTE, FAVORITE_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from '../../routings/pathVariables';
import { logOut } from '../../store/redux/reducers/userReducer';
import { adminPanel, btnLogOut, signedAs, storeName } from '../../consts/header';
import { Dropdown } from 'react-bootstrap';


const Header = () => {

    const { isAuth, user } = useSelector((state: AppStateType) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(logOut())
    }
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to={HOME_ROUTE} className={style.link}>
                    <h3 className={style.logoName}>{storeName}</h3>
                </Link>
            </div>
            {isAuth ? <>
                <div className={style.headerRightSide}>
                    <Link to={FAVORITE_ROUTE} className={style.link}>
                        <Heart size={20} className={style.icon} />
                    </Link>
                    <Link to={CART_ROUTE} className={style.link}>
                        <Cart2 size={20} className={style.icon} />
                    </Link>
                    <Link to={PROFILE_ROUTE} className={style.link}>
                        <Person size={20} className={style.icon} />
                    </Link>
                    <p className={style.userInfo}> {signedAs} {user.email}</p>
                    {user.role === 'ADMIN' ? <button className={style.navigateBtn} onClick={() => { navigate(ADMIN_ROUTE) }}>{adminPanel}</button> : null}
                    <button className={style.navigateBtn} onClick={LogOut}>{btnLogOut}</button>
                </div>
                <div className={style.burderMenu}>
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                            Меню
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant='dark'>
                            {user.role === 'ADMIN' ? <Dropdown.Item onClick={() => { navigate(ADMIN_ROUTE) }}>{adminPanel}</Dropdown.Item> : null}
                            <Dropdown.Item onClick={() => { navigate(FAVORITE_ROUTE) }} >Обрані</Dropdown.Item>
                            <Dropdown.Item onClick={() => { navigate(CART_ROUTE) }} >Корзина</Dropdown.Item>
                            <Dropdown.Item onClick={() => { navigate(PROFILE_ROUTE) }} >Мої замовлення</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={LogOut}>Вийти</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
                : null}
        </header>
    )
}

export default Header