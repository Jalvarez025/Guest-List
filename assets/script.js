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
    
    //Check flag to be true and textarea value is not blank
    if (flag && eName.value != "" && guestArray.length >= 0)
    {
        //Push new name into guest array
        guestArray.push(eName.value);

        //Make list item
        var guest = document.createElement("li");
        //Take text from text area
        var node = document.createTextNode(eName.value);
        //Set list item to name
        guest.appendChild(node);

        //Create element for unordered list called all
        var element = document.getElementById("all");
        //Add list item name to unordered list all
        element.appendChild(guest);
    }
})
