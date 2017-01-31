# bit-and-tree

A tree on top of a bitfield that represent an BITWISE-AND structure.

```
npm install bit-and-tree
```

Uses [flat-tree](https://github.com/mafintosh/flat-tree) indexing to represent the tree on top of a bitfield.
If you are not familiar with this you should read that module's README first to understand what each index means.

## Usage

``` js
var bat = require('bit-and-tree')

var tree = bat()

// returns false since at least one child is false
console.log(tree.get(1))

// set two bottom nodes to true
tree.set(0, true)
tree.set(2, true)

// returns true since both children are now true
console.log(tree.get(1))
```

## API

#### `var tree = bat([buffer])`

Create a new bit tree. Optionally pass in a buffer representing your tree.

#### `var updated = tree.set(index, bool)`

Set a bit. If you set a bit to `true` and the sibling bit is also `true` the parent bit will set as well.
Similarly if you set a bit to `false` all parent bits will be set to `false`.

Returns `true` if the bitfield was updated and `false` otherwise.

#### `var bool = tree.get(index)`

Get the status of a bit.

## License

MIT
