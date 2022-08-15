import { useApolloClient } from '@apollo/client';
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SettingContext } from '../App';
import logo from "../assets/images/grow_farm.png"
import language from '../helpers/language';

const Header = () => {
    const navigate = useNavigate();
    const client = useApolloClient();
    const { lang, setLang, languageData, setLanguageData, uType, setUType } = useContext(SettingContext);
    const location = useLocation();
    console.log(location.pathname);
    const languageSwitch = (e) => {
        setLang(e.target.value);
        localStorage.setItem("lang", e.target.value);
        setLanguageData(language[e.target.value]);
    }
    const logout = () => {
        setTimeout(() => {
            localStorage.clear();
            client.cache.reset();
            setUType(null);
        }, 100);
        navigate("/");
    }
    return (
        <section className="header">
            <div className="header-top">
                <div id="language-setting">
                    <p>{languageData.header.lang}
                        <select value={lang} className="btn btn-light btn-sm ms-2" onChange={languageSwitch}>
                            <option value="en">English</option>
                            <option value="bn">বাংলা</option>
                        </select>
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="logo">
                                <Link to="/" className='h1'><img src={logo} alt="Grow Farm" /></Link>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-sm-12 col-md-5">
                            <div className="user-entry">
                                <ul>
                                    <li>
                                        <Link to="/login" state={{ type: 2 }}>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            {languageData.header.authBtn[0]}
                                        </Link>
                                        <span>
                                            <Link to="/signup" state={{ type: 2 }}>
                                                {languageData.header.authBtn[2]}
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <Link to="/login" state={{ type: 3 }}>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            {languageData.header.authBtn[1]}
                                        </Link>
                                        <span>
                                            <Link to="/signup" state={{ type: 3 }}>
                                                {languageData.header.authBtn[2]}
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <Link to="/login" state={{ type: 1 }}>
                                            {languageData.header.authBtn[3]}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-8 col-lg-8">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    {
                                        (!uType || location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/about" || location.pathname === "/training") ?
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/">{languageData.header.menu.general[0]}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/about">{languageData.header.menu.general[1]}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/training">{languageData.header.menu.general[2]}</Link>
                                                </li>
                                                {
                                                    (uType === 2 || uType === 3) &&
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/my-profile">{languageData.header.menu.farmer[0]}</Link>
                                                    </li>
                                                }
                                            </ul> : (
                                                <>
                                                    {
                                                        uType === 1 &&
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/dashboard">{languageData.header.menu.admin[0]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/farmer-list">{languageData.header.menu.admin[1]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/buyer-list">{languageData.header.menu.admin[2]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/complain-list">{languageData.header.menu.admin[3]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/my-profile">{languageData.header.menu.admin[4]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <span className="nav-link" onClick={logout}>{languageData.header.menu.admin[5]}</span>
                                                            </li>
                                                        </ul>
                                                    }
                                                    {
                                                        uType === 2 &&

                                                        <ul className="navbar-nav">
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/my-profile">{languageData.header.menu.farmer[0]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/complain-status">{languageData.header.menu.farmer[1]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/crop-advertise">{languageData.header.menu.farmer[2]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/farming-tips">{languageData.header.menu.farmer[3]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <span className="nav-link" onClick={logout}>{languageData.header.menu.farmer[4]}</span>
                                                            </li>
                                                        </ul>
                                                    }
                                                    {
                                                        uType === 3 &&
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/my-profile">{languageData.header.menu.buyer[0]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/post-advertise">{languageData.header.menu.buyer[1]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="/my-advertise">{languageData.header.menu.buyer[2]}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <span className="nav-link" onClick={logout}>{languageData.header.menu.buyer[3]}</span>
                                                            </li>
                                                        </ul>
                                                    }
                                                </>
                                            )
                                    }

                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-2 col-lg-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Header