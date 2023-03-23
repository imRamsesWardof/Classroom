import React, { useContext } from 'react';
import { UserContext } from './App';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function LoginButton() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

  const handleButtonClick = () => {
    if (Object.keys(user).length > 0) {
        setUser({});
    }
    navigate('/Login');
  };

  return (
    <Button variant="contained" onClick={handleButtonClick}>
      {Object.keys(user).length === 0 ? 'LogIn' : 'LogOut'}
    </Button>
  );
};