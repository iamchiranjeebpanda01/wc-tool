## Own implementation of wc-tool (ccwc)

**Description:**
ccwc is my implemention of a command-line tool similar to the Unix `wc` command that counts the number of words, lines, characters, and bytes in a given file or standard input.


**Installation and Usage: **
1. Download the directory from `https://github.com/iamchiranjeebpanda01/wc-tool.git`.
2. Run ```cd wc-tool```
3. Run ```sudo npm link``` if using the root user, ```npm link``` otherwise.
4. Use ``` ccwc ``` along with the available command line options or pipe inputs from a different command.

1. **Command-Line Options:**
   - `-c`: Count the number of bytes.
   - `-l`: Count the number of lines.
   - `-w`: Count the number of words.
   - `-m`: Count the number of characters (accounting for multibyte characters.
   - No options: Equivalent to `-c`, `-l`, and `-w`.

2. **Input:**
   - Accept a filename as an argument. <br>
    Example:`` ccwc [-option] filename ``
   - Read from standard input if no filename is specified.<br>
   Example: `` cat test.txt | ccwc [-option] ``

3. **Output:**
   - Print the counts in a format similar to the original `wc` command:
     ```
     lines words bytes file
     ```

