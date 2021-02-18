const header = document.getElementById("day");
const contents = document.getElementById("contents");
const containers = document.getElementsByClassName("subcontainer");

header.innerText = day.name;

for(let d of data){
    document.getElementById(d).innerText = day[d];
}

for(let i = 0; i < containers.length; i++){
    containers[i].style["border-color"] = day.pallet[i+1][0];
    containers[i].style["background-color"] = day.pallet[i+1][0];
    containers[i].getElementsByClassName("subheading")[0].style["color"] = day.pallet[i+1][1];
    containers[i].getElementsByClassName("info")[0].style["color"] = day.pallet[i+1][1];
}

document.body.style["background-color"] = day.pallet[0][0]
document.body.style["color"] = day.pallet[0][1]
document.querySelector('meta[name="theme-color"]').setAttribute('content',  day.pallet[0][0]);

let buttons = {};

function pressed(button){
    if(buttons[button.id]){
        button.style["background-color"] = "white";
        delete buttons[button.id];
    }
    else{
        button.style["background-color"] = "hsl(205, 57%, 9%)";
        buttons[button.id] = true;
    }
}