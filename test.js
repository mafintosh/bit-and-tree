var tape = require('tape')
var bat = require('./')

tape('basic', function (t) {
  var tree = bat()

  t.same(tree.get(1), false)

  tree.set(0, true)
  tree.set(2, true)

  t.same(tree.get(1), true)
  t.end()
})

tape('recursive', function (t) {
  var tree = bat()

  t.same(tree.get(1), false)

  tree.set(0, true)
  tree.set(2, true)
  tree.set(5, true)

  t.same(tree.get(1), true)
  t.same(tree.get(3), true)
  t.end()
})
