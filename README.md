# Interview coding challenge

This is my submission for a coding assessment. The implementation I took is to create a tool that lists the files of a given directory. My efforts are to implement the way I envisioned the unix command "ls" should work. It makes it easier to look for your specific folder or file.

## Usage
1. Install packages via yarn
2. Once installed run node index.js path/to/file
3. You should get a list partitioned between files and directories

### Packages used

* "clear": "^0.1.0"
  * clear is used to clear the console when the program runs
* "clui": "^0.3.6",
  * clui is used to display the data in two columns
* "commander": "^4.0.1"
  * commander is used to build the command line app