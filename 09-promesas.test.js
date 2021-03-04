import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'
import heroes from '../../data/heroe'

describe('Pruebas con promesas', () => {
    test('deb retornar un heroe async', (done) => {

        const id = 1

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0])
                done()
            })
    })
    test('debe retornar el texto del catch', (done) => {

        const id = 111

        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })



    })

})
