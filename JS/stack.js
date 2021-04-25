// LIFO - Last In First Out

function Stack() {
    let items = []

    this.push = function (elem) {
        // adiciona um novo item a pilha
        items.push(elem)
    }

    this.pop = function () {
        // remove um item do topo da pilha
        return items.pop()
    }

    this.peek = function () {
        // devolve o elemnto que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        // informa se apilha está ou não vazia
        return items.length === 0
    }

    this.clear = function () {
        // limpa a pilha
        items = []
    }

    this.size = function () {
        // informa o tamanho da pilha
        return items.length
    }

    this.print = function () {
        // imprime a pilha no console
        console.log(items)
    }

}

//----------------------------  Testando funcionalidades da pilha
const teste_de_funcionalidades = () => {
    const pilha = new Stack()

    pilha.push(2)
    pilha.push(4)
    pilha.push(6)
    pilha.push(8)
    pilha.push(10)

    console.log(pilha.peek()) // 10
    console.log(pilha.size()) // 5

    console.log(pilha.pop()) // 10
    console.log(pilha.size()) // 4

    pilha.clear()
    console.log(pilha.size()) // 0
    console.log('>>> Pilha está vazia :: ', pilha.isEmpty()) // true

    pilha.push('one',)
    pilha.push('two')
    pilha.push('ad infinitum...')

    console.log(pilha.print()) // 10
    console.log('>>> Pilha está vazia :: ', pilha.isEmpty()) // false
}

//----------------------------  Análise gráfica da pilha
const analise_grafica_da_pilha = () => {
    const pilha = new Stack()

    console.log('>>> Pilha está vazia :: ', pilha.isEmpty())

    pilha.push(5)
    pilha.print()
    pilha.push(8)
    pilha.print()
    pilha.push(11)
    pilha.print()
    pilha.push(15)
    pilha.print()

    console.log('>>> Pilha está vazia :: ', pilha.isEmpty())

    pilha.pop()
    pilha.print()
    pilha.pop()
    pilha.print()
    pilha.pop()
    pilha.print()
    pilha.pop()
    pilha.print()

    console.log('>>> Pilha está vazia :: ', pilha.isEmpty())

}

//----------------------------  Decimal para binário
decimal_para_binario = (decimal_number) => {
    let rest_stack = [],
    rest,
    binary_number = ''

    while(decimal_number > 0) {
        rest = Math.floor(decimal_number % 2)
        rest_stack.push(rest)
        decimal_number = Math.floor(decimal_number / 2)
    }

    while(rest_stack.length > 0) {
        binary_number += rest_stack.pop().toString()
    }

    console.log(binary_number)
}

//----------------------------  Coversor de base
conversor_de_bases = (decimal_number, base) => {
    let rest_stack = [],
    rest,
    base_string = '',
    digits = '0123456789ABCDEF'

    while(decimal_number > 0) {
        rest = Math.floor(decimal_number % base)
        rest_stack.push(rest)
        decimal_number = Math.floor(decimal_number / base)
    }

    while(rest_stack.length > 0) {
        base_string += digits[rest_stack.pop()]
    }

    console.log(base_string)
}

//---------------------------- Main
conversor_de_bases(123, 8)