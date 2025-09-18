import { useState } from 'react';
import './App.css';

// Creating and Nesting Components change
function MyButton() {
  return (
  <button>I'm a Button</button>
  );
}
function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
    </div>
  );
}

// Writing Markup with JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

// Displaying Data
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function Profile() {
  return (
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
  );
}

// Conditional Rendering
function AdminPanel() {
  return <h2>Welcome Admin</h2>;
}


function LoginForm() {
  return <h2>Please log in</h2>;
}


function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
    </div>
  );
}

// Rendering Lists
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
    >
      {product.title}
    </li>
  );


  return <ul>{listItems}</ul>;
}

// Responding to Events
function ClickButton() {
  function handleClick() {
    alert('You clicked me!');
  }


  return <button onClick={handleClick}>Click me</button>;
}

// Updating the Screen / Using Hooks
function CounterButton() {
  const [count, setCount] = useState(0);


  function handleClick() {
    setCount(count + 1);
  }


  return <button onClick={handleClick}>Clicked {count} times</button>;
}


function SeparateCounters() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <CounterButton />
      <CounterButton />
    </div>
  );
}

// Sharing Data Between Components
function SharedButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


function SharedCounterApp() {
  const [count, setCount] = useState(0);


  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1>Counters that update together</h1>
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
    </div>
  );
}

// Main App Component - this is where we combine everything
export default function App() {
  const [showUser, setShowUser] = useState(true);


  return (
    <div>
      <h1>Welcome to my app</h1>


      {/* MyButton: Nesting Components */}
      <MyButton />


      {/* About Page: JSX Example */}
      <AboutPage />


      {/* Displaying User Info with Conditional Rendering */}
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


      {/* Toggle User Info Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={() => setShowUser(!showUser)}>
          Toggle User Info
        </button>
      </div>


      {/* Rendering Lists */}
      <h2>Shopping List</h2>
      <ShoppingList />


      {/* Responding to Events */}
      <h2>Click Event Example</h2>
      <ClickButton />


      {/* Updating the Screen / Using Hooks */}
      <SeparateCounters />


      {/* Sharing Data Between Components */}
      <SharedCounterApp />
    </div>
  );
}



