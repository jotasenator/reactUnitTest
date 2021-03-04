import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Pruebas en destructuracion', () => {

    test('debe retornar un string y un numero', () => {

        const arr = retornaArreglo()
        // const[letras,numeros}=retornaArreglo()


        // expect(arr).toEqual(['ABC', 123])

        expect(arr[0]).toEqual('ABC')
        expect(typeof arr[0]).toEqual('string')
        expect(arr[1]).toEqual(123)
        expect(typeof arr[1]).toEqual('number')





    })


})
