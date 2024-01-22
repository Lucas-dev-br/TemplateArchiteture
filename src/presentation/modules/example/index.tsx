import { Examples } from "../../../domain/usecases/example/example"
import { Text } from "react-native"

interface ExampleApi {
    exampleApi: Examples
}

export const ExamplePage = ({exampleApi}: ExampleApi) => {
    return <Text>Apenas um exemplo</Text>
}