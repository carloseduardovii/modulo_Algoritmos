class Printer:
    def __init__(self, ppm):
        """ppm = páginas que la impresora imprime por minuto
        """
        self.page_rate = ppm
        """ Guarda el numero de paginas por minuto
        """
        self.current_task = None
        """Guarda la tareea actual que se debe ejecutar
        """
        self.time_remaining = 0
        """Guarda la catidad de tiempo que le resta a la tarea para que termine su ejecución
        """

    def tick(self):
        """Disminuye el tiempo en que se esta ejecutando la tarea a medida en que esta transcurre
            poniendo a la impresora nuevamente a disposición.
        """
        if self.current_task is not None:
            self.time_remaining = self.time_remaining - 1
            if self.time_remaining <= 0:
                self.current_task = None

    def busy(self):
        """Muestra el estado de la impresora mientras se esta ejecutando una tarea 
            o miestras esta ya se encuentra disponible
        """
        if self.current_task is not None:
            return True
        else:
            return False

    def start_next(self, new_task):
        """Inicializa una nueva tarea de la cola de impresión
        """
        self.current_task = new_task
        self.time_remaining = new_task.get_pages() * 60/self.page_rate
        """Calcula el tiempo que tarda en ejecutarse una nueva tarea tomando como 
            base el numero de paginas enviadas a imprimesión.
        """