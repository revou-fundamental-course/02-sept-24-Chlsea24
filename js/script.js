function hitung_luas(){
    let alas = document.getElementById("panjang_alas").value;
    let tinggi = document.getElementById("tinggi").value;
    
    if (alas === "" && tinggi === "") {
        document.getElementById('hasil_luas').textContent = "[Kamu belum input angka sama sekali!]";
    } else {
        let hasil = 0.5 * parseInt(alas) * parseInt(tinggi);
        document.getElementById('hasil_luas').textContent = `[Hasilnya adalah ${hasil}]`;
    }
}

function clear_luas_segitiga(){
    // Clear the selected-alasan & selected-pendonor input field
    document.getElementById('panjang_alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil_luas').textContent = '';
    
}