/* try dynamic
document.addEventListener('DOMContentLoaded', function() {
    const btnSegitiga = document.getElementById('btnSegitiga');
    const btnJajargenjang = document.getElementById('btnJajargenjang');
    const segitigaSection = document.getElementById('segitigaSection');
    const jajargenjangSection = document.getElementById('jajargenjangSection');

    if (btnSegitiga && btnJajargenjang && segitigaSection && jajargenjangSection) {
        btnSegitiga.addEventListener('click', function() {
            segitigaSection.classList.remove('d-none');
            jajargenjangSection.classList.add('d-none');
        });

        btnJajargenjang.addEventListener('click', function() {
            jajargenjangSection.classList.remove('d-none');
            segitigaSection.classList.add('d-none');
        });
    } else {
        console.error('One or more elements not found.');
    }
}); */

// Fungsi Aritmatik
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