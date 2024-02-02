import { useState } from "react";
import { v4 as uuid } from "uuid";

const emojiCollection = ["👈🏻", "🥵", "💦", "🤰🏻"];

export default function EmojisList({ emojis }) {
  const [emo, setEmo] = useState(emojis);

  function handleAdd() {
    setEmo([
      ...emo,
      { id: uuid(), emoji: emojiCollection[Math.floor(Math.random() * 5)] },
    ]);
  }

  function handleDelete(id) {
    setEmo(emo.filter((e) => e.id != id));
  }

  return (
    <div>
      {emo.map((e) => (
        <span
          onClick={() => handleDelete(e.id)}
          key={e.id}
          style={{ cursor: "pointer", fontSize: "3rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <br />
      <button onClick={handleAdd}>Add!</button>
    </div>
  );
}
