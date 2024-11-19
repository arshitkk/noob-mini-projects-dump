function ytCard(title, cName, views, timeOfUpload, duration, thumbnail){

if (views > 1000 && views < 1000000){
    views =  views/1000 + "K";
}
else if (views >= 1000000){
    views = views/1000000 + "M";
}
let html = `<div class="card">
<div class="img">
 <img src=${thumbnail}>
 <p class="timestamp">${duration}</p>
</div>
<div class="text">
 <h4>${title}</h4>
 <p>${cName} . ${views} Views . ${timeOfUpload}</p>
</div>
</div>`

document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML +  html;
}




//function call
ytCard("Installing VS Code & How Website works | Sigma Web Development Course - Tutorial #1","CodeWithHarry", 1000000, "1 Year Ago", "69:69", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

ytCard("Installing VS Code & How Website works | Sigma Web Development Course - Tutorial #1","CodeWithHarry", 1000000, "1 Year Ago", "69:69", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

ytCard("Installing VS Code & How Website works | Sigma Web Development Course - Tutorial #1","CodeWithHarry", 1000000, "1 Year Ago", "69:69", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

ytCard("Installing VS Code & How Website works | Sigma Web Development Course - Tutorial #1","CodeWithHarry", 1000000, "1 Year Ago", "69:69", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")