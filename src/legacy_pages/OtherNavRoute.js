import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav'
import NavAlt from '../NavAlt'

const OtherNavRoute = ({component:Component,...rest}) => {
  return (
    <Route {...rest} render={(props)=>{
        return (
          <>
            <Nav />
              <Component {...props}/>
          </>
          )


    }}/>

    )
}

export default OtherNavRoute