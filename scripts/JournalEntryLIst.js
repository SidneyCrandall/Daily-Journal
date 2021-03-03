/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const DOMLocation = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()
    let entryLog= "";

    for (const entry of entries) {
        entryLog +=JournalEntryComponent(entry);
    }

    DOMLocation.innerHTML +=entryLog; 
}

        /*
            Invoke the component that returns an
            HTML representation of2 a single entry
        */