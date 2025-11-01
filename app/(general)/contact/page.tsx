import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact page",
    description: "Esta es la pagina de contacto de la empresa",
    keywords: ['Contact Page', 'PAKO', 'Informacion', '...']
}

export default function ContactPage(){
    return(
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )
}