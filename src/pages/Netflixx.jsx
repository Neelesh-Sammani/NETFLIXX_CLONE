// Netflixx.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config'; // Assuming you have imported firebaseAuth from your Firebase config file

function Netflixx({ user }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth); // Assuming firebaseAuth is your Firebase authentication object
            navigate("/"); // Redirect to the Netflixx page after logout
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            {user ?
                <div className="user">
                    <span>Welcome, {user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div> :
                <button onClick={() => navigate("/login")}>Log In</button>
            }
        </Container>
    )
}

const Container = styled.div`
    padding: 0 4rem;
    .logo {
        img {
            height: 5rem;
        }
    }
    .user {
        display: flex;
        align-items: center;
        span {
            margin-right: 1rem;
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
        }
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;

export default Netflixx;
