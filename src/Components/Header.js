import React,{useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    } 
    return (
        <Container fluid className="header">
            <div className="row justify-content-between align-items-end no-gutters">
                <Col xs={4} sm={4} md={4} lg={6} xl={6}>
                    <div className="row justify-content-center d-flex flex-wrap">
                        <Col xs={6} sm={6} md={6} lg={2} xl={2} >
                            <h2>Logo</h2>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={10} xl={10}>
                            <button className="menu-btn" onClick={handleClick}>{isActive ? ( <i className="fa fa-bars" style={{fontSize:"36px"}}></i>):(<i className="fa fa-close" style={{fontSize:"24px"}}></i>)}</button>
                            <ul className={`menu ${isActive ? "mobile-menu" :"mobile-menu-show"} `} style={{display:isActive}}>
                                <li className="menu-items"><p>Asukohad</p></li>
                                <li className="menu-items"><p>Kampaaniad</p></li>
                                <li className="menu-items"><p>Kavandid</p></li>
                                <li className="menu-items"><p>Kliendid</p></li>
                                <li className="menu-items "><p>Blogi</p></li>
                            </ul>
                        </Col>
                    </div>
                </Col>
                <Col xs={7} sm={7} md={6} lg={6} xl={6}>
                    <div className="row justify-content-end align-items-center">
                        <Col xs={3} sm={3} md={3} lg={2} xl={2}>
                            <a href="#">Sign in</a>
                        </Col>
                        <Col xs={6} sm={5} md={5} lg={4} xl={4}>
                            <button>Create Account <span>icon</span></button>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={2} xl={2}><p>icon</p></Col>
                    </div>
                </Col>
            </div>
        </Container>
    )
}

export default Header;