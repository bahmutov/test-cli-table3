const Table = require('cli-table3')
const smallTable = new Table({
  style: {
    head: [],
    border: [],
    'padding-left': 0,
    'padding-right': 0
  },
  // chars: { mid: '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
  chars: {
    top: '',
    'top-mid': '',
    'top-left': '',
    'top-right': '',
    bottom: '',
    'bottom-mid': '',
    'bottom-left': '',
    'bottom-right': '',
    left: '',
    'left-mid': '',
    mid: '',
    'mid-mid': '',
    right: '',
    'right-mid': '',
    middle: ' '
  }
})

smallTable.push(['first line A'], ['second line B'])
const smallTableStr = smallTable.toString()
console.log(smallTableStr)

const largeTable = new Table({
  style: { head: [], border: [] }
})
largeTable.push(
  ['AA', 'AB'],
  [
    {
      colSpan: 2,
      content: smallTableStr
    }
  ],
  ['CA', 'CB']
)

console.log(largeTable.toString())
