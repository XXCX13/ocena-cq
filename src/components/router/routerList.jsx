// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function routerList() {
//     return (
//       <Router>
//         <div>
//           <ul>
           
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//           </ul>
  
//           <hr />
  
//           {/*
//             A <Switch> looks through all its children <Route>
//             elements and renders the first one whose path
//             matches the current URL. Use a <Switch> any time
//             you have multiple routes, but you want only one
//             of them to render at a time
//           */}
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/dashboard">
//               <Dashboard />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }

//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }
  
//   function Dashboard() {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//     );
//   }
  