import { render } from "@testing-library/react"
import PrimeraApp from '../components/PrimeraApp'
import React from 'react'


describe('Pruebas en <PrimeraApp/>', () => {
    test('debe mostrar el mensaje hola soy goku', () => {

        const saludo = 'Hola, soy Goku'

        const { getByText } = render(<PrimeraApp saludo={saludo} />)

        expect(getByText(saludo)).toBeInTheDocument()

    })


})
