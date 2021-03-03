/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
		<h3 class="Entry Title">${entry.concept}</h3>
		<ul>
			<li class="entry-details">Date: ${entry.date}</li>
			<li class="entry-details">concept: ${entry.concept}</li>
			<li class="entry-details">Entry: ${entry.entry}</li>
			<li class="entry-details">Mood ${entry.mood}</li>
		</ul>
	    </article>
    `
}