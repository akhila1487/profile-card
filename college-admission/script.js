function showCollegeDetails() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('college-details').classList.remove('hidden');
}

function showAdmissionForm() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('admission-form').classList.remove('hidden');
}

function goBack() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('college-details').classList.add('hidden');
    document.getElementById('admission-form').classList.add('hidden');
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    goBack();
});
