my_color = "red"
guess = str(input("enter my favorite color name "))
while guess != my_color:
    guess = str(input("guess a new color "))
else:
    print("congratulations you got it")