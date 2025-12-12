// import React, { useState } from "react";

// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [records, setRecords] = useState([]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (!formData.name || !formData.email) {
//       alert("Please enter at least name and email.");
//       return;
//     }
//     setRecords([...records, formData]);
//     setFormData({ name: "", email: "", age: "" });
//   };

//   const handleDelete = (index) => {
//     setRecords(records.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black-800">Dashboard</h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             min={0}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//     <button
//   onClick={handleAdd}
//   className="bg-black text-white rounded px-5 py-2"
// >
//   Add User
// </button>

//       </div>

//       <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

//         {records.length === 0 ? (
//           <p className="text-gray-500 italic text-center">No users added yet.</p>
//         ) : (
//           <ul>
//             {records.map((record, index) => (
//               <li
//                 key={index}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
//               >
//                 <div className="space-y-1 text-gray-700">
//                   <p><strong>Name:</strong> {record.name}</p>
//                   <p><strong>Email:</strong> {record.email}</p>
//                   <p><strong>Age:</strong> {record.age || "-"}</p>
//                 </div>
//                 <button
//   onClick={() => handleDelete(index)}
//   className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
// >
//   Delete
// </button>

//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:5000/users"; // Replace with your backend URL

// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch user list on mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error("Failed to fetch users");
//       const data = await response.json();
//       setRecords(data);
//     } catch (error) {
//       console.error(error);
//       alert("Error fetching users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAdd = async () => {
//     if (!formData.name || !formData.email) {
//       alert("Please enter at least name and email.");
//       return;
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) throw new Error("Failed to add user");
//       const newUser = await response.json();
//       setRecords((prev) => [...prev, newUser]);
//       setFormData({ name: "", email: "", age: "" });
//     } catch (error) {
//       console.error(error);
//       alert("Error adding user");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     try {
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete user");
//       setRecords((prev) => prev.filter((record) => record.id !== id));
//     } catch (error) {
//       console.error(error);
//       alert("Error deleting user");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black-800">Dashboard</h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             min={0}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           onClick={handleAdd}
//           className="bg-black text-white rounded px-5 py-2"
//         >
//           Add User
//         </button>
//       </div>

//       <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : records.length === 0 ? (
//           <p className="text-gray-500 italic text-center">No users added yet.</p>
//         ) : (
//           <ul>
//             {records.map((record) => (
//               <li
//                 key={record.id}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
//               >
//                 <div className="space-y-1 text-gray-700">
//                   <p><strong>ID:</strong> {record.id}</p>
//                   <p><strong>Name:</strong> {record.name}</p>
//                   <p><strong>Email:</strong> {record.email}</p>
//                   <p><strong>Age:</strong> {record.age || "-"}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(record.id)}
//                   className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";

// const API_URL = "https://btproject-production.up.railway.app/users/";

// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchUsers();

//   }, []);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
//       const data = await response.json();
//       setRecords(data);
//     } catch (error) {
//       console.error("Fetch users error:", error);
//       alert("Error fetching users: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAdd = async () => {
//     if (!formData.name || !formData.email) {
//       alert("Please enter at least name and email.");
//       return;
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       const newUser = await response.json();
//       setRecords((prev) => [...prev, newUser]);
//       setFormData({ name: "", email: "", age: "" });
//     } catch (error) {
//       console.error("Add user error:", error);
//       alert("Error adding user: " + error.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       setRecords((prev) => prev.filter((record) => record.id !== id));
//     } catch (error) {
//       console.error("Delete user error:", error);
//       alert("Error deleting user: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black">Dashboard</h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             min={0}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           onClick={handleAdd}
//           className="bg-black text-white rounded px-5 py-2"
//         >
//           Add User
//         </button>
//       </div>

//       <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : records.length === 0 ? (
//           <p className="text-gray-500 italic text-center">No users added yet.</p>
//         ) : (
//           <ul>
//             {records.map((record) => (
//               <li
//                 key={record.id}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
//               >
//                 <div className="space-y-1 text-gray-700">
//                   <p><strong>ID:</strong> {record.id}</p>
//                   <p><strong>Name:</strong> {record.name}</p>
//                   <p><strong>Email:</strong> {record.email}</p>
//                   <p><strong>Age:</strong> {record.age ?? "-"}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(record.id)}
//                   className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from "react";

// const API_URL = "https://btproject-production.up.railway.app/users/";

// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchUsers();

//   }, []);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
//       const data = await response.json();
//       setRecords(data);
//     } catch (error) {
//       console.error("Fetch users error:", error);
//       alert("Error fetching users: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAdd = async () => {
//     if (!formData.name || !formData.email) {
//       alert("Please enter at least name and email.");
//       return;
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       const newUser = await response.json();
//       setRecords((prev) => [...prev, newUser]);
//       setFormData({ name: "", email: "", age: "" });
//     } catch (error) {
//       console.error("Add user error:", error);
//       alert("Error adding user: " + error.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       setRecords((prev) => prev.filter((record) => record.id !== id));
//     } catch (error) {
//       console.error("Delete user error:", error);
//       alert("Error deleting user: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black">Dashboard</h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             min={0}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           onClick={handleAdd}
//           className="bg-black text-white rounded px-5 py-2"
//         >
//           Add User
//         </button>
//       </div>

//       <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : records.length === 0 ? (
//           <p className="text-gray-500 italic text-center">No users added yet.</p>
//         ) : (
//           <ul>
//             {records.map((record) => (
//               <li
//                 key={record.id}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
//               >
//                 <div className="space-y-1 text-gray-700">
//                   <p><strong>ID:</strong> {record.id}</p>
//                   <p><strong>Name:</strong> {record.name}</p>
//                   <p><strong>Email:</strong> {record.email}</p>
//                   <p><strong>Age:</strong> {record.age ?? "-"}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(record.id)}
//                   className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from "react";

// const API_URL =  "https://btproject-production.up.railway.app";

// const Dashboard = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", age: "" });
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // GET users
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(API_URL);
//       const text = await res.text();
//       console.log("GET", API_URL, res.status, res.statusText, text);
//       if (!res.ok) throw new Error(`${res.status} ${res.statusText} - ${text}`);
//       const data = text ? JSON.parse(text) : [];
//       setRecords(data);
//     } catch (err) {
//       console.error("Fetch users error:", err);
//       alert("Error fetching users: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
//   };

//   // CREATE user
//   const handleAdd = async () => {
//     if (!formData.name || !formData.email) {
//       alert("Please enter at least name and email.");
//       return;
//     }

//     setActionLoading(true);
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const text = await response.text();
//       console.log("POST", API_URL, response.status, response.statusText, text);

//       if (!response.ok) {
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       const newUser = text ? JSON.parse(text) : null;
//       if (newUser) {
//         setRecords((prev) => [...prev, newUser]);
//       } else {
//         // If server didn't return created object, refresh list
//         await fetchUsers();
//       }

//       setFormData({ name: "", email: "", age: "" });
//     } catch (error) {
//       console.error("Add user error:", error);
//       alert("Error adding user: " + error.message);
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   // DELETE user
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     setActionLoading(true);
//     try {
//       const response = await fetch(`${API_URL}${id}/`, { method: "DELETE" });
//       const text = await response.text();
//       console.log("DELETE", `${API_URL}${id}/`, response.status, response.statusText, text);

//       if (!response.ok) {
//         throw new Error(`${response.status} ${response.statusText} - ${text}`);
//       }

//       setRecords((prev) => prev.filter((r) => r.id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert("Error deleting user: " + err.message);
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black">Dashboard</h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             min={0}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           onClick={handleAdd}
//           className="bg-black text-white rounded px-5 py-2"
//           disabled={actionLoading}
//         >
//           {actionLoading ? "Working..." : "Add User"}
//         </button>
//       </div>

//       <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : records.length === 0 ? (
//           <p className="text-gray-500 italic text-center">No users added yet.</p>
//         ) : (
//           <ul>
//             {records.map((record) => (
//               <li
//                 key={record.id}
//                 className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
//               >
//                 <div className="space-y-1 text-gray-700">
//                   <p><strong>ID:</strong> {record.id}</p>
//                   <p><strong>Name:</strong> {record.name}</p>
//                   <p><strong>Email:</strong> {record.email}</p>
//                   <p><strong>Age:</strong> {record.age ?? "-"}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(record.id)}
//                   className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
//                   disabled={actionLoading}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from "react";

const API_BASE = "https://btproject-production.up.railway.app/users/";

const Dashboard = () => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // GET users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const text = await res.text();
      console.log("GET", API_BASE, res.status, res.statusText, text);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText} - ${text}`);
      const data = text ? JSON.parse(text) : [];
      setRecords(data);
    } catch (err) {
      console.error("Fetch users error:", err);
      alert("Error fetching users: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // CREATE user
  const handleAdd = async () => {
    if (!formData.name || !formData.email) {
      alert("Please enter at least name and email.");
      return;
    }

    setActionLoading(true);
    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      console.log("POST", API_BASE, response.status, response.statusText, text);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${text}`);
      }

      const newUser = text ? JSON.parse(text) : null;
      if (newUser) {
        setRecords((prev) => [...prev, newUser]);
      } else {
        await fetchUsers();
      }

      setFormData({ name: "", email: "", age: "" });
    } catch (error) {
      console.error("Add user error:", error);
      alert("Error adding user: " + error.message);
    } finally {
      setActionLoading(false);
    }
  };

  // DELETE user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setActionLoading(true);
    try {
      const response = await fetch(`${API_BASE}${id}/`, { method: "DELETE" });
      const text = await response.text();
      console.log("DELETE", `${API_BASE}${id}/`, response.status, response.statusText, text);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${text}`);
      }

      setRecords((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting user: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Dashboard</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Add New User</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleAdd}
          className="bg-black text-white rounded px-5 py-2"
          disabled={actionLoading}
        >
          {actionLoading ? "Working..." : "Add User"}
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md shadow p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300">User List</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : records.length === 0 ? (
          <p className="text-gray-500 italic text-center">No users added yet.</p>
        ) : (
          <ul>
            {records.map((record) => (
              <li
                key={record.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-3 last:border-b-0"
              >
                <div className="space-y-1 text-gray-700">
                  <p><strong>ID:</strong> {record.id}</p>
                  <p><strong>Name:</strong> {record.name}</p>
                  <p><strong>Email:</strong> {record.email}</p>
                  <p><strong>Age:</strong> {record.age ?? "-"}</p>
                </div>
                <button
                  onClick={() => handleDelete(record.id)}
                  className="mt-3 md:mt-0 md:ml-6 bg-red-600 text-white px-4 py-2 rounded"
                  disabled={actionLoading}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
