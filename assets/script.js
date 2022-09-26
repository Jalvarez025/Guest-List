//Function when the window loads
window.addEventListener('load', () => 
{
    //Checks local storage for guests and attendance
    guests = JSON.parse(localStorage.getItem('guests')) || [];
    attendance = JSON.parse(localStorage.getItem('attendance')) || [];

    //Create elements from the form and the input
    const nameInput = document.querySelector('#new-guest-input');
    const newGuestForm = document.querySelector('#new-guest-form');

    //Run function when form it submitted
    newGuestForm.addEventListener('submit', e =>
    {
        //Will not clear
        e.preventDefault();

        //Create guest object with a content attribute that will contain the input value
        const guest = {
            content: nameInput.value
        }

        //Push guest object to local storage array for guests
        guests.push(guest);

        //Set local storage for guests
        localStorage.setItem('guests', JSON.stringify(guests));

        //Reset input
        e.target.reset();

        DisplayGuests()
    });

    DisplayGuests()
    AddToAttendance()
});


function DisplayGuests() 
{
    //Create element for the location you want to append guest entries
    const guestList = document.querySelector('#allGuests');

    //Initialize list
    guestList.innerHTML = "";

    //Run for each to display all guest in guests
    guests.forEach(guest =>
    {
        //Create parent div w/ class name
        const name_el = document.createElement('div');
        name_el.classList.add('name');

        //Create content div w/ class content
        const name_content_el = document.createElement('div');
        name_content_el.classList.add('content');

        //Change inner HTML to contain value as the guest content use template literals
        name_content_el.innerHTML = `<input id="guestContent" type="text" value="${guest.content}" readonly>`;

        //Append content to name div
        name_el.appendChild(name_content_el);

        //Create actions div w/ class actions
        const name_actions_el = document.createElement('div');
        name_actions_el.classList.add('actions');

        //Create edit button w/ class edit and entryBtn w/ inner text as Edit
        const name_edit_el = document.createElement('button');
        name_edit_el.classList.add('edit');
        name_edit_el.classList.add('entryBtn');
        name_edit_el.innerText = 'Edit';

        //Create delete button w/ class delete and entryBtn w/ inner text as Delete
        const name_delete_el = document.createElement('button');
        name_delete_el.classList.add('delete');
        name_delete_el.classList.add('entryBtn');
        name_delete_el.innerText = 'Delete';

        //Create RSVP button w/ class rsvp and entryBtn w/ inner text as RSVP
        const name_RSVP_el = document.createElement('button');
        name_RSVP_el.classList.add('rsvp');
        name_RSVP_el.classList.add('entryBtn');
        name_RSVP_el.innerText = 'RSVP';

        //Append buttons to action div
        name_actions_el.appendChild(name_edit_el);
        name_actions_el.appendChild(name_delete_el);
        name_actions_el.appendChild(name_RSVP_el);

        //Append action to name div
        name_el.appendChild(name_actions_el);

        //Append name div to guest list div
        guestList.appendChild(name_el);

        //Add function to edit button
        name_edit_el.addEventListener('click', (e) => 
        {
            //Create input element by selecting the input inside the content div
            const input = name_content_el.querySelector('input');

            
            //Check inner text all lower equals edit
            if (name_edit_el.innerText.toLowerCase() == "edit")
            {
                //First click change inner text to save, remove readonly, focus
                name_edit_el.innerText = "Save";
                input.removeAttribute("readonly");
                input.focus();
            }
            else
            {
                //Second click change inner text to Edit, set readonly
                name_edit_el.innerText = "Edit";
                input.setAttribute("readonly", "readonly");

                //Take guest content and set equal to input value
                guest.content = input.value;
                //Set local storage for guests
                localStorage.setItem('guests', JSON.stringify(guests));
                DisplayGuests()
            }
        });

        //Add function to delete button
        name_delete_el.addEventListener('click', (e) =>
        {
            //Filter function for guests that sets the array to contain all guests but one
            guests = guests.filter(t => t != guest);
            //Set local storage for guests
            localStorage.setItem('guests', JSON.stringify(guests));
            DisplayGuests()
        });

        //Add function to RSVP button
        name_RSVP_el.addEventListener('click', (e) => {

            //Create attending object with a content attribute that will contain the guest content
            const attending = {
                content: guest.content
            }

            //Push attending object to local storage array for attendance
            attendance.push(attending);

            //Set local storage for attendance
            localStorage.setItem('attendance', JSON.stringify(attendance));

            AddToAttendance()

            //Delete guest from guests and reset local storage
            guests = guests.filter(t => t != guest);
            localStorage.setItem('guests', JSON.stringify(guests));
            DisplayGuests()
        });
        
    });
}

function AddToAttendance()
{
    //Create element for the location you want to append attendance entries
    const attendance_el = document.querySelector("#allAttending");

    //Initialize inner HTML
    attendance_el.innerHTML = "";

    //Run for each to display all attending in attendance
    attendance.forEach(attending => {
        //Create name div for attendance
        const attendance_name = document.createElement('div');
        //Create content div w/ id content
        const attendance_content = document.createElement('div');
        attendance_content.setAttribute('id', 'content');

        //Create actions div w/ class actions w/ id actions
        const attendance_actions_el = document.createElement('div');
        attendance_actions_el.classList.add('actions');
        attendance_actions_el.setAttribute('id', 'actions');

        //Create delete button w/ class delete entryBtn w/ inner HTML Delete
        const attendance_delete_el = document.createElement('button');
        attendance_delete_el.classList.add('delete');
        attendance_delete_el.classList.add('entryBtn');
        attendance_delete_el.innerText = 'Delete';

        //Set content inner HTML as input id guestContent type text and value equal to attending content
        attendance_content.innerHTML = `<input id="guestContent" type="text" value="${attending.content}" readonly>`;

        //Add class name to name div
        attendance_name.classList.add('name');

        //Append delete button to actions div
        attendance_actions_el.appendChild(attendance_delete_el);
        //Append content to name div
        attendance_name.appendChild(attendance_content);
        //Append actions to name
        attendance_name.appendChild(attendance_actions_el);
        //Append name to attendance list
        attendance_el.appendChild(attendance_name);

        //Add function to delete button 
        attendance_delete_el.addEventListener('click', (e) => {
            //Filter attending out of attendance
            attendance = attendance.filter(t => t != attending);
            //Set local storage
            localStorage.setItem('attendance', JSON.stringify(attendance));
            AddToAttendance()
        });
    });
}


//Version 2

// window.addEventListener('load', () =>
// {
//     const form = document.querySelector("#new-guest-form");
//     const input = document.querySelector("#new-guest-input");
//     const list_el = document.querySelector("#allGuests");

//     form.addEventListener('submit', (e) => 
//     {
//         e.preventDefault();

//         const name = input.value;

//         if (name == "" || input.value.length > 32)
//         {
//             return 1;
//         }

//         const name_el = document.createElement('div');
//         name_el.classList.add('name');

//         const name_content_el = document.createElement('div');
//         name_content_el.classList.add('content');

//         name_el.appendChild(name_content_el);

//         const name_input_el = document.createElement('input');
//         name_input_el.classList.add('text');
//         name_input_el.type = 'text';
//         name_input_el.value = name;
//         name_input_el.setAttribute('readonly', 'readonly');
//         name_input_el.setAttribute('id', 'guestName');

//         name_content_el.appendChild(name_input_el);

//         const name_actions_el = document.createElement('div');
//         name_actions_el.classList.add('actions');

//         const name_edit_el = document.createElement('button');
//         name_edit_el.classList.add('edit');
//         name_edit_el.classList.add('entryBtn');
//         name_edit_el.innerText = 'Edit';

//         const name_delete_el = document.createElement('button');
//         name_delete_el.classList.add('delete');
//         name_delete_el.classList.add('entryBtn');
//         name_delete_el.innerText = 'Delete';

//         const name_RSVP_el = document.createElement('button');
//         name_RSVP_el.classList.add('rsvp');
//         name_RSVP_el.classList.add('entryBtn');
//         name_RSVP_el.innerText = 'RSVP';

//         name_actions_el.appendChild(name_edit_el);
//         name_actions_el.appendChild(name_delete_el);
//         name_actions_el.appendChild(name_RSVP_el);

//         name_el.appendChild(name_actions_el);

//         list_el.appendChild(name_el);

//         input.value = '';

//         name_edit_el.addEventListener('click', (e) => 
//         {
//             if (name_edit_el.innerText.toLowerCase() == "edit")
//             {
//                 name_edit_el.innerText = "Save";
//                 name_input_el.removeAttribute("readonly");
//                 name_input_el.focus();
//             }
//             else
//             {
//                 name_edit_el.innerText = "Edit";
//                 name_input_el.setAttribute("readonly", "readonly");
//             }
//         });

//         name_delete_el.addEventListener('click', (e) => 
//         {
//             list_el.removeChild(name_el);
//         });

//         name_RSVP_el.addEventListener('click', (e) => 
//         {
//             list_el.removeChild(name_el);
//             //console.log();
//             AddToAttendance(name_input_el.value);
//         });
//     });
// });


// function AddToAttendance(name)
// {
//     const attendance_el = document.querySelector("#allAttending");
//     const attendance_name = document.createElement('div');
//     const attendance_content = document.createElement('div');
//     const attendance_entry_el = document.createElement('input');

//     const attendance_actions_el = document.createElement('div');
//     attendance_actions_el.classList.add('actions');

//     const attendance_delete_el = document.createElement('button');
//     attendance_delete_el.classList.add('delete');
//     attendance_delete_el.classList.add('entryBtn');
//     attendance_delete_el.innerText = 'Delete';

//     attendance_entry_el.type = 'text';
//     attendance_entry_el.value = name;
//     attendance_entry_el.setAttribute('readonly', 'readonly');
//     attendance_entry_el.setAttribute('id', 'guestName');
//     attendance_name.classList.add('name');

//     attendance_content.setAttribute('id', 'content');
//     attendance_actions_el.setAttribute('id', 'actions');

//     attendance_content.appendChild(attendance_entry_el);
//     attendance_actions_el.appendChild(attendance_delete_el);
//     attendance_name.appendChild(attendance_content);
//     attendance_name.appendChild(attendance_actions_el);
//     attendance_el.appendChild(attendance_name);

//     attendance_delete_el.addEventListener('click', (e) => 
//     {
//         attendance_el.removeChild(attendance_name);
//     });
// }