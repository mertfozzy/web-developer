var sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit, incidunt quis similique natus aspernatur, dicta nihil assumenda, vitae quo qui nemo officia aliquam eius libero inventore cumque consequatur sint."

//karakter sayısı
console.log(sentence.length);

//kelime sayısı (boşluklara ayırıp say)
console.log(sentence.trim().split(" ").length);

//Lorem ipsum kısmını cümleden çıkar
var cikacakCumle = "Lorem ipsum ";
console.log(sentence.substr(cikacakCumle.length));

//cümleyi url yap
console.log(sentence.toLowerCase()
                    .replace(/ /g,"-")                    
);  