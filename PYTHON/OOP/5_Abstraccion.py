class Hash():
    data = {}

    def get(self,key):
        data[key]

    def add(self,key,value):
        data[key] = value

class Queue():
    data = []

    def get(self):
        data[0]

    def add(self,key,value):
        data[len(data)-1] = value

class FilaBanco:
    users = Queue()

    def next_user(self,number):
        #Implementacion
        return self.users.get(number)

    def create_user(self,number,user):
        self.users.add(number,user)