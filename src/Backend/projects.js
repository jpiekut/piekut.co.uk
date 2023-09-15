const names = [
  "Munch 🍔", 
  "Spoiler Detector",
  "Third Year Project", 
  "College Final Project"
];

const messages = [
  "Mobile application restaurant finder", 
  "Film review spoiler detection program",
  "Electric Vehicle Routing Problem solver", 
  "Stock Control and Business Management System"
];

const technologies = [
"Flutter & Django",
"Python & NumPy",
"Python",
"Java"
];


const getNewsItem = () => {return names.map((name, index) => ({
  id: index,
  title: name,
  message: messages[index],
  technologies: technologies[index]
}));
};

export default {
  "/menu": ["Home", "Profile", "Events", "Clubs"],
  "/news-feed": getNewsItem()
  //"/friends": Array.from({ length: 12 }, getFriend)
};