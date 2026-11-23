import Header from "../Components/Header/Header";
import NewsCatagory from "../Components/NewsCatagory/NewsCatagory";

export default function Home () {
    return (
        <>
         <Header />
         <main>
            <NewsCatagory headinglevel={"2"} catagory={"Hello World"} />
         </main>
        </>
    )
}