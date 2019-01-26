from module_a import person_a
from module_b import person_b

print(str(person_a.getHuman()), str(person_b.getHuman()))
person_b.setHuman('Ilya', 25)
print(str(person_a.getHuman()), str(person_b.getHuman()))
