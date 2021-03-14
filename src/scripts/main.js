import { createPost, getEntries, useEntryCollection } from "./feed/JournalData.js";
import { PostEntry } from "./feed/JournalPost.js";
import { entryList } from "./feed/JournalEntryList.js";
import { journalEntry } from "./feed/JournalEntry.js";


const applicationElement = document.querySelector("main");

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        const topic = document.querySelector("input[name='postTopicOfDay']").value
        const mood = document.querySelector("input[name='postMood']").value
        const date = document.querySelector("input[name='postDate']").value
        const journalEntry = document.querySelector("textarea[name='postEntry']").value
        const postObject = {
            topic: topic,
            date: date,
            mood: mood,
            journalEntry: journalEntry,
            userID: 1
        }
        createPost(postObject)
    }
});

const showJournalEntry = () => {
    const entryElement = document.querySelector(".entries");
    entryElement.innerHTML = PostEntry();
}

const showPosts = () => {
    const postElement = document.querySelector("#entryLog")
    getEntries().then((allPosts) => {
        postElement.innerHTML = entryList(allPosts);
    })
}


const startJournal = () => {
    showPosts();
    showJournalEntry();
}

startJournal();