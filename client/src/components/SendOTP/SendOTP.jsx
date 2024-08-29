import { useState } from 'react'
import { submitMobile, verfyMobileOTP } from '../../services/apiCalls/auth';

const SendOTP = () => {

    const [verified, setVerified] = useState(false);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp ] = useState('');

    const [ changePassword, setChangePassword] = useState(false);

    const handleSendOTP = async() => {
        try {
            const response = await submitMobile({mobile});
            console.log(response)
            setVerified(true)
        } catch (error) {
            console.log("Catched error: " + error)
        }
    }

    const handleVerifyOTP = async() => {
        try {
            const response = await verfyMobileOTP({ mobile, otp });
            console.log(response)
        } catch (error) {
            
        }
        
    }

    return (
        <div className='mb-5 py-4'>
            <label className="text-sm block text-gray-700">Mobile Number</label>
            <div className="flex items-center py-2 mb-3">
                <input type="number" autoComplete='off' value={mobile} onChange={(e) => setMobile(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter your mobile number" disabled={verified} />
            </div>

            {
                verified ?
                    <>
                        <label className="text-sm block text-gray-700">Enter the 4 digit OTP</label>
                        <div className="flex items-center py-2">
                            <input type="number" autoComplete='off' value={otp} onChange={(e) => setOtp(e.target.value)}
                                className="w-full text-lg border border-gray-300 text-center px-4 py-2 rounded-md outline-primary" placeholder="* * * *" />
                        </div>

                        <div className="mt-10">
                            <button type="submit" className="primary-button w-full" onClick={handleVerifyOTP}>
                               Verify
                            </button>
                        </div>
                    </> :

                    <div className="mt-10">
                        <button type="submit" className="primary-button w-full" onClick={handleSendOTP}>
                            Sent OTP
                        </button>
                    </div>
            }

        </div>
    )
}

export default SendOTP