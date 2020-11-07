package main 

import "fmt"

// create a function that print every even numbers between 1 to 20

func main() {
	s := make([]string , 3)
	fmt.Println(s)

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println(s)
	fmt.Println(len(s))

	s = append(s,"d")
	fmt.Println(s)
	fmt.Println(len(s))

	c := make([]string, len(s))
	copy(c,s)
	fmt.Println("C array: " ,c)

	l := s[1:3]
	fmt.Println("sliced one:" , l)
}