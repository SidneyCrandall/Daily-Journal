export const journalEntry = (entryObject) => {
    return `
        <section id="entry--${entryObject.id}" class="post">
		<h3 class="post__items">${entryObject.topic}</h3>
			<p class="post__items">Date: ${entryObject.date}</p>
			<p class="post__items">Entry: ${entryObject.journalEntry}</p>
			<p class="post__items">Mood: ${entryObject.mood}</p>
	    </article>
    `
};