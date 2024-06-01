// import React, { SyntheticEvent } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { baseUrl } from "../config";

// export default function Signup() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = React.useState({
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errorData, setErrorData] = React.useState({
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function handleChange(e: any) {
//     const fieldName = e.target.name;
//     const newFormData = structuredClone(formData);

//     newFormData[fieldName as keyof typeof formData] = e.target.value;
//     setFormData(newFormData);
//     console.log(formData);
//   }

//   async function handleSubmit(e: SyntheticEvent) {
//     try {
//       e.preventDefault();
//       {
//         const resp = await axios.post(`${baseUrl}/signup`, formData);
//       }

//       navigate("/login");
//     } catch (e: any) {
//       setErrorData(e.response.data.errors);
//       console.log(e);
//     }
//   }

//   return (
//     <div className="section is-flex is-small is-justify-content-center">
//       <div className="container signup is-multiline is-max-desktop custom-border-radius p-6 login">
//         <h1 className="is-size-4 mb-2 has-text-centered">
//           Welcome to the Owlcore Fitness Community
//         </h1>
//         <p className="is-size-6 mb-2 has-text-centered">
//           Join an inclusive network where support and encouragement fuel your
//           fitness journey.
//         </p>

//         <div>
//           <form
//             className="is-flex is-flex-direction-column"
//             onSubmit={handleSubmit}
//           >
//             <div className="field ">
//               <div className="control has-icons-right">
//                 <input
//                   className="input"
//                   type="text"
//                   name={"username"}
//                   placeholder="Username"
//                   onChange={handleChange}
//                   value={formData.username}
//                 />
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-user"></i>
//                 </span>
//                 <div className="is-size-7 m-1 has-text-weight-semibold">
//                   Please make it unique
//                 </div>
//                 {errorData.username && (
//                   <small className="has-text-danger">
//                     {errorData.username}
//                   </small>
//                 )}
//               </div>
//             </div>
//             <div className="field">
//               <div className="control has-icons-right">
//                 <input
//                   className="input"
//                   type="text"
//                   name={"email"}
//                   placeholder="Email"
//                   onChange={handleChange}
//                   value={formData.email}
//                 />
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-envelope"></i>
//                 </span>
//                 <div className="is-size-7 m-1 has-text-weight-semibold">
//                   Please use be a valid email
//                 </div>
//                 {errorData.email && (
//                   <small className="has-text-danger">{errorData.email}</small>
//                 )}
//               </div>
//             </div>
//             <div className="field">
//               <div className="control has-icons-right">
//                 <input
//                   className="input"
//                   type="password"
//                   name={"password"}
//                   placeholder="Password"
//                   onChange={handleChange}
//                   value={formData.password}
//                 />
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-lock"></i>
//                 </span>
//                 <div className="is-size-7 m-1 has-text-weight-semibold">
//                   Please include 1 uppercase, 1 lowercase, 1 number and 1 symbol
//                 </div>
//                 {errorData.password && (
//                   <small className="has-text-danger">
//                     {errorData.password}
//                   </small>
//                 )}
//               </div>
//             </div>
//             <div className="field">
//               <div className="control has-icons-right">
//                 <input
//                   className="input"
//                   type="password"
//                   name={"confirmPassword"}
//                   placeholder="Confirm Password"
//                   onChange={handleChange}
//                   value={formData.confirmPassword}
//                 />
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-lock"></i>
//                 </span>
//                 <div className="is-size-7 m-1 has-text-weight-semibold">
//                   Make sure it matches your password above
//                 </div>
//                 {errorData.confirmPassword && (
//                   <small className="has-text-danger">
//                     {errorData.confirmPassword}
//                   </small>
//                 )}
//               </div>
//             </div>

//             <button className="button is-align-self-center">Submit</button>
//             <div className="is-flex mt-4 is-align-self-center">
//               <p className="is-size-7">Already have an account?</p>
//               <p className="ml-2 is-size-7">
//                 <Link to="/login">
//                   <div>Login</div>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
