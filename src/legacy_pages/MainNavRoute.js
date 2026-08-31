import React from 'react'
import { Route,  Link } from  "react-router-dom";
import Nav from '../Nav';

const MainNavRoute = ({component:Component,...rest}) => {
  return (
    <Route {...rest} render={(props)=>{ 
        return(
            <>
                <Nav />
                <Component {...props}/>
            </>
            
        )
    
    
    
    }}/>

  )
}

export default MainNavRoute