let entryCollection = [];

export const useEntryCollection = () => {
    return [...entryCollection];
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(parsedResponse => {
            entryCollection = parsedResponse
            return parsedResponse;
        })
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json())
}

export const deletePost = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getEntries)
}

/*

const journal = [
  {
     id: 1,
     date: "07/24/2025",
     Topic: "HTML & CSS",
     entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
     mood: "Ok"
  },
  {
      id: 2,
      date: "02/18/2021",
      Topic: "GITHUB",
      entry: "We learned about working through a Github workflow.",
      mood: "Stressed"
  },
  {
      id: 3,
      date: "02/14/2021",
      Topic: "SNOW DAY",
      entry: "Happy Birthday to me, we have a Snow Day.",
      mood: "Happy"
  },
  {
      id: 4,
      date: "03/01/2021",
      Topic: "AUTOMATING THE WORLD",
      entry: "Second group project.. I hope this isn't too terrifying.",
      mood: "Anxious"
  }
];

export const getJournal = () => {
    return journal
}*/