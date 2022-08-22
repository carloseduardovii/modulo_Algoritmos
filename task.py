import random
"""Se importa el modulo para generar numeros aleatorios para el ejercicio
"""

class Task:
    def __init__(self, time):
        self.timestamp = time
        """Calcula el tiempo de estera para ejecutar una nueva tarea
        """
        self.pages = random.randrange(1, 21)
        """Con el modulo importado "random", se genera un numero aleatorio entre 1 y 21 para el eje¡rcicio;
        este rango representa el numero de paginas que se envian a imprimer en cada tarea.
        """

    def get_stamp(self):
        return self.timestamp
        """Obtiene el tiempo en estera para ejecutar una nueva tarea
        """

    def get_pages(self):
        return self.pages
        """Obtiene el numero de paginas de la tarea a ejecutar
        """
    def wait_time(self, current_time):
        return current_time - self.timestamp
        """Calcula el tiempo de espera restante para ejecutar una nueva tarea 
            mientras se ejecuta la tarea actual
        """