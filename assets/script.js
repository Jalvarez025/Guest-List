//Element for name in text area
var eName = document.getElementById("name");
//Element for submit button
var eSubmit = document.querySelector("#submit");

//Initialize guest array
var guestArray = [];

//When submit is clicked run function
eSubmit.addEventListener("click", function ()
{
    //Set flag value 
    var flag = true;

    //Check if name in text area is blank or length to big
    if (eName.value == "" || eName.value.length > 32)
    {
        //Set flag to false
        flag = false;
    }

    //Check the guest array length that is greater than zero
    if (guestArray.length > 0)
    {
        //Loop through each guest name in array
        for (let i = 0; i < guestArray.length; i++)
        {
            //Check for any matching names
            if (eName.value == guestArray[i])
            {
                //Set flag to false for any repeating names
                flag = false;
            }
        }
    }
    
    //Check flag to be true and guest array length is greater than 0
    if (flag && guestArray.length >= 0)
    {
        //Push new name into guest array
        guestArray.push(eName.value);

        //Make list item
        var guest = document.createElement("li");
        
        //Make p tag element
        var guestName = document.createElement("p");
        //Take text from text area
        var node = document.createTextNode(eName.value);

        //Set p tag as name
        guestName.appendChild(node);

        //Create container div for buttons
        var container = document.createElement("div");

        //Create button element
        var btn1 = document.createElement("button");
        //Set text for button
        var btnName1 = document.createTextNode("X");
        //Add text to button
        btn1.appendChild(btnName1);

        //Create button element
        var btn2 = document.createElement("button");
        //Set text for button
        var btnName2 = document.createTextNode("O");
        //Add text to button
        btn2.appendChild(btnName2);

        //Add buttons to container div
        container.appendChild(btn1);
        container.appendChild(btn2);

        //Add p tag to guest list item
        guest.appendChild(guestName);
        //Add container with buttons to guest list item
        guest.appendChild(container);

        //Add entry class to guest list item
        guest.classList.add("entry")
        //Add container class to both p tag and two buttons
        guestName.classList.add("entryContainer");
        container.classList.add("entryContainer");

        //Create element for unordered list called all
        var element = document.getElementById("all");
        //Add list item name to unordered list all
        element.appendChild(guest);


    }
})
