import { useState } from 'react'
import {Iframe,Section} from   './styled'

export default function Plutto(){
    const [display, setDisplay] = useState("none")
    const [tv, setTv] = useState("Assistir tv Online")

    function handleChange(){
        if(display == "none") {
            setDisplay("inline")
            setTv("Parar de assistir")
        } else{
            setDisplay("none")
            setTv("Assistir tv Online")
        }
    }
    return(
        <Section>
            <button onClick={handleChange}>{tv}</button>
            {/* <Iframe display={display} src="https://pluto.tv/pt/live-tv/pluto-tv-cine-sucessos?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735&referrer=copy-link"/> */}
        </Section>
    )
}