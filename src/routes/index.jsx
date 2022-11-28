import Home from "../pages/home"
import SignIn from "../pages/signIn"


// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },

]


const privateRoutes = [

]


export { privateRoutes, publicRoutes }