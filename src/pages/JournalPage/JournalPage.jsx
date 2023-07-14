import JournalCard from "../../components/JournalCard/JournalCard";

export default function JournalPage({ allUserJournals, user }) {
    const journals = allUserJournals.map((journal, idx) => (
        <JournalCard journal={journal} key={idx} />
    ));

    return (
        <main>
            <h1>{user.name}'s Journal</h1>
            <div>{journals}</div>
        </main>
    );
}
