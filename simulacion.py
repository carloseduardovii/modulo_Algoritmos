from queue import Queue
"""Se importa el modulo para crear una nueva cola para el ejercicio
"""
from printer import Printer
from task import Task
"""Se importan los madulos configurados necesaros para ejecutar el proceso se similación
"""
import random
"""Se importa el modulo para generar numeros aleatorios para el ejercicio
"""


def simulation(num_seconds, pages_per_minute):

    lab_printer = Printer(pages_per_minute)
    """Del modulo importado "Printer" se ontienen las paginas enviadas a impresión
    """
    print_queue = Queue()
    """Se crea una nueva cola de impresión mediante el modulo "Queue"
    """
    waiting_times = []
    """Alñmacena en una lista el tiempo en espera que toma en ejecutarse cada tarea envida
    """

    for currentSecond in range(num_seconds):

        if new_print_task():
            task = Task(currentSecond)
            print_queue.enqueue(task)
        """Agrega una nueva tarea a la cola tomando como referencia el tiempo en que se ha enviado
        """

        if (not lab_printer.busy()) and (not print_queue.is_empty()):
            next_task = print_queue.dequeue()
            """Elimina de la cola de impresion aquellas tareas que ya han sido ejecutadas tomando
                como referencia el estado actual de la impresora "ocupada" y si la "cola esta vacia"
            """
            waiting_times.append(next_task.wait_time(currentSecond))
            lab_printer.start_next(next_task)
            """Agrega a la lista de tareas en espera la nueva tarea programada
            """
       

        lab_printer.tick()
        """Disminuye el tiempo de jecucuin mienats la tarea se ejecuta
        """

    average_wait = sum(waiting_times)/len(waiting_times)
    print("Average Wait %6.2f secs %d tasks remaining." % (average_wait, print_queue.size()))
    """Calcula el promedio de espera para que una nueva tarea entre a realizarce.
    """


def new_print_task():
    num = random.randrange(1, 181)
    if num == 180:
        return True
    else:
        return False
    """Calcula el tiempo de espera aleatorio para que una nueva tarea entre a la cola de ejecución entre 1 y 180
    """


for i in range(10):
    simulation(3600, 5)
    """Toma 5 tareas caca hora segun el numero de paginas enviadas a impromir
    """