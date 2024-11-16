import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import LayoutFile from './LayoutFile'
import SiteLayoutBeforeLogin from './SiteLayoutBeforeLogin'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Forget from './pages/Auth/Forget'
import Schools from './pages/Schools/Schools'
import Contact from './pages/Contact/Contact'
import Inquiry from './pages/Inquiry/Inquiry'
import Notice from './pages/Notice/Notice'
import AddSchool from './pages/Schools/Additional/AddSchool'
import AddStudent from './pages/Schools copy/Additional/AddStudent'


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
              <Route path='/school'  >
                <Route index element={<Schools />} />
                <Route path='/school/add' element={<AddSchool />} />
              </Route>
              <Route path='/student'  >
                <Route index element={<Schools />} />
                <Route path='/student/add' element={<AddStudent />} />
              </Route>
              <Route path='/contacts' element={<Contact />} />
              <Route path='/inquiries' element={<Inquiry />} />
              <Route path='/updates' element={<Notice />} />
            </Routes>
          </LayoutFile>
      }
    </>
  )
}

export default App
