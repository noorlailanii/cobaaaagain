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

  // var group = document.getElementsByName("jawaban");

  // var cobawarna = document.getElementById('nomor1');
  //       for (var i=0; i<group.length; i++) {
  //           if (group[i].checked) 
  //           cobawarna.className = cobawarna.className.replace(" belum"," sudah");
  //           alert("kamu memilih "+group[i].value)
  //       }
  
  const mulaimenit = 30;
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
      clearInterval();

      var skor = document.getElementById('bgskor');
      skor.className = skor.className.replace(" hilang","");
      document.getElementById('soaltampiltampil').className += " hilang";
    }
  }

  var jawaban = document.querySelectorAll(".jawaban");
  console.log(jawaban);

//   var soalnih = document.querySelectorAll(".jawaban");
//   for (var x=0; x<soalnih.length;  x++){
//     soalnih[x].addEventListener('click', function(){
//       var pilih = document.querySelectorAll(".bg_pilihan input");
//       for (var y=0; y<pilih.length;y++){
//         pilih[y].addEventListener('click',  function(){
//           var nomor = document.getElementsByClassName(".soall");
//           nomor[y].className  = nomor[y].className.replace(" belum"," sudah");
//           // var textBox = document.getElementById("textbox");
//           // textBox.innerHTML = "km mengklik"+ nomor;
//     }) 
//   }
// });
    // soalnih[x].addEventListener('click', function(){
    //   let pilih =  document.querySelectorAll(".bg_pilihan input");
    //   for (let y=0; y<pilih.length;y++){
    //     pilih[y].addEventListener('click',  function(){
    //       let nomor = document.querySelectorAll(".nomor");
    //       nomor[y].className  = nomor[y].className.replace(" belum"," sudah");
    //     })
    //   }
    // })
  //}
  
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
  // set waktu 30 menit (300000 = 30 menit)
//   setTimeout(function(){
//     //console.log('oke');
//     var skor = document.getElementById('skor');
//     skor.className = skor.className.replace(" hilang","");
//     document.getElementById('soaltampiltampil').className += " hilang";
//   }, 300000);

}

function cekkunci(){
  
}
window.onclick = function(){
  var group = document.jawabsatu.jawabansatu;
  let skor1 = 0;
  
  // var cobawarna = document.querySelectorAll("#nomor");
  // for (var i=0; i<group.length; i++) {
  //   if (group[i].checked) {
  //     for (var y=0; y<group.length;y++){
  //       // console.log(group[i].value);
  //       cobawarna.className = cobawarna.className.replace(" belum"," sudah");
  //       }

  //     }



  // var group2 = document.jawabdua.jawabandua;
  
  // var cobawarna2 = document.getElementById("nomor2");
  // for (var i=0; i<group2.length; i++) {
  //   if (group2[i].checked) {
  //     for (var y=0; y<group2.length;y++){
  //       // console.log(group[i].value);
  //       cobawarna2.className = cobawarna2.className.replace(" belum"," sudah");
  //       }

  //     }
  // }

  // var group3 = document.jawabtiga.jawabantiga;
  
  // var cobawarna3 = document.getElementById("nomor3");
  // for (var i=0; i<group3.length; i++) {
  //   if (group3[i].checked) {
  //     for (var y=0; y<group3.length;y++){
  //       // console.log(group[i].value);
  //       cobawarna3.className = cobawarna3.className.replace(" belum"," sudah");
  //       }

  //     }
  // }

  // var group4 = document.jawabempat.jawabanempat;
  
  // var cobawarna4 = document.getElementById("nomor4");
  // for (var i=0; i<group4.length; i++) {
  //   if (group4[i].checked) {
  //     for (var y=0; y<group4.length;y++){
  //       // console.log(group[i].value);
  //       cobawarna4.className = cobawarna4.className.replace(" belum"," sudah");
  //       }

  //     }
  // }

  // var group5 = document.jawablima.jawabanlima;
  
  // var cobawarna5 = document.getElementById("nomor5");
  // for (var i=0; i<group5.length; i++) {
  //   if (group5[i].checked) {
  //     for (var y=0; y<group5.length;y++){
  //       // console.log(group[i].value);
  //       cobawarna5.className = cobawarna5.className.replace(" belum"," sudah");
  //       }

  //     }
  // }
}
       
//   // var group = document.getElementsByName("jawaban")

//   // var cobawarna = document.getElementById('nomor1');
//   //       for (var i=0; i<group.length; i++) {
//   //           if (group[i].checked) 
//   //           cobawarna.className = cobawarna.className.replace(" belum"," sudah");
//   //           alert("kamu memilih "+group[i].value)
//   //       } 
// }
   
// let soalnih  = document.querySelectorAll(".bgsoal");
// let  nomorsoal =  document.querySelectorAll(".soalsoall");
// for (let x=0; x<soalnih.length;  x++){
//   soalnih[x].addEventListener('click',function(){
//     let pilih = document.querySelectorAll('.');
//     for (let y=0; y<pilih.length;y++){
//       pilih[y].addEventListener('click',  function(){
//         nomorsoal[y].className  = nomorsoal[y].className.replace(" belum"," sudah");
//       })
//     }
//   })
// }
  // document.getElementById('nomor1').className += " sudah";
  // var group = document.jawabsatu.jawabansatu;
  // var cobawarna = document.getElementById('nomor1');
  //       for (var i=0; i<group.length; i++) {
  //           if (group[i].checked) 
  //           cobawarna.className = cobawarna.className.replace(" belum"," sudah");
  //       }  

  selesai.addEventListener('click', ()=>{

    var skor = document.getElementById('skor');
    skor.className = skor.className.replace(" hilang","");
    document.getElementById('soaltampiltampil').className += " hilang";

    clearInterval();

    let hari_ini = new Date();

    let tahun = hari_ini.getFullYear();
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    let bulan = hari_ini.getMonth() + 1;
    var namahari = ("Senin Selasa Rabu Kamis Jumat Sabtu Minggu");
    namahari = namahari.split(" ");
    let hari = hari_ini.getDay() -  1;
    let tanggal = hari_ini.getDate().toString();
    let jam =  hari_ini.getHours().toString();
    let menit = hari_ini.getMinutes().toString();
    let detik = hari_ini.getSeconds().toString();

    console.log(`${namahari[hari]}, ${tanggal}/${bulan}/${tahun} ${jam}:${menit}:${detik}`);

  });