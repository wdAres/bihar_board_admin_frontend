import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import LayoutFile from './LayoutFile'
import SiteLayoutBeforeLogin from './SiteLayoutBeforeLogin'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Forget from './pages/Auth/Forget'
import Schools from './pages/Schools/Schools'


const someLinks = ['/login', '/signup', '/forget', '/admin_login/:resetToken']

function App() {

  const { pathname } = useLocation()

  return (
    <>
      {/\/admin_login\//.test(pathname) ? <SiteLayoutBeforeLogin>
        {/* <Routes><Route path='/admin_login/:resetToken' element={<AdminLogin />} /></Routes> */}
      </SiteLayoutBeforeLogin> :

        someLinks.includes(pathname) ?

          <SiteLayoutBeforeLogin>
            <Routes>
              {/* Auth */}
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/forget' element={<Forget />} />
            </Routes>
          </SiteLayoutBeforeLogin>
          :
          <LayoutFile>
            <Routes>
              <Route path='/' element={<Schools />} />
            </Routes>
          </LayoutFile>
      }
    </>
  )
}

export default App
