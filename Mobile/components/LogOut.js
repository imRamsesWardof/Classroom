import { Button } from 'react-native-paper';
import { AuthContext } from '../App'

import { useContext, useEffect } from 'react';

export default function LogOut( {navigation} ) {
    const { auth, setAuth } = useContext(AuthContext)
    const logOut = ()=>{
        setAuth({})
    }
    return (
        <Button onPress={logOut}>Log Out</Button>
    );
}
