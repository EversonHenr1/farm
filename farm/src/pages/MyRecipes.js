import Button from "../components/Button"
import Container from "../components/Container"

function MyRecipes(){
    return(
        <Container>
            <Container tipo="div" altura="100vh" classAdicional="center" classAdicional2="vertical">
                <Button link="/newrecipe" text="Criar Receita" class1="blue"/>
            </Container>
        </Container>
    )
}

export default MyRecipes