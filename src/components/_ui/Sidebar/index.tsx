import { sidebarLinks } from '@/utils/constants/dashboard';
import SidebarLink from './SidebarLink';
import './style.css'
const Sidebar = () => {
    return (
        <div
            className='bg-base-100 border-primary border rounded-20 rounded-l-none w-3xs pt-4 h-screen overflow-y-scroll hide-scrollbar'
        >
            <div className='px-5'>
                <ul className='menu w-full gap-y-2'>
                    {sidebarLinks.map((item, i) => (
                        <SidebarLink {...item} key={`sidebar-link-${i}`} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
