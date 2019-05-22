(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('sort: should be triggered after grid.sort()', function (assert) {

    assert.expect(3);

    var container = utils.createGrid();
    var grid = new Muuri(container);
    var currentOrder = grid.getItems();
    var newOrder = currentOrder.concat().reverse();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('sort', function (itemsNew, itemsPrev) {
      assert.strictEqual(arguments.length, 2, 'callback: should have two arguments');
      assert.deepEqual(utils.sortItemsById(itemsNew), utils.sortItemsById(newOrder), 'callback: first argument should be an array of all the items in their new order');
      assert.deepEqual(utils.sortItemsById(itemsPrev), utils.sortItemsById(currentOrder), 'callback: second argument should be an array of all the items in their previous order');
    });
    grid.sort(newOrder);

  });

})(this);