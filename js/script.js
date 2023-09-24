// Menangani submit form
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form standar

     // Mengambil nilai dari elemen form
        var namaForm = document.getElementById("namaForm").value;
        var roleForm = document.getElementById("roleForm").value;
        var availabilityForm = document.getElementById("availabilityForm").value;
        var usiaForm = document.getElementById("usiaForm").value;
        var lokasiForm = document.getElementById("lokasiForm").value;
        var pengalamanForm = document.getElementById("pengalamanForm").value;
        var emailForm = document.getElementById("emailForm").value;

    // Memasukkan nilai ke dalam elemen profile
        document.getElementById("namaProfile").textContent = namaForm;
        document.getElementById("roleProfile").textContent = roleForm;
        document.getElementById("availabilityProfile").textContent = availabilityForm;
        document.getElementById("usiaProfile").textContent = usiaForm;
        document.getElementById("lokasiProfile").textContent = lokasiForm;
        document.getElementById("pengalamanProfile").textContent = pengalamanForm;
        document.getElementById("emailProfile").textContent = emailForm;

    // Mengosongkan nilai formulir setelah submit
        document.getElementById("namaForm").value = "";
        document.getElementById("roleForm").value = "";
        document.getElementById("availabilityForm").value = "";
        document.getElementById("usiaForm").value = "";
        document.getElementById("lokasiForm").value = "";
        document.getElementById("pengalamanForm").value = "";
        document.getElementById("emailForm").value = "";
});


    // Fungsi untuk mengedit data pada profil
    function EditData() {
        // Mengambil nilai saat ini dari elemen profil
        var namaProfile = document.getElementById("namaProfile").textContent;
        var roleProfile = document.getElementById("roleProfile").textContent;
        var availabilityProfile = document.getElementById("availabilityProfile").textContent;
        var usiaProfile = document.getElementById("usiaProfile").textContent;
        var lokasiProfile = document.getElementById("lokasiProfile").textContent;
        var pengalamanProfile = document.getElementById("pengalamanProfile").textContent;
        var emailProfile = document.getElementById("emailProfile").textContent;

        // Menampilkan nilai saat ini di dalam elemen form
        document.getElementById("namaForm").value = namaForm;
        document.getElementById("roleForm").value = roleForm;
        document.getElementById("availabilityForm").value = availabilityForm;
        document.getElementById("usiaForm").value = usiaForm;
        document.getElementById("lokasiForm").value = lokasiForm;
        document.getElementById("pengalamanForm").value = pengalamanForm;
        document.getElementById("emailForm").value = emailForm;

        // Mengaktifkan mode edit
        document.getElementById("namaForm").disabled = false;
        document.getElementById("roleForm").disabled = false;
        document.getElementById("availabilityForm").disabled = false;
        document.getElementById("usiaForm").disabled = false;
        document.getElementById("lokasiForm").disabled = false;
        document.getElementById("pengalamanForm").disabled = false;
        document.getElementById("emailForm").disabled = false;
    }
