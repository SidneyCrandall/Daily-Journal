// This is the original data.
const journal = [
  {
     id: 1,
     date: "07/24/2025",
     concept: "HTML & CSS",
     entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
     mood: "Ok"
  },
  {
      id: 2, 
      date: "07/28/2025",
      concept: "Github",
      entry: "We learned about working through a Github workflow.",
      mood: "Stressed"
  },
  {
      id: 3, 
      date: "02/14/2021",
      concept: "Snow Day",
      entry: "Happy Birthday to me, we have a Snow Day.",
      mood: "Happy"
  },
  {
      id: 4,
      date: "03/02/2021",
      concept: "Automated World",
      entry: "Second group project. It was a fun experience.",
      mood: "Sick"
  }
];

export const getJournal = () => {
    return journal
}
