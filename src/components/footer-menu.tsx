import React from 'react'
import iconBack from './images/back.svg';
import iconRefresh from './images/refresh.svg';

const FooterMenu = ({retryInCategory, setCategory}: any) => {
    return (
        <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col-7 col-lg-2">
                    <button type="button" className="float-left btn btn-outline-dark btn-sm" onClick={() => setCategory(null)}><img src={iconBack} alt="back" style={{height: "18px"}}/> Cambiar categoría</button>
                </div>
                <div className="col-5 col-lg-2">
                    <button type="button" className="float-right btn btn-outline-dark btn-sm" onClick={() => retryInCategory()}><img src={iconRefresh} alt="refresh" style={{height: "18px"}}/> Otra palabra</button>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;
