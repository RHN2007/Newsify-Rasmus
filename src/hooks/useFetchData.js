import { useQuery } from "@tanstack/react-query"; // import tanstacks useQuery så vi kan bruge den i denne fil.

export default function useFetchData(url) {
    const {isPending, error, data } = useQuery({ // ny const som indholder ispending, error og data som er ligmed use query
        queryKey: ["data", url], // query key som er en nøgle som tanstack usequery bruger til at holde styr på foskelligt data.
        queryFn: async () => { // queryFn er den funktion som useQuery kører, i dette tilfælde er den en funktion til at fetch noget data
            const response = await fetch(url) // klassisk fetch funktion inde i en async funktion til at hente data fra URLen
            if (!response.ok) { // hvis vi får en fejl når vi henter dataen, så smid en ny fejlbnesked
                throw new Error("fejl")
            }
            const data = await response.json() // konvertere vores response om til json så vi kan arbejde med den
            return data // retunere vores fetched data til usequery funktionen så vores data const er = vores data.
        },
        enabled: !!url // tanstacks måde at tjekke om vi har en valid URL
    })
    console.log({isPending, error, data})
    return ({isPending, error, data}) // returnere vores ispending, error og data.
    
}