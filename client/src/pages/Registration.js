// import React, { useRef } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_POST, LOADING } from "../../utils/actions";
// import API from "../../utils/API";

// function addUserForm() {
//     const userNameRef = useRef();
//     const passwordRef = useRef();
//     const emailRef = useRef();
//     const phoneRef = useRef();
// }

// const handleSubmit = e => {
//     e.preventDefault();
//     dispatchEvent({ type: LOADING });
//     API.saveUser({
//         userName: userNameRef.current.value,
//         password: passwordRef.current.value,
//         email: emailRef.current.value,
//         phone: phoneRef.current.value
//     })
//     .then(result => {
//         dispatch({
//             type: ADD_POST,
//             post: result.data
//         });
//     })
//     .catch(err => console.log(err))

//     userNameRef.current.value = "";
//     passwordRef.current.value = "";
//     emailRef.current.value = "";
//     phoneRef.current.value = "";

// }



// return (
//     <div>
//       <div className="jumbotron">
//         <img
//           className="img-fluid img-thumbnail"
//         />
//       </div>
//       <h1>Register Here</h1>
//       <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
//         <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
//         <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
//         <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
//         <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
//           Save Post
//         </button>
//       </form>
//     </div>
//   );
// }


// export default addUserForm;