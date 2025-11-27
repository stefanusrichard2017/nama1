// URL Google Apps Script (ganti dengan URL endpoint Anda setelah deploy)
const scriptURL = 'https://docs.google.com/spreadsheets/d/18TPD38xi7klylnl8W8pKv59_Lbj2iKK1ijHL3Hn3xPY/edit?usp=sharing'; // Ganti dengan URL asli

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

// Buka Lightbox
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

// Tutup Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

    // Ambil data form
    const formData = new FormData(this);
    
    // Untuk upload file, kirim ke Google Drive via Apps Script (pastikan script mendukung)
    // Jika file besar, gunakan library seperti FilePond untuk upload terpisah
    
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Pendaftaran berhasil dikirim!');
        // Reset form
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Coba lagi.');
    });
});