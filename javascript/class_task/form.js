let registrationParticipants = [];
const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const password = document.getElementById('password');
const participantsList = document.getElementById('participantsList');
const validationMessage = document.createElement('p');
validationMessage.id = 'validationMessage';
form.appendChild(validationMessage);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();

    // Validate the name input
    if (validate(name)) {
        // Add name to the array if validation passes
        registrationParticipants.push(name);
        console.log(registrationParticipants);

        // Display the updated participant list
        displayParticipants();

        // Clear the form and validation message
        form.reset();
        validationMessage.textContent = '';
    }
});

function displayParticipants() {
    participantsList.innerHTML = '';

    registrationParticipants.forEach((participant) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${participant}`;
        participantsList.appendChild(listItem);
    });
}



    form.addEventListener('mouseenter', () => {
        form.style.background = 'lightblue';
    })
    form.addEventListener('mouseleave', () => {
        form.style.background = '';
    })


function validate(name) {
    if (name === '') {
        validationMessage.textContent = 'Name cannot be empty';
        validationMessage.style.color = 'red';
        return false;
    } else {
        validationMessage.textContent = '';
        return true;
    }
}