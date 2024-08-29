import React from 'react';
import Categories from '../../components/categories/Categories';


import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" /> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://res.cloudinary.com/wunu/image/upload/v1650108816/personalproject/banner2_l3lf7e.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://res.cloudinary.com/wunu/image/upload/v1650120360/personalproject/2201_w023_n001_1694b_p1_1694_jdv6ch.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <Categories />
            </div>
        </div>
    )
}

export default Home