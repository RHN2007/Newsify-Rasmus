import { useState } from "react";
import './Home.scss'
import Header from "../Components/Header/Header";
import NewsCatagory from "../Components/NewsCatagory/NewsCatagory";
// import useFetchData from "../hooks/useFetchData";

export default function Home ({selectedCatagories}) {

    
    
    
    return (
        <>
         <Header />
         <main className="main">
            {selectedCatagories.map((catagory, index) => {
                return (
                    <NewsCatagory headinglevel={index + 2} catagory={catagory} />
                )
            })}
         </main>
        </>
    )
}