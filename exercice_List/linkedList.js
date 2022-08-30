class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  /*OrderedList(): crea una nueva lista ordenada que está vacía.
    No necesita parámetros y devuelve una lista vacía.*/
  constructor() {
    this.head = null;
    this.size = 0;
    /*Devuelve en la misma linea el número de ítems en la lista.*/
  }

  add(data) {
    /*add(item): agrega un nuevo ítem a la lista, asegurando que el orden se preserve.
    Necesita el ítem y no devuelve nada. Asume que el ítem aún no está en la lista.*/
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    /*insert(pos,item) agrega un nuevo ítem a la lista en la posición pos.
      Necesita el ítem y no devuelve nada.
      Asume que el ítem aún no está en la lista y que hay suficientes elementos
      existentes para tener la posición pos. */
    if (index < 0 || index > this.size) {
      return null;
    }
    const newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  print() {
    /*Devuelve el último ítem de la lista. 
      Apunta hacia un nodo aun inexistente o null representado por 'X' */
    if (!this.size === 0) {
      return null;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result = current.data += "->";
      current = current.next;
    }
    result += "X";
    return result;
  }

  removeData(data) {
    /*remove(item): elimina el ítem de la lista.
  Necesita el ítem y modifica la lista. Asume que el ítem está presente en la lista.
*/
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.data === data) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  removeFrom(index) {
    /*pop(pos): elimina y devuelve el ítem en la posición pos. 
    Necesita la posición y devuelve el ítem. Asume que el ítem está en la lista.*/
    if (index < 0 || index > this.size) {
      return null;
    }
    let current = this.head;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  isEmpty() {
    /*Comprueba si la lista está vacía.
      No necesita parámetros y devuelve un valor booleano. */
    return this.size === 0;
  }

  getsize() {
    /*size(): devuelve el número de ítems en la lista.
      No necesita parámetros y devuelve un entero. */
    return this.size;
  }
}

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.insertAt(10, 1);
linkedList.add(99);
//console.log(linkedList);
//linkedList.removeData(12);
//console.log(linkedList.removeFrom(2));
//console.log(linkedList);
console.log(linkedList.print());
//console.log(linkedList.isEmpty());
//console.log(linkedList.getsize());
