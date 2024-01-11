const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>Bag Packers 🏝 </h1>
    </div>
  );
}
function Form() {
  return (
    <div>
      <h3 className="add-form">What do you need for your trip ? 👜🎒</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity}
        {item.description}
      </span>
    </li>
  );
}

function Stats() {
  return (
    <em>
      <footer className="stats">
        You have x items in your list and you have packed y items.
      </footer>
    </em>
  );
}
