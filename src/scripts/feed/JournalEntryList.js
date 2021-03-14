import { journalEntry } from "./JournalEntry.js"

export const entryList = (allPosts) => {
    let entryLog = "";
    for (const entryObject of allPosts) {
        entryLog += journalEntry(entryObject);
    }
    return entryLog;
};


///const DOMLocation = document.querySelector("#entryLog")