def plusNumbers(list):
    even = 0
    odd = 0
    for value in list:
        if value % 2 == 0:
            even = even + value
        else:
            odd = odd + value
    print(even)
    print(odd)

plusNumbers([1, 2, 3, 4, 5, 6, 7])
