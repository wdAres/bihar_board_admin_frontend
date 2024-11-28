import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { BASE_URL } from '../utils/BASE_URL';


const useHttp2 = () => {


    const [isLoading, setLoading] = useState(false)
    const current_user = Cookies.get('admin') ? JSON.parse(Cookies.get('admin')) : null 
    let token = current_user?.token
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (reqConfig, setterFuntion, needToast) => {

        setLoading(true)

        const baseUrl = `${BASE_URL}/${reqConfig.url}`
        const myToast = needToast && toast.loading('Please Wait...')
        try {
            const req = await fetch(baseUrl, {
                method: reqConfig.method || 'GET',
                headers: reqConfig.headers || { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
            })

            const resp = await req.json()

            if (!resp.success) {
                setError(resp)
                throw new Error(resp.message)
            }

            if (needToast) {
                toast.update(myToast, {
                    render: resp.message,
                    type: 'success',
                    isLoading: false,
                    autoClose: 1500,
                    pauseOnHover:false,
                    closeOnClick:true
                });
            }

            setterFuntion(resp)
        } catch (error) {

            toast.update(myToast, {
                render: error.message,
                type: 'error',
                isLoading: false,
                autoClose: 1500,
                closeOnClick:true,
                pauseOnHover:false
            })

        }
        finally {
            setLoading(false)
        }


    }, []);

    return {
        isLoading,
        sendRequest,
        error
    };
}

export default useHttp2
