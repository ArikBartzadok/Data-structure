// FIFO - First In First Out

function Queue() {
    let items = []

    this.enqueue = function(elem) {
        // adiciona um novo item
        items.push(elem)
    }

    this.dequeue = function() {
        // remove um item
        return items.shift()
    }

    this.clear = function() {
        // remove todos os elementos da fila
        items = []
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function() {
        // verifica se a fila está ou não vazia
        return items.length === 0
    }

    this.size = function() {
        // retorna o tamanho da fila
        return items.length
    }

    this.print = function() {
        // imprime a fila no console
        return items
    }
}

//---------------------------- Testando funcinalidades da fila
testando_funcionalidades_da_fila = () => {
    const fila = new Queue()

    console.log('>>> A fila está vazia :: ', fila.isEmpty())

    fila.enqueue(10)
    fila.enqueue(20)
    fila.enqueue(30)
    fila.enqueue(40)
    fila.enqueue(50)

    console.log('>>> A fila está vazia :: ', fila.isEmpty())
    console.log('>>> Fila :: ', fila.print())
    console.log('>>> Tamanho da fila :: ', fila.size())
    console.log('>>> Primeiro elemento da fila :: ', fila.front())
    console.log('>>> Limpando a fila...')
    fila.clear()
    console.log('>>> A fila está vazia :: ', fila.isEmpty())
}

//---------------------------- Visualização gráfica fila
visualizacao_grafica_da_fila = () => {
    const fila = new Queue()

    fila.enqueue(10)
    console.log(fila.print())
    fila.enqueue(20)
    console.log(fila.print())
    fila.enqueue(30)
    console.log(fila.print())
    fila.enqueue(40)
    console.log(fila.print())
    fila.enqueue(50)
    console.log(fila.print())

    fila.dequeue()
    console.log(fila.print())
    fila.dequeue()
    console.log(fila.print())
    fila.dequeue()
    console.log(fila.print())
    fila.dequeue()
    console.log(fila.print())
    fila.dequeue()
    console.log(fila.print())
}

//---------------------------- Main
visualizacao_grafica_da_fila()