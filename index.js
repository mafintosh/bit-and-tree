var bitfield = require('sparse-bitfield')
var flat = require('flat-tree')

module.exports = AndTree

function AndTree () {
  if (!(this instanceof AndTree)) return new AndTree()
  this.bitfield = bitfield()
}

AndTree.prototype.set = function (index, value) {
  return value ? this._setTrue(index) : this._setFalse(index)
}

AndTree.prototype.get = function (index) {
  return this.bitfield.get(index)
}

AndTree.prototype._setTrue = function (index) {
  if (!this.bitfield.set(index, true)) return false

  while (this.bitfield.get(flat.sibling(index))) {
    index = flat.parent(index)
    if (!this.bitfield.set(index, true)) break
  }

  return true
}

AndTree.prototype._setFalse = function (index) {
  if (!this.bitfield.set(index, false)) return false

  while (true) {
    index = flat.parent(index)
    if (!this.bitfield.set(index, false)) return true
  }
}
