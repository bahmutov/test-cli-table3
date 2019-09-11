# cli-table3

I wanted to have a cell spanning two rows WITHOUT a separator line like this

```text
┌───────┬───────┐
│ AA    │ AB    │
├───────┴───────┤
│ first line A  │
│ second line B │
├───────┬───────┤
│ CA    │ CB    │
└───────┴───────┘
```
Finally I have managed to do this by putting a table inside a table. First create a table for the cell with two rows and with zero left and right padding and empty border characters. Then put the string output of the table into the cell spanning 2 columns of the larger table. See [index.js](index.js) for code, run with

```shell
npm i
node .
```
