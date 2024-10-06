fetch('https://script.google.com/macros/s/AKfycbxZv-JWM_9sdwtK6UPwgA3EFNa91lauk4No750SWUTW21f1PSF00UyNy4pYWdXmwcwe/exec', {
    method: 'POST',
    body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    headers: {
        'Content-Type': 'application/json'
    }
})
