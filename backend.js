const date = new Date(new Date().toLocaleString("en-US", {timeZone: "Pacific/Auckland"}));
const days = [{
        name: "Sunday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: [
            ["hsl(157, 16%, 28%)", "hsl(157, 16%, 70%)"],
            ["hsl(320, 17%, 17%)", "hsl(320, 17%, 70%)"], 
            ["hsl(148, 30%, 46%)", "hsl(148, 30%, 70%)"], 
            ["hsl(90, 18%, 64%)", "hsl(90, 18%, 30%)"], 
            ["hsl(78, 17%, 73%)", "hsl(78, 17%, 30%)"]]
    },
    {
        name: "Monday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: [
            ["hsl(240, 69%, 3%)", "hsl(240, 69%, 70%)"], 
            ["hsl(31, 72%, 65%)", "hsl(31, 72%, 30%)"], 
            ["hsl(51, 58%, 82%)", "hsl(51, 58%, 30%)"], 
            ["hsl(101, 31%, 55%)", "hsl(101, 31%, 30%)"], 
            ["hsl(17, 64%, 52%)", "hsl(17, 64%, 80%)"]]
    },
    {
        name: "Tuesday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: [
            ["hsl(203, 7%, 24%)", "hsl(203, 7%, 70%)"], 
            ["hsl(8, 80%, 56%)", "hsl(8, 80%, 20%)"], 
            ["hsl(65, 43%, 95%)", "hsl(65, 43%, 30%)"], 
            ["hsl(298, 18%, 31%)", "hsl(298, 18%, 70%)"], 
            ["hsl(59, 100%, 60%)", "hsl(59, 100%, 30%)"]]
    },
    {
        name: "Wednesday",
        learning: "",
        projects: "",
        exercise: "",
        other: "",
        pallet: [
            ["hsl(293, 29%, 16%)", "hsl(293, 29%, 70%)"], 
            ["hsl(252, 41%, 34%)", "hsl(252, 41%, 70%)"], 
            ["hsl(200, 39%, 59%)", "hsl(200, 39%, 30%)"], 
            ["hsl(175, 58%, 85%)", "hsl(175, 58%, 30%)"], 
            ["hsl(109, 92%, 95%)", "hsl(109, 92%, 30%)"]]
    },
    {
        name: "Thursday",
        learning: "",
        projects: "start the planner",
        exercise: "park bikeride\n5 pull ups at the bars",
        other: "read book",
        pallet: [
            ["hsl(204, 35%, 22%)", "hsl(204, 35%, 70%)"], 
            ["hsl(244, 9%, 33%)", "hsl(244, 9%, 70%)"], 
            ["hsl(323, 15%, 34%)", "hsl(323, 15%, 70%)"], 
            ["hsl(225, 18%, 59%)", "hsl(225, 18%, 30%)"], 
            ["hsl(203, 57%, 70%)", "hsl(203, 57%, 30%)"]]
    },
    {
        name: "Friday",
        learning: "1 hour maths: natural logarithms\n1 hour physics: kinematics, projectile motion",
        projects: "2 hours working on day planner:\nadd palettes for the other days\nadd an in-website way of changing schedules\nmake sure its supported on phone",
        exercise: "park bikeride\n5 pull ups at the bars",
        other: "read book\ndo some welsh",
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
        pallet: [
            ["hsl(215, 50%, 23%)", "hsl(215, 50%, 70%)"], 
            ["hsl(203, 39%, 44%)", "hsl(203, 39%, 70%)"], 
            ["hsl(182, 43%, 76%)", "hsl(182, 43%, 30%)"], 
            ["hsl(105, 55%, 96%)", "hsl(105, 55%, 20%)"], 
            ["hsl(355, 78%, 56%)", "hsl(355, 78%, 30%)"]]
    }
];
let day = days[date.getDay()];
const data = ["learning", "projects", "exercise", "other"];