import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ChatList from './Components/Sidebar/ChatList';
import MainContainer from './Components/MainContainer/MainContainer';

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
              <Route path="/settings" element={<h2>Settings</h2>} />
              <Route path="/calls" element={<h2>Calls</h2>} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
