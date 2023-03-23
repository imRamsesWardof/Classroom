import { Button } from 'react-native-paper';
import { AuthContext } from '../Routes/MobileRoutes'

import { useContext, useEffect } from 'react';

export default function LogOut( ) {
    const { auth, setAuth } = useContext(AuthContext)
    const logOut = ()=>{
        setAuth({})
    }
    return (
        <Button onPress={logOut} buttonText='red' style={{width: '50%'}} compact={true}>Log Out</Button>
    );
}
