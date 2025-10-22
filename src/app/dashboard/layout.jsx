'use client';
import Sidebar from "@/app/components/Sidebar";
import MobileSidebar from "@/app/components/MobileSidebar";
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

const DashboardLayout = ({ children }) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    console.log('width:', width, 'isMobile:', isMobile);
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