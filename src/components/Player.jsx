import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setIsEditing(event.target.value);
  }

  let editablePlayerName = <span className="palyer-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">{playerName}</span>
      <button onClick={() => handleClick(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
