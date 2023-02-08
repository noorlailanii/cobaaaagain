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
let isi_satu = document.getElementById('jwbn_1');
let isi_dua = document.getElementById('jwbn_2');
let isi_tiga = document.getElementById('jwbn_3');
let isi_empat = document.getElementById('jwbn_4');
let isi_lima = document.getElementById('jwbn_5');

function lanjut1() {
  let isi_nama = document.getElementById('nama').value;
  let isi_kelas = document.getElementById('kelas').value;
  let isi_sekolah = document.getElementById('sekolah').value;

  localStorage.setItem("nama", isi_nama);
  localStorage.setItem("kelas", isi_kelas);
  localStorage.setItem("sekolah", isi_sekolah);

  listsoalkuis1();
  //memasukkan data
  //let data = {
    //nama: isi_nama.value ,
    //kelas: isi_kelas.value,
    //sekolah: isi_sekolah.value
  //}
  //db.ref("kuis1").push(data);
}

function listsoalkuis1(){

  let nosoal = 1;

  function getsoal(url, succes, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
          if(xhr.status === 200){
              success(xhr.response);
          }else if(XPathEvaluator.status === 404){
              error();
          }
      }
  }
  xhr.open('get', url);
  xhr.send();
  }
}
