import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toStrictEqual(userTest)
    })

    test('getUsuarioActivo debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC567',
            username: 'PEPE'
        }

        const user = getUsuarioActivo('PEPE')

        expect(user).toStrictEqual(userTest)

    })



})
