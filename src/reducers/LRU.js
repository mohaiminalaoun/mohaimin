var ListNode = function(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
};
var removeLastNode = function() {
  var node = this.dummyTail.prev;
  node.prev.next = this.dummyTail;
  this.dummyTail.prev = node.prev;
  this.map.delete(node.key);
};
var remove = function(node) {
  var prev = node.prev,
    next = node.next;
  prev.next = next;
  next.prev = prev;
  this.map.delete(node.key);
};
var add = function(node) {
  var second = this.dummyHead.next;
  node.prev = this.dummyHead;
  node.next = second;
  second.prev = node;
  this.dummyHead.next = node;
  this.map.set(node.key, node);
};
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map(); // map the key to the ListNode
  this.dummyHead = new ListNode("dummy", 0); //dummy head
  this.dummyTail = new ListNode("dummy", 0); // dummy tail
  this.dummyHead.next = this.dummyTail; // head's prev is one that came before it
  this.dummyTail.prev = this.dummyHead;
  this.curSize = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.get(key)) {
    return -1;
  }
  // exists, so remove it, then add to front
  var node = this.map.get(key);
  remove.call(this, node);
  add.call(this, node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // head -- -- -- tail
  // <--prev -- next-->
  var storedNode = this.map.get(key);
  if (!storedNode) {
    let newNode = new ListNode(key, value);
    add.call(this, newNode);
    this.curSize++;
  } else if (storedNode) {
    // need to remove this
    var node = new ListNode(key, value);
    remove.call(this, this.map.get(key));
    add.call(this, node);
  }
  if (this.curSize > this.capacity) {
    removeLastNode.call(this);
    this.curSize--;
  }
};

module.exports = { LRUCache };
