# Interview Coding Challenge

This is my submission for a coding challenge assessment. The challenge was to create a tool that lists the files of a given directory. My strategy is to create a more user friendly and aesthetically appealing visual of the "ls" unix command. The goal for this improved format is to ease the look-up of a specific folder or file.

## Usage
1. Install packages via yarn.
2. Once installed, run node index.js path/to/file.
3. A list partitioned between files and directories will be generated.

### Packages Used

* "clear": "^0.1.0"
  * clear is used to clear the console when the program runs
* "clui": "^0.3.6",
  * clui is used to display the data in two columns
* "commander": "^4.0.1"
  * commander is used to build the command line app