import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthMiddleware = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        navigate('/dashboard');
    }
  }, [navigate])
}

export const userAlreadyLoggedIn = () => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        return true;
    }else{
        return false;
    }
}


export default AuthMiddleware;
