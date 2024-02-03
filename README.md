# BYTEPAD - Note Storage Web Application

BYTEPAD is a robust note storage web application designed for users to seamlessly access their texted notes from any location and device. The application was crafted using a combination of cutting-edge technologies, demonstrating a commitment to modern development practices:

## Technologies Used

- Node.js and Express.js for the backend
- PostgreSQL database with Sequelize ORM, following the MVC architecture
- React.js for the frontend
- Tailwind CSS for styling
- Redux Toolkit for state management
- Axios for handling API requests
- Formik and Yup for form validations
- JWT for authentication
- Twilio service for mobile OTP verification
- Designed and implemented an array of features for an optimal user experience

## Features

- Registration with username, mobile number, and password
- Login with secure JWT-based authentication
- Forgot password with mobile OTP verification and reset password.
- Note creation, editing, and deletion
- User details update (username, mobile number)
- Password change with verification of the old password
- The backend and frontend technologies work seamlessly together, ensuring a smooth user experience and efficient data         management.

## Get Started

1. Clone this repository. `git clone https://github.com/SoorajVp/BytePad.git`
    `cd client/`
    `cd server/`
2. Install dependencies using `npm install` ( client and server side ).
3. Configure environment variables on server side(e.g., database connection, port, jwt secret-key, twilio credentials).
4. Build the application using `npm run build`.
5. Run the application using `npm run dev`.