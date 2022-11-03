import {BsPlus, BsDownload} from 'react-icons/bs';
import {FaDiscord, FaCompass, FaSmileWink} from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import SideBarIcon from './sidebarIcon';

const SideBar = () => {
    return ( 
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg z-20'>
            <SideBarIcon classed='discord' icon={<FaDiscord size='28' />} text="Direct messages" />
            <span className="w-[36px] h-[2px] ml-[14px] bg-gray-600 rounded-lg"></span>
            <SideBarIcon id='dicord-icon' icon={
                <ReactCountryFlag 
                    className="emojiFlag"
                    countryCode='GB'
                    style={{
                        fontSize: '2.2em'
                    }}
                    aria-label="United Kingdom"
                />
            } text="English" />
            <SideBarIcon id='dicord-icon' icon={
                <ReactCountryFlag 
                    className="emojiFlag"
                    countryCode='DE'
                    style={{
                        fontSize: '2.2em',
                    }}
                    aria-label="Germany"
                />
            } text="German" />
            <SideBarIcon classed='user' icon={<FaSmileWink size='28' />} text="Beki's server" />
            <SideBarIcon icon={<BsPlus size='30' />} text="Add a server" />
            <SideBarIcon icon={<FaCompass size='24' />} text="Explore public servers" />
            <span className="w-[36px] h-[2px] ml-[14px] bg-gray-600 rounded-lg"></span>
            <SideBarIcon icon={<BsDownload size='22' />} text="Download apps" />            
        </div>
     );
};

export default SideBar;