import { v4 as uuid } from "uuid";
import "./App.css";
import EmojisList from "./apps/EmojisList";

const emojis = [
  { id: uuid(), emoji: "😀" },
  { id: uuid(), emoji: "🥲" },
];

function App() {
  return (
    <div>
      <EmojisList emojis={emojis} />
    </div>
  );
}

export default App;
