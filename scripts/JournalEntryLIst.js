import { getJournal } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const DOMLocation = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournal()
    let entryLog = "";

    for (const entry of entries) {
        entryLog += JournalEntryComponent(entry);
    }

    DOMLocation.innerHTML += entryLog; 
}
