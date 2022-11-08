import React, { Suspense } from 'react'
import { RouteConfig } from './config'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'


const PrivateRoute =({children}:any)=>{
    let check = true
    if(check){
        return <Navigate to='/login'/>
    }
    return children
}

const RouteList =()=>{
    return(
        <Routes>
            {RouteConfig.map(({path,element,protect}:any,key)=>{
                return(
                    <Route path={path} key={key} 
                    element={protect ? <PrivateRoute>{element}</PrivateRoute> : element}
                    />                    
                )
            })}
        </Routes>
    )
}
export default function AppRoute() {
  return (
    <>
    <Suspense fallback={null}>
        <RouteList/>
    </Suspense>
    </>
  )
}

