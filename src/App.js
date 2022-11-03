import './App.css';
import SideBar from './components/sidebar';
import ContentContainer from './components/contentContainer';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;
