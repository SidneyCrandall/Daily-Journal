/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return (`
        <section id="entry--${entry.id}" class="journalEntry">
		<h3 class="Entry Title">${entry.concept}</h3>
			<p class="entry-details">Date: ${entry.date}</p>
			<p class="entry-details">concept: ${entry.concept}</p>
			<p class="entry-details">Entry: ${entry.entry}</p>
			<p class="entry-details">Mood ${entry.mood}</p>
	    </article>
    `)
}