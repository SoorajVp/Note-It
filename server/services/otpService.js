import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const verifySid = process.env.TWILIO_VERIFY_SID

const client = twilio(accountSid, authToken)


export const sendOtpService = async(mobile) => {
    try {
        console.log(accountSid, authToken, verifySid )
        const verification = await client.verify.v2.services(verifySid)
            .verifications.create({ to: `+91${mobile}`, channel: "sms" })
            console.log("status - - - ",verification)
            return { status: true }
    } catch (error) {
        console.log("status error - - - -", error)
        return { status: false }
    }
    
}

export const verifyOtpService = async(mobile, otp) => {
    try {
        const verification = await client.verify.v2.services(verifySid)
            .verificationChecks
            .create({ to: `+91${mobile}`, code: otp })
            console.log("status - - -", verification)
            return verification
    } catch (error) {
        console.log("status error - - - -", error)
        return { valid: false }
    }
}