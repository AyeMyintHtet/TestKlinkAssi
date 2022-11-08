import Home from "screen/home"
import Login from "screen/auth"
export const RouteConfig =[
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login/>
    }

]