import { Menu } from '@/components/_icons';
import Sidebar from '../Sidebar';
const Drawer = () => {
    return (
        <div className='lg:hidden'>
            <div className='drawer'>
                <input
                    id='app-drawer'
                    type='checkbox'
                    className='drawer-toggle'
                />
                <div className='drawer-content'>
                    <label
                        htmlFor='app-drawer'
                        className='btn btn-sm btn-circle btn-ghost'
                    >
                        <Menu />
                    </label>
                </div>
                <div className='drawer-side'>
                    <label
                        htmlFor='app-drawer'
                        aria-label='close sidebar'
                        className='drawer-overlay'
                    ></label>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Drawer;
