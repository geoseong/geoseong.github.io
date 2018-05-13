import React from 'react'
import { Row, Col } from 'react-bootstrap';

const PageHeader = (props) => {
    return (
        <Row className="show-grid gs-header">
            <Col xs={2} sm={2} md={2} lg={2}>
                <img src="img/signature_pts_black.png" className="logoimg"/>
            </Col>
            <Col xs={9} sm={9} md={9} lg={9} className="gs-header-title-area">
                <div className="gs-header-title">Geoseong's Dev Note</div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} onClick={props.toggleSidebar}>
                <div className="glyphicon glyphicon-menu-hamburger gs-header-list"></div>
            </Col>
        </Row>
    )
}

export default PageHeader
