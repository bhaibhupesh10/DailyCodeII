secret_number = 3;
guess = int(input("guess a number:  "))
while guess != secret_number:
    guess = int(input("guess a new number "))
else:
    print("congratutlations, you got it!")