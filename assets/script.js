window.addEventListener('load', () => 
{
    guests = JSON.parse(localStorage.getItem('guests')) || [];
    attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    const nameInput = document.querySelector('#new-guest-input');
    const newGuestForm = document.querySelector('#new-guest-form');

    newGuestForm.addEventListener('submit', e =>
    {
        e.preventDefault();

        const guest = {
            content: nameInput.value
        }

        guests.push(guest);

        localStorage.setItem('guests', JSON.stringify(guests));

        e.target.reset();

        DisplayGuests()
    });

    DisplayGuests()
    AddToAttendance()
});


function DisplayGuests() 
{
    const guestList = document.querySelector('#allGuests');
    guestList.innerHTML = "";

    guests.forEach(guest =>
    {
        const name_el = document.createElement('div');
        name_el.classList.add('name');

        const name_content_el = document.createElement('div');
        name_content_el.classList.add('content');

        name_content_el.innerHTML = `<input id="guestContent" type="text" value="${guest.content}" readonly>`;

        name_el.appendChild(name_content_el);

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

        guestList.appendChild(name_el);

        name_edit_el.addEventListener('click', (e) => 
        {
            const input = name_content_el.querySelector('input');

            if (name_edit_el.innerText.toLowerCase() == "edit")
            {
                name_edit_el.innerText = "Save";
                input.removeAttribute("readonly");
                input.focus();
            }
            else
            {
                name_edit_el.innerText = "Edit";
                input.setAttribute("readonly", "readonly");
                guest.content = input.value;
                localStorage.setItem('guests', JSON.stringify(guests));
                DisplayGuests()
            }
        });

        name_delete_el.addEventListener('click', (e) =>
        {
            guests = guests.filter(t => t != guest);
            localStorage.setItem('guests', JSON.stringify(guests));
            DisplayGuests()
        });

        name_RSVP_el.addEventListener('click', e => {

            const attending = {
                content: guest.content
            }

            attendance.push(attending);

            localStorage.setItem('attendance', JSON.stringify(attendance));

            AddToAttendance()

            guests = guests.filter(t => t != guest);
            localStorage.setItem('guests', JSON.stringify(guests));
            DisplayGuests()
        });
        
    });
}

function AddToAttendance()
{
    const attendance_el = document.querySelector("#allAttending");

    attendance_el.innerHTML = "";

    attendance.forEach(attending => {
        const attendance_name = document.createElement('div');
        const attendance_content = document.createElement('div');

        const attendance_actions_el = document.createElement('div');
        attendance_actions_el.classList.add('actions');

        const attendance_delete_el = document.createElement('button');
        attendance_delete_el.classList.add('delete');
        attendance_delete_el.classList.add('entryBtn');
        attendance_delete_el.innerText = 'Delete';

        attendance_content.innerHTML = `<input id="guestContent" type="text" value="${attending.content}" readonly>`;


        attendance_name.classList.add('name');

        attendance_content.setAttribute('id', 'content');
        attendance_actions_el.setAttribute('id', 'actions');
        attendance_actions_el.appendChild(attendance_delete_el);
        attendance_name.appendChild(attendance_content);
        attendance_name.appendChild(attendance_actions_el);
        attendance_el.appendChild(attendance_name);

        attendance_delete_el.addEventListener('click', (e) => {
            attendance = attendance.filter(t => t != attending);
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