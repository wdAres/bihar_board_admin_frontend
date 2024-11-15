import Layout, { Content } from 'antd/es/layout/layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NonAuthHeader from './components/LayoytElements/NonAuthHeader';


const SiteLayoutBeforeLogin = ({ children }) => {

    return (

        <Layout>
            <ToastContainer
                position='top-right'
                autoClose='1000'
                closeOnClick
                pauseOnHover={false}
                draggable
                theme="light"
            />
            <NonAuthHeader />
            <Layout>
                <Content
                    style={{ padding: 20, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >{children}</Content>
            </Layout>
        </Layout>
    )
}

export default SiteLayoutBeforeLogin
