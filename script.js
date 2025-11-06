// URL Google Apps Script (ganti dengan URL endpoint Anda setelah deploy)
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // Ganti dengan URL asli

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
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