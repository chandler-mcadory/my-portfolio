import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            { !show && <span className='m-2' onClick={handleShow} style={{cursor: "pointer", fontSize: "1.7rem", position: "absolute", zIndex: "999"}}>
                <FontAwesomeIcon  icon={faBars} />
            </span> }

            <Offcanvas backdrop={false} show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Navigation</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>


{/* ======================== MAKE THE ROUTES ==================== */}

                    <ListGroup variant="flush">
                        <ListGroup.Item><Link href={"/"}>Home</Link></ListGroup.Item>
                        <ListGroup.Item><Link href={"https://docs.google.com/document/d/1Et6-MkVviGmQ88-axMdc_kDIQM51UKaHiwaETK3Vu7c/edit?usp=sharing"}>Resume</Link></ListGroup.Item>
                        <ListGroup.Item><Link href={"/issuetracker"}>Issue Tracker Project</Link></ListGroup.Item>
                        <ListGroup.Item><Link href={"/visualizer"}>Data Structures/Algorithms Visualizer</Link></ListGroup.Item>
                        <ListGroup.Item><Link href={"/contact"}>Contact</Link></ListGroup.Item>
                    </ListGroup>


                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

// render(<Sidebar />);

export default Sidebar