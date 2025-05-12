

export const fetchCars= async()=>{
    const  url=`https://public.opendatasoft.com/api/explore/v2.1/
    catalog/datasets/all-vehicles-model/
    records?refine=make:BMW`;

    const res= await fetch(url);
    
    const data = await res.json();

    return data.results;
};