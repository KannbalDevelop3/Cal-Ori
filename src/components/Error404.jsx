import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <section className="page_404">
                <div className="container text-center">
                    <div className="page_404__contenido">
                        <img
                            src="https://bucket-kannbal-ac.s3.amazonaws.com/404.gif"
                            alt=""
                        />
                        <div className="contant_box_404">
                            <h3 className="h2 texto__page404">¡La página que buscas no está disponible!</h3>
                            <Link to="/" className="">
                                <button className="link_404">
                                    Regresar a la página principal
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error404;
