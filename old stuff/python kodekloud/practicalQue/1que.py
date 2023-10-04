# WAP to reverse a five digit number without using loop?
def reverse_number(number):
    if len(str(number))!=5:
        print("Error: The number should be in five digit")
        return 
    
    reversed_number = int(str(number) [::-1])
    return reversed_number

#the test function 
number = int(input("Enter five digit number: "))
reversed_number = reverse_number(number)
print("Original number: ", number)
print("Reveresed number ", reversed_number)
                          
