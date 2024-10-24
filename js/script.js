function submitName() {
    const name = document.getElementById('nama-pengunjung').value;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Sebelum sembunyikan welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.classList.add('fade-out');

    // Setelah sembunyikan welcome screen
    setTimeout(function () {
        welcomeScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('greeting').innerText = `Welcome, ${name}!`;
    }, 1000);
}

//Slide back next
let indexSlide = 0;

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('photo-banner');

    if (n >= listImage.length ) {
        indexSlide = 0;
    }

    if(n < 0) {
        indexSlide = listImage.length - 1;
    }

    for (let i = 0; i< listImage.length; i++) {
        listImage[i].style.display= 'none'
    }

    listImage [indexSlide].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(indexSlide);
});

function submitForm() {
    // Nilai Formulir
    const name = document.getElementById("name").value;
    if (name == '') {
        alert('Masukin nama dulu ya');
        document.getElementById('name').style.border = '1px solid red';
    } else {
        document.getElementById('name').style.border = '1px solid';
    }

    const dob = document.getElementById("dob").value;
    if (dob == '') {
        alert('Tanggal lahir dong isi');
        document.getElementById('dob').style.border = '1px solid red';
    } else {
        document.getElementById('dob').style.border = '1px solid';
    }

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const message = document.getElementById("message").value;
    if (message == '') {
        alert('Pesannya apa');
        document.getElementById('message').style.border = '1px solid red';
    } else {
        document.getElementById('message').style.border = '1px solid';
    }

    // Menampilkan Waktu Saat Ini
    const munculah = new Date().toLocaleString();
    document.getElementById("munculah").innerText = munculah;

    // Nilai Output Formulir
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputDob").innerText = dob;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputMessage").innerText = message;
}
