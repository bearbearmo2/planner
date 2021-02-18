const date = new Date();
const days = [{
        name: "Sunday",
        learning: "",
        projects: "",
        exercise: "",
        other: ""
    },
    {
        name: "Monday",
        learning: "",
        projects: "",
        exercise: "",
        other: ""
    },
    {
        name: "Tuesday",
        learning: "",
        projects: "",
        exercise: "",
        other: ""
    },
    {
        name: "Wednesday",
        learning: "",
        projects: "",
        exercise: "",
        other: ""
    },
    {
        name: "Thursday",
        learning: "stuff",
        projects: "this",
        exercise: "you did it",
        other: "i dunno",
        pallet: [
            ["hsl(204, 35%, 22%)", "hsl(204, 35%, 70%)"], 
            ["hsl(244, 9%, 33%)", "hsl(244, 9%, 70%)"], 
            ["hsl(323, 15%, 34%)", "hsl(323, 15%, 70%)"], 
            ["hsl(225, 18%, 59%)", "hsl(225, 18%, 30%)"], 
            ["hsl(203, 57%, 70%)", "hsl(203, 57%, 30%)"]]
    },
    {
        name: "Friday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: [
            ["hsl(162, 20%, 30%)", "hsl(162, 20%, 70%)"], 
            ["hsl(162, 53%, 67%)", "hsl(162, 53%, 30%)"], 
            ["hsl(161, 94%, 81%)", "hsl(161, 94%, 30%)"], 
            ["hsl(33, 94%, 81%)", "hsl(33, 94%, 30%)"], 
            ["hsl(28, 96%, 69%)", "hsl(28, 96%, 30%)"]]
    },
    {
        name: "Saturday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: []
    }
];
const day = days[date.getDay()];
const data = ["learning", "projects", "exercise", "other"];