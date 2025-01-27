import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ChatList from './Components/Sidebar/ChatList';
import MainContainer from './Components/MainContainer/MainContainer';
import NotificationsList from './Components/MainContainer/NotificationsList';
import CallsList from './Components/MainContainer/CallsList';
import Logout from './Components/MainContainer/Logout';
import Settings from './Components/MainContainer/Settings';


function App() {
  return (
    <Router>
      <main className="app-container">
        <Navbar />
        <div className="chat-layout">
          <div className="sidebar">
            <ChatList />
          </div>
          
          <div className="main-content">
            <Routes>
              <Route path="/messages/:chatId" element={<MainContainer />} />
              <Route
                path="/messages"
                element={<div className="no-chat">Choose chat</div>}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/calls" element={<CallsList />} />
              <Route path="/notifications" element={<NotificationsList />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
