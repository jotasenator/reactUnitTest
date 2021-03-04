import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroe'

describe('Pruebas en funciones de 08-heroes', () => {

    test('deb retornar un nombre de heroe por id', () => {

        const idTest = 1

        const nombre = getHeroeById(idTest).name

        const heroeData = heroes.find((x) => x.id === idTest)

        expect(nombre).toEqual(heroeData.name)


    })
    test('deb retornar undefined con id que no existe', () => {

        const idTest = 11

        const nombre = getHeroeById(idTest)



        expect(nombre).toBe(undefined)


    })
    test('debo retornar arreglo con heroes de dc', () => {

        const owner = 'DC'

        const nombreDC = getHeroesByOwner(owner)

        const datosDC = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        expect(datosDC).toEqual(nombreDC)


    })
    test('cantidad de heroes de Marvel', () => {

        const owner = 'Marvel'

        const cantidadMarvel = getHeroesByOwner(owner).length


        expect(2).toBe(cantidadMarvel)


    })


})
