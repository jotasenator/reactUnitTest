import { getImagen } from "../../base-pruebas/11-async-await"


describe('Pruebas con async-awit-fetch', () => {

    test('debe retornar la url de prueba', async () => {

        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')

    })

})
