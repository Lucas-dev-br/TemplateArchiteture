import React from 'react'
import {ExamplePage} from '../../../../presentation/modules/example'
import { makeExample } from '../../http/api-url-factory'

export const MakeExample: React.FC = () => {
    return <ExamplePage exampleApi={makeExample} />
}