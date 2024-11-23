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
import AddStudent from './pages/Students/Additional/AddStudent'
import Students from './pages/Students/Student'
import AddNotice from './pages/Notice/Additional/AddNotice'
import EditNotice from './pages/Notice/Additional/EditNotice'
import EditStudent from './pages/Students/Additional/EditSchool'
import EditSchool from './pages/Schools/Additional/EditSchool'
import Tender from './pages/Tender/Tender'
import AddTender from './pages/Tender/Additional/AddNotice'
import EditTender from './pages/Tender/Additional/EditNotice'
import ImpLink from './pages/ImpLinks/ImpLink'
import AddImpLink from './pages/ImpLinks/Additional/AddImpLink'
import EditImpLink from './pages/ImpLinks/Additional/EditImpLink'
import EditSupport from './pages/Support/Additional/EditSupport'
import Support from './pages/Support/Support'


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
                <Route path='/school/edit/:id' element={<EditSchool />} />
              </Route>
              <Route path='/notice'  >
                <Route index element={<Notice />} />
                <Route path='/notice/add' element={<AddNotice />} />
                <Route path='/notice/edit/:id' element={<EditNotice />} />
              </Route>
              <Route path='/tender'  >
                <Route index element={<Tender />} />
                <Route path='/tender/add' element={<AddTender />} />
                <Route path='/tender/edit/:id' element={<EditTender />} />
              </Route>
              <Route path='/important-link'  >
                <Route index element={<ImpLink />} />
                <Route path='/important-link/add' element={<AddImpLink />} />
                <Route path='/important-link/edit/:id' element={<EditImpLink />} />
              </Route>
              <Route path='/student'  >
                <Route index element={<Students />} />
                {/* <Route path='/student/add' element={<AddStudent />} />
                <Route path='/student/edit/:id' element={<EditStudent />} /> */}
                <Route path='/student/by-center/:id' element={<Students />} />
              </Route>
              <Route path='/contacts' element={<Contact />} />
              <Route path='/inquiries' element={<Inquiry />} />
              <Route path='/updates' element={<Notice />} />
              <Route path='/support'  >
                <Route index element={<Support />} />
                <Route path='/support/view/:id' element={<EditSupport />} />
              </Route>
            </Routes>
          </LayoutFile>
      }
    </>
  )
}

export default App
