import JournalCard from "../../components/JournalCard/JournalCard";

export default function JournalPage({ allUserJournals, user }) {
    const journals = allUserJournals.map((journal, idx) => (
        <JournalCard journal={journal} key={idx} />
    ));

    return (
        <div>
            <h1>{user.name}'s Journal</h1>
            <div>{journals}</div>
        </div>
    );
}
