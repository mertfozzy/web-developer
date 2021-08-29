//sayı tahmin oyunu

//tahmin hakkı
var hak  = 5; 
var tahmin,sayac=0;

/*1 ile 10 arsaında random sayı aldık, floor ile yuvarladık ve sıfır çıkmasın diye 1 ekledik */
var sayi = Math.floor((Math.random()*10)+1); 


while (hak>0) {
    
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir sayı gir : "));

    if (sayi == tahmin) {
        console.log("Tebrikler, doğru tahmin.");
        console.log(`${sayac} tahminde bildiniz.`);
        break;
    }
    else if (sayi > tahmin) {
        console.log("Yukarı çık.");
    }
    else{
        console.log("Aşağı in.");
    }

    if (hak ==0) {
        console.log("Kaybettin karşimm. :(");
    }


}