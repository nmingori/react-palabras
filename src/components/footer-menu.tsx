import React from 'react';
import iconBack from './images/back.png';
import iconRefresh from './images/refresh.png';

const FooterMenu = ({retryInCategory, setCategory}: any) => {
    return (
        <div>
            <button type="button" className="-float-left btn -btn-sm -with-icon" onClick={() => setCategory(null)}><img src={iconBack} alt="back" /> Cambiar categoría</button>
            <button type="button" className="-float-right btn -btn-sm -with-icon" onClick={() => retryInCategory()}><img src={iconRefresh} alt="refresh" /> Otra palabra</button>
        </div>
    )
}

export default FooterMenu;
