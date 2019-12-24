import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Nav, } from 'react-bootstrap';
import { userDataSelector } from '../store/user/selectors';
import { useSelector } from 'react-redux';
import { signOut } from '../store/user/actions';

export default function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(userDataSelector);
    const role = user.role;

    const handleSignOut = () => {
        dispatch(
            signOut({
                'id': '',
                'firstName': '',
                'lastName': '',
                'email': '',
                'firstLog': true,
                'role': null
            })
        );
    };

    window.addEventListener("unload", handleSignOut);


    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Clinic Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {role === 'ROLE_CCADMIN' && <Nav.Link href={'/ccadmin/' + user.id}>Clinic center admin profile</Nav.Link>}
                    {role === 'ROLE_NURSE' && <Nav.Link href={'/nurse-page/' + user.id}>Nurse homepage</Nav.Link>}
                    {role === 'ROLE_ADMINC' && <Nav.Link href={'/adminc'}>Clinic admin profile</Nav.Link>}
                    {role === 'ROLE_DOCTOR' && <Nav.Link href={'/doc/' + user.id}>Doctor homepage</Nav.Link>}
                    {role === 'ROLE_PATIENT' && <Nav.Link href={'/pat'}>Patient homepage</Nav.Link>}
                </Nav>
                <Nav className="ml-auto">
                    {role == null && <Nav.Link href="/login">Login</Nav.Link>}
                    {role == null && <Nav.Link href="/signup">Sign Up</Nav.Link>}
                    {role != null && <Nav.Link href="#" onClick={() => handleSignOut()}>Sign out</Nav.Link>}
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
}

