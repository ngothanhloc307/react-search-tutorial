import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./app.css";
import Table from "./Table";
import { Users } from "./users";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Search"
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {/* <ul className="list">
//         {Users.filter((user) =>
//           user.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul> */}

//       <Table data={search(Users)} />
//     </div>
//   );
// }

////////////////////// API SEARCH
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`http://localhost:5000/?q=${query}`);
    setData(res.data);
  };

  useEffect(() => {
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}
export default App;
