export const JournalEntryComponent = (entry) => {
    return (
		`
        <section id="entry--${entry.id}" class="journalEntry">
		<h3 class="journal-Title">${entry.Topic}</h3>
			<p class="entry-items">Date: ${entry.date}</p>
			<p class="entry-items">Entry: ${entry.entry}</p>
			<p class="entry-items">Mood: ${entry.mood}</p>
	    </article>
    `
	)
}