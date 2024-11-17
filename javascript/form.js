let registrationParticipants = [];
const form = document.getElementById('form');
const participantsList = document.getElementById('participantsList');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    let name = document.getElementById('name').value;

    // Add email to the array
    registrationParticipants.push(name);
    console.log(registrationParticipants);

    // Display the updated participant list
    displayParticipants();

    form.reset();
});

function displayParticipants() {
    participantsList.innerHTML = '';

    registrationParticipants.forEach((participant, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${participant}`;
        participantsList.appendChild(listItem);
    });
}
