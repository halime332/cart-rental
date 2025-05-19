import type { ICar } from "../types";

type ReturnType =[string,string|number|null][];


//car nesnesindeki verilerin sadece ihtiyacı olan kısmını filtreleyip
//diziye çevirip retun eden fonksiyon
const formatData =(car:ICar):ReturnType =>{
    //kabul ettiğimiz değerler
    const accepted =["make",
        "model",
        "cylinders",
        "fueltype",
        "transmission",
        "vclass",
        "year",
        "startstop",
        "co2",
        "displ",
        "atvtype"
    ];



   //diziye çevirme ve filtereleme
  const arrData= Object.entries(car).filter((car)=>accepted.includes(car[0]));
 
 return arrData;
};

export default formatData;