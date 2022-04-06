#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())

# I predict 5

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())

# I predict an error with print(number_of_days_in_a_week_silicon_or_triangle_sides()

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())

# I predict 5 and 10 

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())

# I predict 5

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)

# I predict 5

#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))

# Predict an error


#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))

# 25?

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())

# returns 5 and 10?

#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))

# returns 7 and 14 and 3?

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))

# returns 8?

#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)

# returns 500,300

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)

# returns 500 500 300 500

#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)

# returns 500 500 300 300

#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()

# returns 1,2,3

#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)

# returns 1 10 3 5