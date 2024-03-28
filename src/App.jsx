// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflixx from './pages/Netflixx';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './utils/firebase-config'; // Assuming you have imported firebaseAuth from your Firebase config file

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/' element={<Netflixx user={user} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
