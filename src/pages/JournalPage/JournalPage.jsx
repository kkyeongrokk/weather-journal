import JournalCard from "../../components/JournalCard/JournalCard";
import * as journalsAPI from "../../utilities/journals-api";

export default function JournalPage({
    allUserJournals,
    setAllUserJournals,
    user,
}) {
    const journals = allUserJournals.map((journal, idx) => (
        <JournalCard
            journal={journal}
            setAllUserJournals={setAllUserJournals}
            key={journal._id}
        />
    ));

    return (
        <main>
            <h1>{user.name}'s Journal</h1>
            {journals}
        </main>
    );
}
