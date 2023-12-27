import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUserData } from '../../services/apiCalls/user';

const UserForm = () => {
    const { userData } = useSelector((store) => store.user)

    const [isEditable, setEditable] = useState(true)
    const dispatch = useDispatch()

    const initialValues = {
        name: userData?.name,
        mobile: userData?.mobile,
    }
    const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const updateSchema = Yup.object({
        name: Yup.string().min(3).max(15).required("Please enter your name"),
        mobile: Yup.string().matches(mobileRegExp, 'Mobile number is not valid').min(10, 'Mobile number is not valid').max(10, 'Mobile number is not valid').required("Please enter your mobile number"),
    })

    
    let { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: updateSchema,
        onSubmit: (values) => {
            dispatch(updateUserData(values))
            setEditable(true)
            values.name = userData?.name
            values.mobile = userData?.mobile
        }
    })
    
    useEffect(() => {
        values.name = userData?.name
        values.mobile = userData?.mobile
    }, [userData])
    
    let submitStatus = (values.name !== userData?.name || values.mobile != userData?.mobile) ? true : false
    
    const ChangeEditable = () => {
        setEditable(!isEditable)
        values.name = userData?.name
        values.mobile = userData?.mobile
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className=''>
                <div className='flex justify-between'>
                    <h2 className='mb-5 font-semibold text-gray-600'>User Informations</h2>
                    <p className='text-sm block text-primary font-semibold cursor-pointer pr-1' onClick={ChangeEditable}>Edit</p>
                </div>
                <label className="text-sm block text-gray-700">User name</label>
                <div className="relative flex items-center">
                    <input name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} disabled={isEditable}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter username" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>
                {(touched.name && errors.name) && <p className='text-2xs text-red-600 pl-1'>{errors.name}</p>}
            </div>

            <div className="mt-4 relative">
                <label className="text-sm block text-gray-600">Mobile number</label>
                <div className="relative flex items-center">
                    <input name="mobile" type="number" value={values.mobile} onChange={handleChange} onBlur={handleBlur} disabled={isEditable}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter Mobile number" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 24 24">
                        <path d="M22 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM3 5h18v10H3V5zm0 12v-2h18v2H3z" />
                    </svg>
                </div>
                {(touched.mobile && errors.mobile && !isEditable) && <p className='text-2xs text-red-600 pl-1'>{errors.mobile}</p>}
            </div>


            <div className="mt-8">
                {
                    submitStatus &&
                    <button type="submit" className="primary-button w-full" >
                        Save Changes
                    </button>
                }
            </div>

        </form>
    )
}

export default UserForm