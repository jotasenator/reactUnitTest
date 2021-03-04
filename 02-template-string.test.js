import { getSaludo } from "../../base-pruebas/02-template-string"


describe('Pruebas en 02-template-strings', () => {
    test('getSaludo debe retornar Hola Fernando', () => {

        const nombre = 'Fernando'

        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre)
        console.log(saludo)

    })
    test('getSaludo debe retornar Hola Carlos si si no hay argumento nombre', () => {

        const saludoSinArgumento = getSaludo()

        expect(saludoSinArgumento).toBe('Hola Carlos')
        console.log(saludoSinArgumento)


    })


})


