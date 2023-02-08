fetch("kuis1.json")

.then(function(response){
    return response.json();
})

.then(function(kuisyg1){
    let lihatsoal = document.querySelector("#demo");
    let soal = "";
    for(let kuis1 of kuisyg1){
        soal +=`
            <tr>
                <tr>${kuis1.soal}</tr> 
                <tr>a. ${kuis1.a}</tr> 
                <tr>b. ${kuis1.b}</tr> 
                <tr>c. ${kuis1.c}</tr> 
                <tr>d. ${kuis1.d}</tr>
                <tr>Yg benar: ${kuis1.benar}</tr>  
            </tr>
        `;
    }
    lihatsoal.innerHTML = soal;
})