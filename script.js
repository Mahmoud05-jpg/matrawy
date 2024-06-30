var birthdate;
var intervalId;

function calculateAge() {
    var birthdateString = document.getElementById('birthdate').value;
    var birthtimeString = document.getElementById('birthtime').value;

    if (!birthdateString) {
        document.getElementById('result').innerHTML = 'يرجى إدخال تاريخ الميلاد.';
        return;
    }

    birthdate = new Date(birthdateString + 'T' + birthtimeString);
    var today = new Date();

    if (today < birthdate) {
        document.getElementById('result').innerHTML = 'تاريخ الميلاد يجب أن يكون قبل اليوم.';
        return;
    }

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(updateAge, 1000);
    updateAge();  // Call it immediately to show the result right away
}

function updateAge() {
    var today = new Date();
    var ageMilliseconds = today - birthdate;
    var ageSeconds = Math.floor(ageMilliseconds / 1000);

    var seconds = ageSeconds % 60;
    var ageMinutes = Math.floor(ageSeconds / 60);
    var minutes = ageMinutes % 60;
    var ageHours = Math.floor(ageMinutes / 60);
    var hours = ageHours % 24;
    var ageDays = Math.floor(ageHours / 24);
    var days = ageDays % 365;
    var years = Math.floor(ageDays / 365);

    document.getElementById('result').innerHTML = 'عمرك هو: ' +
        years + ' سنة و ' +
        days + ' أيام و ' +
        hours + ' ساعات و ' +
        minutes + ' دقائق و ' +
        seconds + ' ثواني';
}

function updateWhatsAppLink() {
    var text = encodeURIComponent(document.getElementById('message').value);
    var whatsappLink = 'https://api.whatsapp.com/send?phone=+2001104865607&text=' + text;
    document.getElementById('whatsapp-link').setAttribute('href', whatsappLink);
}

function sendMessage() {
    updateWhatsAppLink();
    var whatsappLink = document.getElementById('whatsapp-link').getAttribute('href');
    window.open(whatsappLink, '_blank');
}

function randomizeBirthtime() {
    var hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    var minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    document.getElementById('birthtime').value = hours + ':' + minutes;
}