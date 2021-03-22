import { createContext } from 'react';

let AuthContext = createContext(
    {
        isLoggedIn:false ,
        token :null,
        loginHandler:  ()=>{},
        logoutHandler: () => {}
    }
);

export default AuthContext;