# Function to multiply two 3-bit binary numbers
def binary_multiplier_3bit(binary1, binary2):
    if len(binary1) != 3 or len(binary2) != 3:
        return "Both inputs must be 3-bit binary numbers."

    product = bin(int(binary1, 2) * int(binary2, 2))[2:]
    while len(product) < 6:  # Ensure the result is 6 bits (3-bit input * 3-bit input)
        product = "0" + product
    return product

# Input from the user
binary_input1 = input("Enter the first 3-bit binary number: ")
binary_input2 = input("Enter the second 3-bit binary number: ")

# Check if the inputs consist of only 0s and 1s and are 3 bits in length
if (not binary_input1.isdigit() or not binary_input2.isdigit() or
    any(c not in "01" for c in binary_input1) or any(c not in "01" for c in binary_input2) or
    len(binary_input1) != 3 or len(binary_input2) != 3):
    print("Invalid input. Please enter two 3-bit binary numbers (0s and 1s).")
else:
    product = binary_multiplier_3bit(binary_input1, binary_input2)
    print(f"Product of the two 3-bit binary numbers: {product}")

        