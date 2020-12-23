# -*- coding: utf-8 -*-
"""
Created on Wed Dec 23 15:32:15 2020

@author: Y530
"""

scores = input("Input a list of students scores: ")
for n in range(len(scores)):
              scores[n] = int(scores[n])
print(scores)

highest_score = 0
for score in scores:
    if score > highest_score:
        highest_score = score
print(highest_score)