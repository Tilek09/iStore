import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h1>
                        <i className="fas fa-gem me-3"></i>iStore</h1>
                    <p>
                    Магазин техники Apple в Бишкеке
                    <br/> У нас можно приобрести всю линейку продукций компании Apple по самым привлекательным ценам.
                    </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Продукция</h6>
                    <p>
                        <a>Mac</a>
                    </p>
                    <p>
                        <a>iPad</a>
                    </p>
                    <p>
                        <a>iPhone</a>
                    </p>
                    <p>
                        <a>Watch</a>
                    </p>
                    <p>
                        <a>Гаджеты</a>
                    </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4"> 8 лет с Вами! </h6>
                    <p>
                        <a>О нас</a>
                    </p>
                    <p>
                        <a>Почему iStore</a>
                    </p>
                    <p>
                        <a>Услуги</a>
                    </p>
                    <p>
                        <a>Обратная связь</a>
                    </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Контакты
                    </h6>
                    <p><i className="fas fa-home me-3"></i> пр. Манаса, 40(пер. ул. Киевская)</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        istorekg@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i>+996 (555) 802 000</p>
                    <p><i className="fas fa-print me-3"></i>+996 (505) 802 000</p>
                    </div>
                </div>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            Copyright 2013-2021 istore.kg все права защищены!
                <a className="text-reset fw-bold" href="https://to-moore.com/" target="_blanc"> made in MOORE STUDIO</a>
            </div>
            </footer> 
        </div>
    );
};

export default Footer;