// 5 araç bilgisi oluştur

var automobile = [
    {
        id: "bmw116d_1234",
        model: "116d",
        year: "2015",
        color: "white",
        service_records:
            [
                {
                    id: "bmw116d_1234_1",
                    date: "30.01.2016",
                    km: 13000,
                    price: 900,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 300
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 300
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            }
                        ]
                },//bmw1
                {
                    id: "bmw116d_1234_2",
                    date: "10.01.2017",
                    km: 28000,
                    price: 1800,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 350
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 350
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            },
                            {
                                id: "islem4",
                                description: "balata revision",
                                price: 800
                            }
                        ]
                },//bmw2
            ]//service records of bmw
    }, //end of bmw116
    {
        id: "bmw118i_1234",
        model: "118i",
        year: "2015",
        color: "white",
        service_records:
            [
                {
                    id: "bmw118i_1234_1",
                    date: "30.01.2016",
                    km: 13000,
                    price: 900,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 300
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 300
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            }
                        ]
                },//bmw1
                {
                    id: "bmw118i_1234_2",
                    date: "10.01.2017",
                    km: 28000,
                    price: 1800,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 350
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 350
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            },
                            {
                                id: "islem4",
                                description: "balata revision",
                                price: 800
                            }
                        ]
                },//bmw2
            ]//service records of bmw
    }, //end of bmw118
    {
        id: "nissanqashqai_1234",
        model: "qashqai",
        year: "2015",
        color: "white",
        service_records:
            [
                {
                    id: "nissanqashqai_1234_1",
                    date: "30.01.2016",
                    km: 13000,
                    price: 900,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 300
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 300
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            }
                        ]
                },//nissan1
                {
                    id: "nissanqashqai_1234_2",
                    date: "10.01.2017",
                    km: 28000,
                    price: 1800,
                    details:
                        [
                            {
                                id: "islem1",
                                description: "oil revision",
                                price: 350
                            },
                            {
                                id: "islem2",
                                description: "filter revision",
                                price: 350
                            },
                            {
                                id: "islem3",
                                description: "brake revision",
                                price: 300
                            },
                            {
                                id: "islem4",
                                description: "balata revision",
                                price: 800
                            }
                        ]
                },//nissan2
            ]//service records of nissan
    } //end of nissan qashqai
];

console.log(automobile[0]); //116d bilgileri
console.log(automobile[1]); //118i bilgileri
console.log(automobile[2]); //qashqai bilgileri


//qashqai bilgileri
console.log(automobile[2].id);
console.log(automobile[2].model);
console.log(automobile[2].service_records[0].details);
console.log(automobile[2].service_records[0].price);
console.log(automobile[2].year);
