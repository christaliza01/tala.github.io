function showDatePicker() {
    // Hide the invitation section and show the date picker
    document.getElementById("invitation-section").classList.add("hidden");
    document.getElementById("date-picker").classList.remove("hidden");
}

function declineInvitation() {
    alert("No worries! Maybe next time.");
}

function showRestaurantChoices() {
    const dateTime = document.getElementById("dateTime").value;
    if (!dateTime) {
        alert("Please select a date and time."); // Alert if no date/time is selected
        return;
    }
    // Hide the date picker and show the restaurant choice
    document.getElementById("date-picker").classList.add("hidden");
    document.getElementById("restaurant-choice").classList.remove("hidden");
}

function showFinalMessage() {
    const dateTime = document.getElementById("dateTime").value;
    const restaurant = document.getElementById("restaurant").value;
    const confirmationMessage = `Don't forget on ${new Date(dateTime).toLocaleString()} at ${restaurant}!`;

    // Hide the restaurant choice and show the final message
    document.getElementById("restaurant-choice").classList.add("hidden");
    document.getElementById("final-message").classList.remove("hidden");
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
}
