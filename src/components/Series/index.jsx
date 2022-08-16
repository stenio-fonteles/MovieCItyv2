import { useState } from "react"
import { series } from "../../Api"
import Card from "../Card"
import { Section,Title,Space,Button } from "./styled"
export default function Series() {
    const [display, setDisplay] = useState('display:flex');
    const [infos, setInfos] = useState([])

    
    setTimeout(()=>{
        setInfos(series[0].results)
    },300)
    function handleChange() {        
        if(display == 'display:grid'){
            setDisplay('display:flex')
        }
        else{
            setDisplay('display:grid')

        }
    }

    return(
        <>
            <Space>
                <Title>Assista</Title>
                <Button onClick={handleChange} > See More </Button>
            </Space>
            <Section display={display}>
                {infos.map((data)=>{
                    return(
                        <div key={data.id}>
                            <Card id={data.id}title={data.name}img={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
                        </div>
                    )
                })}
            </Section>
        </>
    )
}