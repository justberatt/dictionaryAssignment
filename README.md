# dictionaryAssignment

This is an app that takes a word from the Standard Input and compares it to a file to find all of the words anagrams

## Description

I have used the 'fs' - File System module to read the dictionary text file into the app, and I have used readFile() to read the file in an asynchronous way.
I have used the readline module to be able to 
create an interface for input/output interaction between the user and the app. This way the user can give the word that we need to compare. 

Once I get the list, I split the words into an array using the .split() method and spread them into the 'list' array using the spread operator (...);

Using the setPrompt() method which the 'readline' module provides, we ask the user for a word. 

And finally, using the on() method we listen for an event, which in our case, we use the 'line' event. What this does, is that as soon as the user hits 'Enter', the callback function is triggered, and in that function is where I compare the given word to the words in list.

The way I do it is, I first sort the words lexicographically (i.e. silent -> eilnst), and the after checking if they have the same length, I check if they are the same after being sorted lexicographically. If they turn out to be identical, that means that in their original form they are anagram to each other.

I also use a counter, which for everytime there is a match, it increases, and in the end if it is 0, then the app knows it should give the message of no anagram found in the list.

We also need rl.close() to close the interface, otherwise it will not exit the application and it will keep asking for input even after the job is done.

## Complexity of the solution

Time complexity of the app should be O(n) because I have one foor-loop, and with for-loops the time complexity is linear since the operations inside the loop will have to run for every element (word) in the dictionoary.



