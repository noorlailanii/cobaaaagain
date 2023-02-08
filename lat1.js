    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBF_KGd5CBew2HCO-ZFs3LIte7JE5xuWxw",
    authDomain: "bangunruang-270999.firebaseapp.com",
    databaseURL: "https://bangunruang-270999-default-rtrb.firebaseio.com",
    projectId: "bangunruang-270999",
    storageBucket: "bangunruang-270999.appspot.com",
    messagingSenderId: "733243158000",
    appId: "1:733243158000:web:86a26bd3e3ca74b5b34135",
    measurementId: "G-B725RS3VHF"
    };


    let app = firebase.initializeApp(firebaseConfig);
    let db = firebase.database();
    let isi_kelas = document.getElementById('kelas');
    let isi_sekolah = document.getElementById('sekolah');
    var lanjutsoal = document.getElementById('mulaikuis');
    var selanjutnya2 = document.getElementById('lanjut2');
    var sebelumnya1 = document.getElementById('sebelumnya1');
    var selanjutnya3 = document.getElementById('lanjut3');
    var sebelumnya2 = document.getElementById('sebelumnya2');
    var selanjutnya4 = document.getElementById('lanjut4');
    var sebelumnya3 = document.getElementById('sebelumnya3');
    var selanjutnya5 = document.getElementById('lanjut5');
    var sebelumnya4 = document.getElementById('sebelumnya4');
    var selesai = document.getElementById('selesai');

    lanjutsoal.onclick = function (){
    let isi_nama = document.getElementById('nama').value;
    let isi_kelas = document.getElementById('kelas').value;
    let isi_sekolah = document.getElementById('sekolah').value;

    localStorage.setItem("nama", isi_nama);
    localStorage.setItem("kelas", isi_kelas);
    localStorage.setItem("sekolah", isi_sekolah);

    var element = document.getElementById('soaltampiltampil');
    element.className = element.className.replace(" hilang","")
    document.getElementById('awalan').className += " hilang";
    // document.getElementById('soaltampiltampil').className.replace(' hilang','');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                var data=JSON.parse(xhttp.responseText);
            
                for (let i=0; i<data.length; i++) {
                    let soalIsi = data[i].soal;
                    let opsiA = data[i].a;
                    let opsiB = data[i].b;
                    let opsiC = data[i].c;
                    let opsiD = data[i].d;
                    let jwbanbenar = data[i].benar;


                    let soalTampil = document.querySelectorAll("#soal");
                    soalTampil[i].innerHTML = i+1 + ". " + soalIsi;

                    let a = document.querySelectorAll('#a');
                    a[i].innerHTML = opsiA;
                    
                    let b = document.querySelectorAll('#b');
                    b[i].innerHTML = opsiB;
                    
                    let c = document.querySelectorAll('#c');
                    c[i].innerHTML = opsiC;
                    
                    let d = document.querySelectorAll('#d');
                    d[i].innerHTML = opsiD;

                    document.querySelectorAll('#benar');
                    

                    MathJax.typeset();
                };
        }   

        
    };
    xhttp.open("GET", "kuis1.json", true);
    xhttp.send();
    
    var mulaimenit = 1;
    let time = mulaimenit * 60;

    const tampilwaktu = document.getElementById('waktutampil');
    tampilwaktu.innerHTML = "30 : 00";

    setInterval(countdownnya, 1000);
    function countdownnya(){
        let menit = Math.floor(time / 60);
        let detik = time % 60;

        detik = detik < 10 ? '0' + detik : detik;
        if(menit<10){
        menit = "0"+menit;
        }
        let waktu = `${menit} : ${detik}`;
        tampilwaktu.innerHTML= waktu;
        time--;

        if(time < 0){

        var skor = document.getElementById('bgskor');
        skor.className = skor.className.replace(" hilang","");
        document.getElementById('soaltampiltampil').className += " hilang";
        }
    }

    selanjutnya2.onclick = function () {
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = false;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = true;
    }
    sebelumnya1.onclick = function (){
        document.getElementById("soal-1").hidden = false;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = true;
    }
    selanjutnya3.onclick = function () {
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = false;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = true;
    }
    sebelumnya2.onclick = function (){
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = false;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = true;
    }
    selanjutnya4.onclick = function () {
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = false;
        document.getElementById("soal-5").hidden = true;
    }
    sebelumnya3.onclick = function (){
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = false;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = true;
    }
    selanjutnya5.onclick = function () {
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = true;
        document.getElementById("soal-5").hidden = false;
    }
    sebelumnya4.onclick = function (){
        document.getElementById("soal-1").hidden = true;
        document.getElementById("soal-2").hidden = true;
        document.getElementById("soal-3").hidden = true;
        document.getElementById("soal-4").hidden = false;
        document.getElementById("soal-5").hidden = true;
    } 
}
