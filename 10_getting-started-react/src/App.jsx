import { useState } from 'react'
import reactLogo from './assets/react.svg'  
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="about-me">
        <h1>About Me</h1>
        <h2>Kathline Joy M. Alvarado</h2>
        <p><strong>Course & Year:</strong> BS Information Systems 3rd Year</p>
        <p><strong>Fun Fact:</strong> I think I’m funny… until I debug at 3AM. 😅</p>
        <p>
          <strong>Why I want to learn React:</strong> I want to learn React because it's widely used in modern web development, and mastering it will help me create dynamic, responsive web applications efficiently. I'm excited to build real-world projects!
        </p>
      </div>
  );
}

export default App;
