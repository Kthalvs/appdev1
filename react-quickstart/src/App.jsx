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
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      
      {/* Display user data */}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}