# Mr. Roboger's Neighborhood page

## By Karl Starkweather
This webpage illustrates string substitution of numbers

## Technologies used:
* HTML
* CSS
* Javascript

## Setup Instructions
Clone directory from repository at https://github.com/KarlStarkweather/roboger
open index.html in any browser
Enter a number in the input box to begin, and the algorithm will return a count up to the number you entered with robot-themed substitutes for all numbers containing a 1, 2 or 3

## known bugs:
None

## License:
Copyright (c) Karl Starkweather November 7, 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Specs

Describe: substituteNumbers()

Test: "It should return an array with a 0 is 0 is inputted"
Code: substituteNumbers(0)
Expected Output: ["0"]

Test: "It should return an array of strings counting up to the number inputted"
Code: substituteNumbers(5)
Expected Output: ["0","1","2","3","4","5"]

Test: "It should substitute any number containing a "1" with "Beep!"
Code: substituteNumbers(5)
Expected Output: ["0","Beep!","2","3","4","5"]

