import { useState } from "react";

export default function JournalForm() {
  const [journal, setJournal] = useState("");

  function handleSubmit() {}

  function handleChange(evt) {
    setJournal(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Write your journal"
      />
      <button type="submit">Post</button>
    </form>
  );
}
