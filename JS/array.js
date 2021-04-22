//---------------------------- Criando
const creating = () => {
    console.log('>>> Arrays')

    let avgTemp = []

    avgTemp[0] = 10
    avgTemp[1] = 21.9
    avgTemp[2] = 2
    avgTemp[3] = 5
    avgTemp[4] = 15

    console.log(avgTemp)

    avgTemp.forEach(elem => {
        console.log(elem)
    })

}

//---------------------------- Iterando sobre
const iterating = () => {

    let fibonacci = []

    fibonacci[0] = 0
    fibonacci[1] = 1
    fibonacci[2] = 1

    for (i = 3; i < 20; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    console.log(fibonacci);

    fibonacci.forEach(elem => {
        console.log(elem)
    })

}

//---------------------------- Inserindo elementos
const adding = () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    numbers[numbers.length] = 11
    numbers[numbers.length] = 12

    numbers.push(13)
    numbers.push(14)

    numbers.unshift(-1)
    numbers.unshift(-2)

    console.log(numbers) // [-2, -1,  1,  2, 3,  4, 5,  6,  7,  8, 9, 10, 11, 12, 13, 14]

}

//---------------------------- Removendo elementos
const removing = () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    numbers.pop()
    numbers.pop()

    console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8]

    numbers.shift()
    numbers.shift()

    console.log(numbers) // [ 3, 4, 5, 6, 7, 8 ]

}

//---------------------------- Inserindo elementos em posições específicas
const specific_adding = () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    numbers.splice(3)

    console.log(numbers) // [ 1, 2, 3 ]

    numbers.splice(3, 4, 5, 6, 7, 8, 'ad infinitum...')

    console.log(numbers) // [ 1, 2, 3, 5, 6, 7, 8, 'ad infinitum...' ]
}

//---------------------------- Arrays bi-dimensionais
const two_dimensional_arrays = () => {

    let numbers = []
    let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let numbers2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

    numbers.push(numbers1)
    numbers.push(numbers2)

    console.log(numbers) // [[n, n1, n2...], [-n, -n1, -n2...]]

    // Acessando de forma específica valores em array bidimensional

    console.log(numbers[0][2]) // 3
    console.log(numbers[1][2]) // -3
}

//---------------------------- Arrays tri-dimensionais
const three_dimensional_arrays = () => {

    let total_numbers = []

    let first_numbers = []
    let last_numbers = []

    // 1D
    let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let numbers2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
    let numbers3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let numbers4 = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

    // 2D
    first_numbers.push(numbers1)
    first_numbers.push(numbers2)

    last_numbers.push(numbers3)
    last_numbers.push(numbers4)

    // 3D
    total_numbers.push(first_numbers)
    total_numbers.push(last_numbers)

    console.log(total_numbers) // [[[n, n1, n2...], [-n, -n1, -n2...]], [[n, n1, n2...], [-n, -n1, -n2...]]]

    // Acessando de forma específica valores em array tri-dimensional

    console.log(total_numbers[1][1][2]) // k

    // Listando todos os elementos
    total_numbers.forEach(external_elem => {
        external_elem.forEach(middle_elem => {
            middle_elem.forEach(internal_elem => {
                console.log(internal_elem)
            })
        })
    });

    // ou

    for (let i = 0; i < total_numbers.length; i++) {
        for (let j = 0; j < total_numbers[i].length; j++) {
            for (let k = 0; k < total_numbers[i][j].length; k++) {
                console.log(total_numbers[i][j][k])
            }
        }
    }
}

//---------------------------- Main
three_dimensional_arrays()