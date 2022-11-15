import { useState } from "react"
import { AuthContext } from "../conxexts/AuthContext"
import Routes from '../Routes.jsx'
 
 
 const AppProvider = () => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))

   return (
     <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Routes/>
     </AuthContext.Provider>
   )
 }
 
 export default AppProvider