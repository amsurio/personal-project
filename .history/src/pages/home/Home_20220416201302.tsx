import React from 'react';
import { Carousel } from 'react-bootstrap';
import Categories from '../../components/categories/Categories';


import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" /> */}
                <Carousel className={style.carousel}>
                    <Carousel.Item >
                        <img

                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner2_mnjovs.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ top: 150 }}>
                            <h1 className={style.carouselHeadText}>Welcome to ReadBook Store</h1>
                            <h2 className={style.carouselHeadText}>Monday - Friday</h2>
                            <h4 className={style.carouselHeadText}>9a.m. - 9p.m.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{ top: 100 }}>
                            <h1 className={style.carouselHeadText}>Reading magic book will make you feel better</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className={style.carouselHeadText}>in ReadBook Store</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Categories />
            </div>
        </div>
    )
}

export default Home