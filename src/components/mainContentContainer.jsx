import {FaArrowRight, FaUserFriends, FaMobileAlt} from 'react-icons/fa';
import{GiLargePaintBrush} from 'react-icons/gi';
import{BsFillChatSquareDotsFill} from 'react-icons/bs'

const MainContent = () => {
    return ( 
        <div className='flex items-center justify-center bg-gray-700 w-full h-screen'>
            <div className='flex justify-center items-center flex-col bg-gray-600 w-[25rem] h-[30rem] rounded-lg'>
                <header className='w-96 h-32'>
                    <h1 className='text-white font-bold text-4xl w-56 mx-auto'>Welcome to Beki's server</h1>
                    <p className='text-xs text-gray-400'>This is your brand new, shiny server. Here are some steps to help you get started. For more, check out the <a className='text-blue-400' href="/">Getting Started Guide</a></p>
                </header>
                <div className='flex flex-col justify-end w-96 h-[16rem]'>
                    <div className='flex my-1 items-center justify-center bg-gray-800 h-10 rounded-lg w-full py-7'>
                        <span className='h-8 text-pink-500'><FaUserFriends size='28' /></span>
                        <p className='text-xs font-bold ml-3 text-gray-400 w-72 h-max'>Invite your friends</p>
                    
                        <span className='h-max text-gray-400'><FaArrowRight /></span>
                    </div>

                    <div className='flex my-1 items-center justify-center bg-gray-800 h-10 rounded-lg w-full py-7'>
                        <span className='h-8 text-teal-400'><GiLargePaintBrush size='28' /></span>
                        <p className='text-xs font-bold ml-3 text-gray-400 w-72 h-max'>Personalize your server with an icon</p>
                    
                        <span className='h-max text-gray-400'><FaArrowRight /></span>
                    </div>

                    <div className='flex my-1 items-center justify-center bg-gray-800 h-10 rounded-lg w-full py-7'>
                        <span className='h-8 text-blue-400'><BsFillChatSquareDotsFill size='28' /></span>
                        <p className='text-xs font-bold ml-3 text-gray-400 w-72 h-max'>Send your first message</p>
                    
                        <span className='h-max text-gray-400'><FaArrowRight /></span>
                    </div>
                    
                    <div className='flex my-1 items-center justify-center bg-gray-800 h-10 rounded-lg w-full py-7'>
                        <span className='h-8 text-yellow-400'><FaMobileAlt size='28' /></span>
                        <p className='text-xs font-bold ml-3 text-gray-400 w-72 h-max'>Download the Discord app</p>
                    
                        <span className='h-max text-gray-400'><FaArrowRight /></span>
                    </div>
                </div> 
            </div>
        </div>
     );
}
 
export default MainContent;