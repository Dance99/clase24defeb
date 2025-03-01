class Node {
    constructor(value) {
        this.value = value
        this.netx = null
    }
}

class linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpety(){
        return this.size === 0
    }

    getsize () {
        return this.size
    }

    Prepend(value) {
        //crea un nuevo nodo con el valor proporcionado
        const node = new Node(value)

        // si la lista esta vacia
        if (this.isEmpety()) {

            //.. le nuevo nodo se convierte em la cabeza de la lista
            this.head = node
        } else {

            node.text = this.head

            this.head = node
        }
        this.size++
    }

    //insertar
    Insert(value, index) {
        //verifica si el indice es invalidado (menor que 0 o(||) mayor qie el tamaño actual de la lista)
        if (index < 0 || index > this.size) {
            
                return; //sale de la función sin hacer nada si el indice es invalido
            }
            
            //si el inidice es 0, usa el metodo prepend para insertar el valor al inicio de la lista.
            if (index === 0) {
                this.Prepend(value);
            } else {
                // crea un nuevo nodo con el valor proporcionado 
                const node = new Node (value);

                //comienza en la cabeza de la lista
                let prev = this.head;

                //recoore la lista hasta llegar al nodo anterior a la posicion deseada 
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }
                // ajusta los punteros: el nuevo nodo apunta al siguiente del nodo anterior, 
                // y el nuevo nodo ahora apunta al nuevo nodo
                node.next = prev.next;
                prev.next = node;

                //incrementa el tamaño de la lista para reflejar la inserción 
                this.size++; 
            }


        } 

        //Metodo remover: elomina un nodo de la lista enlazada de una posicion especifico 
        removeFrom(index) {
            //verifica si el indice esta fuera del rango valido (menor que 0 o mayor o igual al tamaño de lalista)
            if (index < 0 || index >= this.size) {
                return null; //retorna null si el indice no es valido 
            }

             let removeNode; // variable para almacenar el nodo que sera eliminado

             //caso especial: si se elimina el primer nodo (indice 0).
            
            if (index === 0) {
                removeNode = this.head; // Guarda el nodo actual de la cabeza
                this.head = this.head.next; //Mueve la cabeza al siguiente nodo
            } else {
                //para terminar un nodo que no esta al inicio, se debe iterar hasta el nodo anterior al que se eliminara
                let prev = this.head; //comienza desde la cabeza

                //itera hasta el nodo previo al que se desea eliminar 
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next; //avanza al siguiente nodo
                }

                removeNode = prev.next; // guarda el nodo a eliminar
                prev.next = removeNode.next; //ajusta el puntero del nodo previo al siguiente del nodo eliminado.
            }
        }

    print() {
        if (this.isEmpety()) {
            console.log(`lista vacia`) //imprime mensaje de que la lista esta vacia 
        } else {
            let curr = this.head //inicia el nodo 
            // variable para almacenar los valores de los nodos 
            let lisvalue = ``

            // recorre la lista hasta que curr (nodo actual) sea null
            while (curr) {
                lisvalue += `${curr.value}` // agrega el valor del nodo actual a la cadena de valores

                curr = curr.next // avanza al siguiente nodo de la lista

            }

            console.log(lisvalue)
        }
    }

}


const list = new linkedlist()

console.log('¿Esta vacía la lista?', list.isEmpety())
console.log(`Tamaño de la lista`, list.getsize())

// list.Prepend(6)
// list.Prepend(8)
// list.Prepend(10)

list.print()
list.Prepend(6)
list.print()

list.Prepend(10)
list.Prepend(14)
list.Prepend(8)
list.print()


const lista = new linkedlist();
 lista.print();
 lista.Insert(10, 0);