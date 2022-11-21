import { createContext } from "react";

 const AuthContextProvider= createContext({
    token:null,
    login:false
   })


export default AuthContextProvider;
