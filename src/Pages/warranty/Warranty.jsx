import React from 'react';
import './warranty.scss';

import { Link } from 'react-router-dom';

const Warranty = props => {
    return (
        <div className="warranty-page">
            <div className="row">
                <div className="col-9 mx-auto">
                    <h2 className="text-center">OUR PRODUCT'S WARRANTY</h2>
                    <div className="warranty-text">
                        <h5>En Vans todo producto está bajo la ley de garantía convencional. En el producto estuviera dañado, 
                            podrás cambiarlo de inmediato. En caso de falla, tienes 90 días desde que recibes tu producto, 
                            para solicitar la anulación y reembolso del dinero o reemplazo del producto (Sujeto a 
                            disponibilidad de stock), siempre que el producto no se hubiera deteriorado por un hecho imputable 
                            al consumidor.</h5><br/>
                        <h5><strong>¿Cómo hacer la solicitud de devolución/cambio por problemas de calidad?</strong></h5><br/>
                        <h5>OPCION 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Incidunt laudantium exercitationem nam error eveniet corporis quod rerum rem ducimus modi.</h5><br/>
                        <h5>OPCION 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Incidunt laudantium exercitationem nam error eveniet corporis quod rerum rem ducimus modi.</h5><br/>
                        <h5> Do not forget to visit <Link to='return-and-exchanges'><strong>RETURN AND CHANGES</strong></Link></h5><br/>
                        <h5>En un plazo de 4 días hábiles te contactaremos para informarte acerca de la aprobación o rechazo de la solicitud.</h5><br/>
                        <h5><strong>IMPORTANTE: El formulario de correos de Chile es requisito para poder hacer el envío del producto. Deberá presentarse el Número de pedido, la boleta, 
                            o el ticket de cambio, además del formulario de devolución de Correos de Chile.</strong></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warranty;
