document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Get today's date
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Months are zero-based
    const currentYear = today.getFullYear();

    // Calculate age
    let age = currentYear - year;

    // Adjust if the birthday hasn't occurred yet this year
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = `You are ${age} years old.`;
});
