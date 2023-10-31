import random
choices = ["Rock", "Paper", "Scissors"]
cpu = random.choice(choices)
user = False
cpu_score = 0
user_score = 0
while True:
    user = input("Rock, Ppaer or Scissors?").capatalize()
    ##Cases
    if user == cpu:
        print("Tie!")
    elif user == "Rock":
        if cpu == "Paper":
            print("You lose!", cpu, "clears", user)
            cpu_score += 1
        else:
            print("You win!", user, "smashes", cpu)
            user_score += 1
    elif user == "Paper":
        


