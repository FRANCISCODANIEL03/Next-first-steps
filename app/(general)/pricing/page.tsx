import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing page",
    description: "Esta es la pagina de precios de los productos",
    keywords: ['Pricing Page', 'PAKO', 'Informacion', '...']
}

export default function PricingPage(){
    return(
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}