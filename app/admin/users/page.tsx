import { getUsers } from "@/app/controllers/userController";
export interface users{
    id?:number;
    name?:string;
    email?:string
 }
 

export default async function Users() {
    const data = await getUsers();
    return (
        <>
        <div><h1 className="py-2">Users List</h1></div>
        <div className=" mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr className="text-left">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                {
            Array.isArray(data) ? (
              data.map((item:users) => (
                <>
                    <tr>
                        <td className="px-4 py-2">{item.id}</td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.email}</td>
                        <td className="px-4 py-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                    
                    </>
                        ))
                        ) : (
                        <li>Error: Data is not an array</li>
                        )
                    }  
                </tbody>
            </table>
        </div>
        </>
    )
}    