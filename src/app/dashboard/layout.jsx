'use client';
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

const DashboardLayout = ({ children }) => {
    const { width } = useWindowDimensions();
    if (!width) return null; // Prevent rendering on server side
    const isMobile = width < 768;
    return (
        <div className="w-full flex h-screen bg-gray-100">
            {!isMobile ? <Sidebar /> : <MobileSidebar />}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;