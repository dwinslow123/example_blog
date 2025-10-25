import Link from "next/link";
import HomeImg from "../../../public/home.svg";
import PencilImg from "../../../public/pencil.svg";
import LoginImg from "../../../public/login.svg";
// import LogoutImg from "../../../public/logout.svg";

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-50 bg-white p-4 justify-between shadow-md">
            <nav className="flex flex-col space-y-4">
                <ul className="space-y-2">
                    <Link className="text-gray-600 font-semibold h-10 flex items-center justify-between hover:bg-gray-800 hover:text-white hover:fill-white rounded-lg p-6" href="/dashboard">
                        <li className="flex items-center gap-2 hover:text-white">
                            <HomeImg width={18} height={18} /> Home
                        </li>
                    </Link>
                    <Link className="text-gray-600 font-semibold h-10 flex items-center justify-between hover:bg-gray-800 hover:text-white hover:fill-white rounded-lg p-6" href="/dashboard/create">
                        <li className="flex items-center gap-2 hover:text-white">
                            <PencilImg width={18} height={18} />
                            Create Post
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className="mt-4">
                <button className="w-full text-gray-600 font-semibold h-10 flex items-center gap-2 hover:bg-gray-800 hover:text-white hover:fill-white rounded-lg p-6">
                    <LoginImg width={30} height={30} />
                    Log In
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;