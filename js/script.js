// try dynamic
document.addEventListener('DOMContentLoaded', function() {
    const btnSegitiga = document.getElementById('btnSegitiga');
    const segitigaSection = document.getElementById('segitigaSection');
    const btnJajargenjang = document.getElementById('btnJajargenjang');
    const jajargenjangSection = document.getElementById('jajargenjangSection');
    const backToTopSection = document.getElementById('backToTopSection');


    btnSegitiga.addEventListener('click', function() {
        segitigaSection.style.display = "block";  
        this.classList.add('bg-merah200');
             
        backToTopSection.style.display = "block";

        btnJajargenjang.classList.remove('bg-merah200'); 
        jajargenjangSection.style.display = "none";
    });

    btnJajargenjang.addEventListener('click', function() {
        jajargenjangSection.style.display = "block";
        this.classList.add('bg-merah200');

        backToTopSection.style.display = "block";

        btnSegitiga.classList.remove('bg-merah200');
        segitigaSection.style.display = "none";
    });
});

// back to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

// Fungsi Aritmatik : SEGITIGA
function hitung_keliling_segitiga(){
    let sisi1 = document.getElementById("panjang1").value;
    let sisi2 = document.getElementById("panjang2").value;
    let sisi3 = document.getElementById("panjang3").value;

    if (sisi1 === "" || sisi2 === "" || sisi3 === "") {
        document.getElementById('hasil_keliling').textContent = "[Kamu belum input semua angkanya!]";
    } else {
        let hasil =parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
        document.getElementById('hasil_keliling').textContent = `[Hasilnya adalah ${hasil}]`;
    }
}

function clear_keliling_segitiga(){
    document.getElementById('panjang1').value = '';
    document.getElementById('panjang2').value = '';
    document.getElementById('panjang3').value = '';
    document.getElementById('hasil_keliling').textContent = ''; 
}

function hitung_luas_segitiga(){
    let alas = document.getElementById("panjang_alas").value;
    let tinggi = document.getElementById("tinggi").value;
    
    if (alas === "" || tinggi === "") {
        document.getElementById('hasil_luas').textContent = "[Kamu belum input semua angkanya!]";
    } else {
        let hasil = 0.5 * parseInt(alas) * parseInt(tinggi);
        document.getElementById('hasil_luas').textContent = `[Hasilnya adalah ${hasil}]`;
    }
}

function clear_luas_segitiga(){
    document.getElementById('panjang_alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil_luas').textContent = ''; 
}

// Fungsi Aritmatik : Jajargenjang
function hitung_keliling_jajargenjang(){
    let sisi1 = document.getElementById("p_jajar1").value;
    let sisi2 = document.getElementById("p_jajar2").value;

    if (sisi1 === "" || sisi2 === "") {
        document.getElementById('hasil_keliling_jajar').textContent = "[Kamu belum input semua angkanya!]";
    } else {
        let hasil_basic = parseInt(sisi1) + parseInt(sisi2);
        let hasil = 2 * hasil_basic;
        document.getElementById('hasil_keliling_jajar').textContent = `[Hasilnya adalah ${hasil}]`;
    }
}

function clear_keliling_jajargenjang(){
    document.getElementById('p_jajar1').value = '';
    document.getElementById('p_jajar2').value = '';
    document.getElementById('hasil_keliling_jajar').textContent = ''; 
}

function hitung_luas_jajargenjang(){
    let alas = document.getElementById("alas_jajar").value;
    let tinggi = document.getElementById("tinggi_jajar").value;
    
    if (alas === "" || tinggi === "") {
        document.getElementById('hasil_luas_jajar').textContent = "[Kamu belum input semua angkanya!]";
    } else {
        let hasil = parseInt(alas) * parseInt(tinggi);
        document.getElementById('hasil_luas_jajar').textContent = `[Hasilnya adalah ${hasil}]`;
    }
}

function clear_luas_jajargenjang(){
    document.getElementById('alas_jajar').value = '';
    document.getElementById('tinggi_jajar').value = '';
    document.getElementById('hasil_luas_jajar').textContent = ''; 
}