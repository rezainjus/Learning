# -*- coding: utf-8 -*-

height = float(input("Enter your height in m: "))
weight = float(input("Enter your weight in kg: "))

bmi = weight / height ** 2

if bmi < 18.5:
    inter = "underweight"
elif bmi > 18.5 and bmi < 25:
    inter = "normal weight"
elif bmi > 25 and bmi < 30:
    inter = " overweight"
elif bmi > 30 and bmi < 35:
    inter = "obese"
elif bmi > 35:
    inter = "clinically obese"
    
print("Your BMI value is " + str(bmi) + ", and your interpretation is " + str(inter))
    