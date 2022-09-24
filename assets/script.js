var eName = document.getElementById("name");
var eSubmit = document.querySelector("#submit");


eSubmit.addEventListener("click", function ()
{
    console.log(eName.value);
    if (eName.value != "")
    {
        console.log("Click");
        var guest = document.createElement("li");
        var node = document.createTextNode(eName.value);
        guest.appendChild(node);
        var element = document.getElementById("all");
        element.appendChild(guest);
    }
    
})


// //create guest and list item tag
// const guest = document.createElement("li");

// //text from the textarea must be the guests name
// const node = document.createTextNode("This is new.");

// //append to unordered list
// guest.appendChild(node);
// const element = document.getElementById("all");
// element.appendChild(guest);