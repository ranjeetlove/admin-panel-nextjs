import Link from "next/link";

export default function SideBar(){
    return(
        <>
         <div className="bg-gray-900 text-white w-64 flex flex-col">
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        
        <nav className="flex-1 left-panel">
            <ul className="space-y-2">
                <li>
                    <Link href="dashboard" className="block py-2 px-4 hover:bg-gray-800">Dashboard</Link>
                </li>
                <li>
                    <Link href="users" className="block py-2 px-4 hover:bg-gray-800">Users</Link>
                </li>
            </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
            <p className="text-xs">&copy; 2024 Dashboard Inc.</p>
        </div>
    </div>
        </>
    )
}