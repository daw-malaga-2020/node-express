import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import NotFound from './components/NotFound'
import About from './components/About'
import Contact from './components/Contact'
import Delivering from './components/Delivering'
import History from './components/History'
import OrdeningGuide from './components/OrdeningGuide'

let adminGuard = (to, from, next) => { alert("Atención manazas!!"); next(); }

export const  routes = [
    {path: "/", component: Home },
    {path: "/menu", component: Menu },
    {path: "/admin", component: Admin, beforeEnter: adminGuard },
    {path: "/about", component: About, children:[
            {path: "/about/contact",component: Contact},
            {path: "/about/delivering",component: Delivering},
            {path: "/about/history",component: History},
            {path: "/about/ordening",component: OrdeningGuide}
        ] 
    },
    {path: "*", component: NotFound },
]