secret_Number = 3
guess = int(input("Guess a number: "))
while guess != secret_Number:
    guess = int(input("Guess a number: "))
else :
    print("Congratulations you got it!")