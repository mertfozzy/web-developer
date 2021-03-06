var models = [
    {
        name : "Bmw 418d",
        image : "img/bmw.jpg",
        link : "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"

    },
    {
        name : "Honda City",
        image : "img/honda.jpg",
        link : "http://www.arabalar.com.tr/honda/city/2021/1-5-elegance-cvt"

    },
    {
        name : "Dacia Duster",
        image : "img/dacia.jpg",
        link : "http://www.arabalar.com.tr/dacia/duster/2021/1-0-comfort"

    },
    {
        name : "VW Passat",
        image : "img/passat.jpg",
        link : "http://www.arabalar.com.tr/volkswagen/passat/2021/1-5-business-dsg"

    }
];

var index = 0;
var counter = models.length;

var settings = {
    duration : "2000",
    random : true
};

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(params) {
    
    index--;
    showSlide(index); //azaltma veya artırmadan sonra tekrar indexi çekiyoruz
    console.log(index);

});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(params) {
    
    index++;
    showSlide(index); //azaltma veya artırmadan sonra tekrar indexi çekiyoruz
    console.log(index);

});

function init(set) {
    
    setInterval(function name(params) {
        
        if (set.random) {
            index = Math.floor(Math.random() * counter);
        }else{
            
        }
        showSlide(index);
        console.log(index);

    },set.duration)

}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = counter - 1; //0dan küçük index gelirse son arabaya atıyor
    }
    if (i >= counter) {
        index = 0; //3den büyükse başa atıyor
    }

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-link").setAttribute("href", models[index].link);

}

