package main 

import "fmt"

// create a function that print every even numbers between 1 to 20

func main() {
	var a [5]int
	fmt.Println("an empty array:", a)

	a[4] = 5
	fmt.Println("not an empty array: " , a)

	b := [5]int{1,2,3,4,5}
	fmt.Println(b)
}