import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*col1*/}
                    <div className="col">
                        <h1>Okulum Web</h1>
                        <ul className="list-unstyled">
                            <li>539-578-36-36</li>
                            <li>Ankara</li>
                            <li>Yenimahalle</li>
                        </ul>
                        </div>
                    {/*col2*/}
                    <div className="col">
                        <h1>Vizyon</h1>
                        <ul className="list-unstyled">
                            <li>LOREM</li>
                            <li>IPSUM</li>
                            <li>DOPLAR</li>
                        </ul>
                    </div>
                    {/*col3*/}
                    <div className="col">
                        <h1>Misyon</h1>
                        <ul className="list-unstyled">
                            <li>MISC</li>
                            <li>WATCH</li>
                            <li>SELENIUM</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} OKULUM WEB | Tüm Hakları Saklıdır | Gizlilik
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;