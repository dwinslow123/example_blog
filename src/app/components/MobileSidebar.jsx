import Link from "next/link";
import HomeImg from "../../../public/home.svg";
import PencilImg from "../../../public/pencil.svg";
import LoginImg from "../../../public/login.svg";
import LogoutImg from "../../../public/logout.svg";

const MobileSidebar = () => {
    const isLoggedIn = false; // Replace with actual authentication logic
    return (
        <div className="flex flex-col justify-between p-4 bg-white shadow-md">
            <ul>
                <li className="w-12 h-12 flex justify-center items-center"><Link href="/dashboard"><HomeImg width={24} height={24} /></Link></li>
                <li className="w-12 h-12 flex justify-center items-center"><Link href="/dashboard/create"><PencilImg width={24} height={24} /></Link></li>
            </ul>
            <div className="w-12 h-12 flex justify-center items-center">{isLoggedIn ? <Link href="/profile"><LoginImg width={24} height={24} /></Link> : <Link href="/login"><LogoutImg width={24} height={24} /></Link>}</div>
        </div>
    );
};

export default MobileSidebar;