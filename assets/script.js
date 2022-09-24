var eName = document.getElementById("name");
var eSubmit = document.querySelector("#submit");

var guestArray = [];

eSubmit.addEventListener("click", function ()
{
    var flag = true;

    if (guestArray.length > 0)
    {
        for (let i = 0; i < guestArray.length; i++)
        {
            if (eName.value == guestArray[i])
            {
                flag = false;
            }
        }
    }
    
    if (flag && eName.value != "" && guestArray.length >= 0)
    {
        guestArray.push(eName.value);

        var guest = document.createElement("li");
        var node = document.createTextNode(eName.value);
        guest.appendChild(node);

        var element = document.getElementById("all");
        element.appendChild(guest);
    }
})
