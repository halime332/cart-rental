import type { ICar } from "../types";

type FetchCarsReturn ={
    total_count:number;
    results:ICar[];
};

type Filter={
    make?:string;
    model?:string;
    year?:string;
}
//Asenkron fonksiyonların return tipindeki doğrudan fonksiyonun return
//ettiği veriyi yazdığımız zaman hata alırız.Fonksiyonların hata 
//döndürme ihtimalinde göze alarak ts'in içerisinde bulunan Promise tipine kendi
//tipimizi generic olarak göndermeliyiz
export const fetchCars= async({
    make="BMW",
    model,
    year,
 }:Filter): Promise<FetchCarsReturn>=>{
   const url = new URL(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records"
   );

   url.searchParams.append("refine", `make:${make}`);

   if(model){
    url.searchParams.append("refine", `model:${model}`);
   }

   if(year){
    url.searchParams.append("refine", `year:${year}`);
   }
   
   console.log(url.href);

    const res= await fetch (url.href);
    

    const data =await res.json();

    return data;
};