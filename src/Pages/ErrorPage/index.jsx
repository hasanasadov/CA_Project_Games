import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>404</h1>
            <p style={styles.message}>Page Not Found</p>
            <Link to="/" style={styles.link}>Go Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: '6rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0',
    },
    link: {
        fontSize: '1rem',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default ErrorPage;