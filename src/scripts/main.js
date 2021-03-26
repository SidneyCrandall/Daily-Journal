import { entryList } from "./feed/JournalEntryList.js"
import { getEntries, createPost, useEntryCollection, deletePost } from "./feed/JournalData.js"
import { journalEntry } from "./feed/JournalEntry.js";
import { PostEntry } from "./feed/JournalPost.js";


const applicationElement = document.querySelector("main");
// const search = document.querySelector("main");
// These all may need. value added back into them to read their inputed value?

applicationElement.addEventListener("keypress", event => {
    if (event.target.id === "search") {
        const dateSelected = (event.target.value)
        console.log(`User wants to view entries authored on: ${dateSelected}`)
        showdateFilteredPosts(dateSelected);
    }
});

const showdateFilteredPosts = (dateSelected) => {
    const filteredbyDate = useEntryCollection().filter(singlePost => {
        if (singlePost.date === dateSelected) {
            return singlePost
        }
    })
    const filterElement = document.querySelector("#entryLog");
    filterElement.innerHTML = entryList(filteredbyDate);
}

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
            userID: 1,
        }
        createPost(postObject)
    }
});

applicationElement.addEventListener("change", event => {
    if (event.target.id === "filteredmoodButton") {
        const moodType = (event.target.value)
        console.log(`User wants to view when the author was feeling ${moodType}`)
        showFilteredPosts(moodType);
    }
    else if (event.target.id === "All") {
        showjournalEntry();
    }
});

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
        const entryId = event.target.id.split("__")[1];
        deletePost(entryId)
            .then(response => {
                entryList();
            })
    }
})

const showFilteredPosts = (moodType) => {
    const filteredData = useEntryCollection().filter(singlePost => {
        if (singlePost.mood === moodType) {
            return singlePost
        }
    })
    const filterElement = document.querySelector("#entryLog");
    filterElement.innerHTML = entryList(filteredData);
}


const showjournalEntry = () => {
    const entryElement = document.querySelector(".entries");
    //getEntries().then((allPosts) =>{
    entryElement.innerHTML = PostEntry();
}

const showPosts = () => {
    const postElement = document.querySelector("#entryLog");
    getEntries().then((allPosts) => {
        postElement.innerHTML = entryList(allPosts);
    })
}


const startJournal = () => {
    showPosts();
    showjournalEntry();
    //showfilterEntry();
    showFilteredPosts()
    showdateFilteredPosts();
    //makePost();
}

startJournal();