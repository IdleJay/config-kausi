import random

choices = ["Rock", "Paper", "Scissors"]
cpu_score = 0
user_score = 0

while True:
    cpu = random.choice(choices)  # CPU's choice for each round
    user = input("Rock, Paper, or Scissors? ").capitalize()
    
    if user == "Quit":  
        print("Final Scores:")
        print(f"CPU Score: {cpu_score}")
        print(f"Your Score: {user_score}")
        break
    
    if user not in choices:
        print("Invalid input. Please enter Rock, Paper, or Scissors.")
        continue

    print(f"CPU chooses {cpu}.")

    if user == cpu:
        print("It's a tie!")
    elif user == "Rock":
        if cpu == "Paper":
            print("You lose!", cpu, "covers", user)
            cpu_score += 1
        else:
            print("You win!", user, "smashes", cpu)
            user_score += 1
    elif user == "Paper":
        if cpu == "Scissors":
            print("You lose!", cpu, "cuts", user)
            cpu_score += 1
        else:
            print("You win!", user, "covers", cpu)
            user_score += 1
    elif user == "Scissors":
        if cpu == "Rock":
            print("You lose!", cpu, "smashes", user)
            cpu_score += 1
        else:
            print("You win!", user, "cuts", cpu)
            user_score += 1
    
    print(f"Your Score: {user_score} | CPU Score: {cpu_score}")
