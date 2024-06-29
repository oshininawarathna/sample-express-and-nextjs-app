
import { useEffect, useState } from 'react';
export default function Card() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 


    const apiEndpoint = 'http://localhost:8000/api/user/get';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
      }, []);
      
      
      
      
      
      console.log("users",users);
    return (
        <main className=" flex min-h-screen flex-col items-center justify-between p-10">
        {/* Cards */}
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  {users.map((user) => (
    <div
      key={user._id}
      className="w-full lg:max-w-sm rounded-xl p-5 shadow-md dark:bg-slate-800"
    >
      <div className="text-center space-y-4">
        <p className="text-lg font-medium">{user.name}</p>
        <div className="text-center text-sky-500 dark:text-sky-400">{user.email}</div>
        <div className="text-center text-slate-700 dark:text-slate-500 text-sm ">
          {user.address}
        </div>
      </div>
    </div>
  ))}
</div>

      </main>
    );
  }
  