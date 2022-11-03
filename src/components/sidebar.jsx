import {BsPlus, BsDownload} from 'react-icons/bs';
import {FaDiscord, FaCompass, FaSmileWink} from 'react-icons/fa';

const SideBar = () => {
    return ( 
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg'>
            <SideBarIcon id='dicord-icon' icon={<FaDiscord size='28' />} />
            <SideBarIcon icon={<FaSmileWink size='28' />} />
            <SideBarIcon icon={<BsPlus size='28' />} />
            <SideBarIcon icon={<FaCompass size='28' />} />
            <SideBarIcon icon={<BsDownload size='28' />} />
        </div>
     );
};

const SideBarIcon = ({ icon, text = 'tooltip...' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default SideBar;