import { useState } from "react"
import { datas } from "../../Api"
import Card from "../Card"
import { Section,Title,Button,Space } from "./styled"

export default function Movies_Popular() {
    const [display, setDisplay] = useState('display:flex');
    const [infos, setInfos] = useState([])
    if(!datas){
        return
    }
    setTimeout(()=>{
        setInfos(datas[3].results)
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
                <Title>Popular</Title>
                <Button onClick={handleChange} > See More </Button>
            </Space>
            <Section display={display}>
                {infos.map((data)=>{
                    return(
                        <div key={data.id}>
                            <Card  title={data.title}img={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
                        </div>
                    )
                })}
            </Section>
        </>
    )
}