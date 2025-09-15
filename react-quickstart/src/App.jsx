import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// User data
const user = {
  name: 'Ada Lovelace',
  imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
  imageSize: 100,
};

// Button component
function MyButton() {
  return (
  <button>I'm a Button</button>
  );
}

// About component
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
 
// Main App component - this is where you combine everything
export default function App() {
  const [showUser, setShowUser] = useState(true);

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      
     {/* Conditional rendering example */}
      {showUser ? (
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
        </>
      ) : (
        <p>User info is hidden.</p>
      )}

      {/* Center Toggle Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}></div>
      <button onClick={() => setShowUser(!showUser)}>
        Toggle User Info
      </button>
    </div>
  );
} 

