function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
      {/* The && operator: if isPacked is true, the checkmark is rendered. */}
    </li>
  );
}
 
export {Item}