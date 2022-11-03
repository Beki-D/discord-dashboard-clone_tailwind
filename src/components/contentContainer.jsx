import TopNavigation from './topNavigation';
import MainContent from './mainContentContainer';

const ContentContainer = () => {
    return ( 
        <div className='content-container w-full h-full bg-gray-700 z-0'>
            <TopNavigation />
            <MainContent />
        </div>
     );
}

export default ContentContainer;