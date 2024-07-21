
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser, FaAt, FaLock } from 'react-icons/fa';
// import login from '../Assets/login.jpg'; 

// function Login() {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-start justify-start bg-gradient-to-t from-light-bg to-secondary text-white font-poppins">
//       <div className="w-full md:w-1/2 h-64 md:h-screen md:block">
//         <img src={login} alt="Login Illustration" className="w-full h-full object-cover" />
//       </div>
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-start mt-20 md:mt-44">
//         <div className="w-[59%] max-w-md p-8 bg-dark-bg rounded-lg shadow-lg relative">
//           <input type="checkbox" id="reg-log" className="hidden" />
//           <div className="text-center mb-6">
//             <label htmlFor="reg-log" className="cursor-pointer">
//               <h6 className="text-lg font-bold uppercase mb">
//                 <span className="text-yellow-200">Log In</span>
//                 <span className="mx-4"> | </span>
//                 <span className='text-yellow-200'>Sign Up</span>
//               </h6>
//             </label>
//           </div>
//           <div className="card-3d-wrap">
//             <div className="card-3d-wrapper">
//               <div className="card-front flex items-center justify-center">
//                 <div className="w-full p-8 rounded-lg shadow-lg">
//                   <h4 className="text-2xl text-yellow-300 font-semibold mt-7 mb-4">Log In</h4>
//                   <form className="space-y-4 mb-7">
//                     <div className="relative">
//                       <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
//                       <input type="email" className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none" placeholder="Email" />
//                     </div>
//                     <div className="relative">
//                       <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
//                       <input type="password" className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none" placeholder="Password" />
//                     </div>
//                     <Link to='/home'>
//                       <button type="submit" className=" mt-7 w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-purple-400 hover:text-primary transition-colors">Login</button>
//                     </Link>
//                   </form>
//                   <p className="mt-4 text-center">
//                     <Link to="/forgotpassword" className="text-primary hover:underline">Forgot Password?</Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back flex items-center justify-center">
//                 <div className="w-full p-8 rounded-lg shadow-lg">
//                   <h4 className="text-2xl font-semibold mb-4">Sign Up</h4>
//                   <form className="space-y-4">
//                     <div className="relative">
//                       <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
//                       <input type="text" className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none" placeholder="Name" />
//                     </div>
//                     <div className="relative">
//                       <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
//                       <input type="email" className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none" placeholder="Email" />
//                     </div>
//                     <div className="relative">
//                       <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
//                       <input type="password" className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none" placeholder="Password" />
//                     </div>
//                     <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-purple-400 hover:text-primary transition-colors">Sign Up</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         input[type="checkbox"]:checked,
//         input[type="checkbox"]:not(:checked) {
//           position: absolute;
//           left: -9999px;
//         }

//         #reg-log:checked + label .text-lg.font-bold.uppercase span:first-child {
//           color: white;
//         }

//         #reg-log:checked + label .text-lg.font-bold.uppercase span:last-child {
//           color: #EA2C62;
//         }

//         .card-3d-wrap {
//           perspective: 1000px;
//         }

//         .card-3d-wrapper {
//           transform-style: preserve-3d;
//           transition: transform 0.6s;
//         }

//         #reg-log:checked ~ .card-3d-wrap .card-3d-wrapper {
//           transform: rotateY(180deg);
//         }

//         .card-front, .card-back {
//           position: absolute;
//           width: 100%;
//           backface-visibility: hidden;
//         }

//         .card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaAt, FaLock } from 'react-icons/fa';
import login from '../Assets/login.jpg';

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const hasAlphabet = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasAlphabet && hasNumber;
};

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [signupNameError, setSignupNameError] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginEmailError('');
    setLoginPasswordError('');

    if (!validateEmail(loginEmail)) {
      setLoginEmailError('Invalid email format.');
    }

    if (!validatePassword(loginPassword)) {
      setLoginPasswordError('Password must contain both alphabetic and numeric characters.');
    }
    
    if (!loginEmailError && !loginPasswordError) {
      // Handle login logic here
      console.log('Logging in with:', { loginEmail, loginPassword });
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setSignupNameError('');
    setSignupEmailError('');
    setSignupPasswordError('');

    if (!signupName) {
      setSignupNameError('Name is required.');
    }

    if (!validateEmail(signupEmail)) {
      setSignupEmailError('Invalid email format.');
    }

    if (!validatePassword(signupPassword)) {
      setSignupPasswordError('Password must contain both alphabetic and numeric characters.');
    }
    
    if (!signupNameError && !signupEmailError && !signupPasswordError) {
      // Handle signup logic here
      console.log('Signing up with:', { signupName, signupEmail, signupPassword });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-start bg-gradient-to-t from-light-bg to-secondary text-white font-poppins">
      <div className="w-full md:w-1/2 h-64 md:h-screen md:block">
        <img src={login} alt="Login Illustration" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-start mt-20 md:mt-44">
        <div className="w-[59%] max-w-md p-8 bg-dark-bg rounded-lg shadow-lg relative">
          <input type="checkbox" id="reg-log" className="hidden" />
          <div className="text-center mb-6">
            <label htmlFor="reg-log" className="cursor-pointer">
              <h6 className="text-lg font-bold uppercase mb">
                <span className="text-yellow-200">Log In</span>
                <span className="mx-4"> | </span>
                <span className='text-yellow-200'>Sign Up</span>
              </h6>
            </label>
          </div>
          <div className="card-3d-wrap">
            <div className="card-3d-wrapper">
              <div className="card-front flex items-center justify-center">
                <div className="w-full p-8 rounded-lg shadow-lg">
                  <h4 className="text-2xl text-yellow-300 font-semibold mt-7 mb-4">Log In</h4>
                  <form onSubmit={handleLoginSubmit} className="space-y-4 mb-7">
                    <div className="relative">
                      <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                      <input
                        type="email"
                        className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    {loginEmailError && <p className="text-red-500 text-center">{loginEmailError}</p>}
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                      <input
                        type="password"
                        className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </div>
                    {loginPasswordError && <p className="text-red-500 text-center">{loginPasswordError}</p>}
                    <Link to='/home'>
                      <button type="submit" className="mt-7 w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-purple-400 hover:text-primary transition-colors">Login</button>
                    </Link>
                  </form>
                  <p className="mt-4 text-center">
                    <Link to="/forgotpassword" className="text-primary hover:underline">Forgot Password?</Link>
                  </p>
                </div>
              </div>
              <div className="card-back flex items-center justify-center">
                <div className="w-full p-8 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-semibold mb-4">Sign Up</h4>
                  <form onSubmit={handleSignupSubmit} className="space-y-4">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                      <input
                        type="text"
                        className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none"
                        placeholder="Name"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                      />
                    </div>
                    {signupNameError && <p className="text-red-500 text-center">{signupNameError}</p>}
                    <div className="relative">
                      <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                      <input
                        type="email"
                        className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none"
                        placeholder="Email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                      />
                    </div>
                    {signupEmailError && <p className="text-red-500 text-center">{signupEmailError}</p>}
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                      <input
                        type="password"
                        className="w-full py-3 pl-12 pr-4 bg-gray-800 text-gray-300 rounded-lg shadow-md focus:outline-none"
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      />
                    </div>
                    {signupPasswordError && <p className="text-red-500 text-center">{signupPasswordError}</p>}
                    <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-purple-400 hover:text-primary transition-colors">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        input[type="checkbox"]:checked,
        input[type="checkbox"]:not(:checked) {
          position: absolute;
          left: -9999px;
        }

        #reg-log:checked + label .text-lg.font-bold.uppercase span:first-child {
          color: white;
        }

        #reg-log:checked + label .text-lg.font-bold.uppercase span:last-child {
          color: #EA2C62;
        }

        .card-3d-wrap {
          perspective: 1000px;
        }

        .card-3d-wrapper {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        #reg-log:checked ~ .card-3d-wrap .card-3d-wrapper {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          backface-visibility: hidden;
        }

        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default Login;
