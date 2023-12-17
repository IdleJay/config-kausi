#Alice has some cards with numbers on them. She arranges the cards in decreasing
#order, and lays them out face down in a sequence on a table. She challenges Bob
#to pick out the card containing a given number by turning over as few cards as
#possible. Write a function to help bob locate the card.

def locate_card(cards, target):
    left = 0
    right = len(cards) - 1

    while left <= right:
        mid = (left + right) // 2

        if cards[mid] == target:
            return mid  # Card found at index 'mid'
        elif cards[mid] < target:
            right = mid - 1  # Search in the left half
        else:
            left = mid + 1  # Search in the right half

    return -1  # Card not found

# Example usage:
cards_sequence = [13, 11, 9, 7, 4, 2, 1]
given_number = 7

result = locate_card(cards_sequence, given_number)
if result != -1:
    print(f"The card containing {given_number} is at position {result}.")
else:
    print(f"The card containing {given_number} is not in the sequence.")


