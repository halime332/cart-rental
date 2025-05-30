import { useMemo, useState, type FC, type FormEvent } from "react";
import ReactSelect from "react-select";
import { makes } from "../../../utils/constants";
import { useSearchParams } from "react-router-dom";


const SearchBar:FC = () => {

  const [make ,setMake]=useState<string>("");
  const [model,setModel]=useState<string>("");
  const [params,setParams]= useSearchParams();

//useMemo ile her render sırasında tekrar hesaplanmasının
//string[] olan makes react react selecte uygun formata getirdik
  const options = useMemo(
    ()=>makes.map((make)=>({value:make, label:make})),
    []
  );
 // string[] olan makesi react selecte uygun formata getirdik

 const handleSubmit=(e: FormEvent<HTMLFormElement>) =>{
  e.preventDefault();

  if(make&& model !==""){
     setParams({make,model});
  }else if (make && model== ""){
     setParams({make});
  }

 };


  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3 flex items-center justify-center">

      <div className="searchbar-item  items-end">

        <div className="w-full flex flex-col">
          <label>Marka</label>
          <ReactSelect
           className="w-full text-black "
           options={options}
           placeholder="Marka Seçiniz.."
           //varsalın değeri url'den al
           defaultValue={{label:params.get("make"),value:params.get("make")}}
           //-! operatörüyle e nin null olmayacağınını ts'e söyledik
            onChange={(e)=>setMake(e!.value as string)}
            
            />
        </div>
        <button className="ml-3 sm:hidden cursor-pointer">
          <img src="/search.svg" alt="search" className="size-[40px]" />
        </button>
        
      </div>

        <div className="searchbar-item flex flex-col !items-start">
          <label>Model</label>

            <div className="flex w-full">
              <div className="absolute ml-3 mt-1">
                <img src="model-icon.png" alt="search" className="size-[25px]"/>
              </div>

              <input className="searchbar-input roounded text-black bg-white " 
              placeholder="örn:Civic"
              onChange={(e)=>setModel(e.target.value)}
              defaultValue={params.get("model") as string}
              type="text"/>

              <button className="ml-3 cursor-pointer ">
                <img src="/search.svg" className="size-[40px]"/>
              </button>
            </div>
        </div>
                  
      </form>
  );
  
};

export default SearchBar;
