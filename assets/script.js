window.addEventListener('load', () =>
{
    const form = document.querySelector("#new-guest-form");
    const input = document.querySelector("#new-guest-input");
    const list_el = document.querySelector("#allGuests");

    form.addEventListener('submit', (e) => 
    {
        e.preventDefault();

        const name = input.value;

        if (name == "" || input.value.length > 32)
        {
            return 1;
        }

        const name_el = document.createElement('div');
        name_el.classList.add('name');

        const name_content_el = document.createElement('div');
        name_content_el.classList.add('content');

        name_el.appendChild(name_content_el);

        const name_input_el = document.createElement('input');
        name_input_el.classList.add('text');
        name_input_el.type = 'text';
        name_input_el.value = name;
        name_input_el.setAttribute('readonly', 'readonly');
        name_input_el.setAttribute('id', 'guestName');

        name_content_el.appendChild(name_input_el);

        const name_actions_el = document.createElement('div');
        name_actions_el.classList.add('actions');

        const name_edit_el = document.createElement('button');
        name_edit_el.classList.add('edit');
        name_edit_el.classList.add('entryBtn');
        name_edit_el.innerText = 'Edit';

        const name_delete_el = document.createElement('button');
        name_delete_el.classList.add('delete');
        name_delete_el.classList.add('entryBtn');
        name_delete_el.innerText = 'Delete';

        const name_RSVP_el = document.createElement('button');
        name_RSVP_el.classList.add('rsvp');
        name_RSVP_el.classList.add('entryBtn');
        name_RSVP_el.innerText = 'RSVP';

        name_actions_el.appendChild(name_edit_el);
        name_actions_el.appendChild(name_delete_el);
        name_actions_el.appendChild(name_RSVP_el);

        name_el.appendChild(name_actions_el);

        list_el.appendChild(name_el);

        input.value = '';

        name_edit_el.addEventListener('click', (e) => 
        {
            if (name_edit_el.innerText.toLowerCase() == "edit")
            {
                name_edit_el.innerText = "Save";
                name_input_el.removeAttribute("readonly");
                name_input_el.focus();
            }
            else
            {
                name_edit_el.innerText = "Edit";
                name_input_el.setAttribute("readonly", "readonly");
            }
        });

        name_delete_el.addEventListener('click', (e) => 
        {
            list_el.removeChild(name_el);
        });

        name_RSVP_el.addEventListener('click', (e) => 
        {
            list_el.removeChild(name_el);
            //console.log();
            AddToAttendance(name_input_el.value);
        });
    });
});


function AddToAttendance(name)
{
    const attendance_el = document.querySelector("#allAttending");
    const attendance_name = document.createElement('div');
    const attendance_content = document.createElement('div');
    const attendance_entry_el = document.createElement('input');

    const attendance_actions_el = document.createElement('div');
    attendance_actions_el.classList.add('actions');

    const attendance_delete_el = document.createElement('button');
    attendance_delete_el.classList.add('delete');
    attendance_delete_el.classList.add('entryBtn');
    attendance_delete_el.innerText = 'Delete';

    attendance_entry_el.type = 'text';
    attendance_entry_el.value = name;
    attendance_entry_el.setAttribute('readonly', 'readonly');
    attendance_entry_el.setAttribute('id', 'guestName');
    attendance_name.classList.add('name');

    attendance_content.setAttribute('id', 'content');
    attendance_actions_el.setAttribute('id', 'actions');

    attendance_content.appendChild(attendance_entry_el);
    attendance_actions_el.appendChild(attendance_delete_el);
    attendance_name.appendChild(attendance_content);
    attendance_name.appendChild(attendance_actions_el);
    attendance_el.appendChild(attendance_name);

    attendance_delete_el.addEventListener('click', (e) => 
    {
        attendance_el.removeChild(attendance_name);
    });
}



// //Element for name in text area
// var eName = document.getElementById("name");
// //Element for submit button
// var eSubmit = document.querySelector("#submit");

// //Initialize guest array
// var guestArray = [];

// //When submit is clicked run function
// eSubmit.addEventListener("click", function ()
// {
//     //Set flag value 
//     var flag = true;

//     //Check if name in text area is blank or length to big
//     if (eName.value == "" || eName.value.length > 32)
//     {
//         //Set flag to false
//         flag = false;
//     }

//     //Check the guest array length that is greater than zero
//     if (guestArray.length > 0)
//     {
//         //Loop through each guest name in array
//         for (let i = 0; i < guestArray.length; i++)
//         {
//             //Check for any matching names
//             if (eName.value == guestArray[i])
//             {
//                 //Set flag to false for any repeating names
//                 flag = false;
//             }
//         }
//     }
    
//     //Check flag to be true and guest array length is greater than 0
//     if (flag && guestArray.length >= 0)
//     {
//         //Push new name into guest array
//         guestArray.push(eName.value);

//         //Make list item
//         var guest = document.createElement("li");
        
//         //Make p tag element
//         var guestName = document.createElement("p");
//         //Take text from text area
//         var node = document.createTextNode(eName.value);

//         //Set p tag as name
//         guestName.appendChild(node);

//         //Create container div for buttons
//         var container = document.createElement("div");

//         //Create button element
//         var btn1 = document.createElement("button");
//         //Set text for button
//         var btnName1 = document.createTextNode("X");
//         //Add text to button
//         btn1.appendChild(btnName1);

//         //Create button element
//         var btn2 = document.createElement("button");
//         //Set text for button
//         var btnName2 = document.createTextNode("O");
//         //Add text to button
//         btn2.appendChild(btnName2);

//         //Add buttons to container div
//         container.appendChild(btn1);
//         container.appendChild(btn2);

//         //Add p tag to guest list item
//         guest.appendChild(guestName);
//         //Add container with buttons to guest list item
//         guest.appendChild(container);

//         //Add entry class to guest list item
//         guest.classList.add("entry")
//         //Add container class to both p tag and container for two buttons
//         guestName.classList.add("entryContainer");
//         container.classList.add("entryContainer");
        
//         btn1.classList.add("entryBtn");
//         btn2.classList.add("entryBtn");

//         //Create element for unordered list called all
//         var element = document.getElementById("all");
//         //Add list item name to unordered list all
//         element.appendChild(guest);


//     }
// })
