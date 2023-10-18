# Notes

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ DONE Plan pomodoro 1
- ✅ DONE Project description
- ✅ DONE Initial refactor
- ✅ DONE Examples
- ✅ DONE User stories

Pomodoro 2:

Story1: small nums
- 🚧 IN PROGRESS As a user, I want to see the number persistence for small numbers
- ✅ DONE UAT1.1: When I pass 4, then I should see 0
- ✅ DONE UAT1.2: When I pass 9, then I should see 0
- ✅ DONE UAT1.3: When I pass 10, then I should see 1
- ⚠ TODO UAT1.4: When I pass 19, then I should see 1
- ⚠ TODO UAT1.5: When I pass 20, then I should see 1
- ⚠ TODO UAT1.6: When I pass 25, then I should see 2
- ⚠ TODO UAT1.7: When I pass 27, then I should see 2
- ⚠ TODO UAT1.8: When I pass 38, then I should see 2