const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
    padding: '20px'
  }
};

export default function App() {
  return (
    <div style={person.theme}>
      <h2>More fun with JavaScript objects and curly braces</h2>
      <h1>{person.name}'s Todos</h1>

      <img
        className="avatar"
        src={person.imageUrl}
        alt={person.name}
      />

      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

