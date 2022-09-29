const readline = require('readline'); // The readline module in node.js allows the reading of input stream
const fs = require('fs'); // The FS (File System) module is a module in Node.js used to handle file operations like creating, reading, deleting etc.

let rl = readline.createInterface({ // We create the interface to be able to interact with the user (in our case, the person giving a word from SI to compare it to the words from the dictionary)
  input: process.stdin,
  output: process.stdout
});


fs.readFile('dictionary.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    let list = [ ...(data.split('\r\n'))];
    // console.log(list);


    rl.setPrompt('Choose a word to compare:');
    rl.prompt();

    //This is where I have 'put' the logic of the program
    // The readline module provides the .on() method which listens for events.
    //In our case we use 'line' because that is what will trigger right after we give a word and press 'ENTER' (end of line input (\n, \r, \r\n))
    rl.on('line', (word) => {
        let count = 0;
        word = word.split('').sort().join('');
        console.log(' - The sorted word is', word);
        for(let i=0; i<list.length; i++){
            if(word.length === list[i].length && word === list[i].split('').sort().join('')) {
                count++;
              console.log(list[i]); 
            }
        }
        // if(count === 0) {
        //     console.log('No anagram found for the given word');
        // }
        rl.close();
    });
});
