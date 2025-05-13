import type { ICar } from "../types";

type FetchCarsReturn ={
    total_count:number;
    results:ICar[];
};
//Asenkron fonksiyonların return tipindeki doğrudan fonksiyonun return
//ettiği veriyi yazdığımız zaman hata alırız.Fonksiyonların hata 
//döndürme ihtimalinde göze alarak ts'in içerisinde bulunan Promise tipine kendi
//tipimizi generic olarak göndermeliyiz
export const fetchCars= async(): Promise<FetchCarsReturn>=>{
    const  url=`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?refine=make:'BMW'`;

    const res= await fetch (url);
    
    const data =await res.json();

    return data;
};