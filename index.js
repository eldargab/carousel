var dom = require('dom')

module.exports = Carousel

function Carousel(el) {
  if (!(this instanceof Carousel)) return new Carousel(el)
  this.el = el
  dom.addClass('carousel', this.el)
  this.show('next', dom.firstChild(this.el))
}

Carousel.prototype.show = function(effect, el) {
  var curr = this.current()
    , next = effect
    , prev = effect == 'next' ? 'prev' : 'next'

  if (curr == el) return

  removeClasses(el)
  dom.addClass('carousel-notransition', el)
  dom.addClass(next, el)
  el.clientWidth // trigger reflow
  dom.removeClass('carousel-notransition', el)
  if (curr) {
    dom.addClass(prev, curr)
    dom.removeClass('visible', curr)
  }
  dom.addClass('visible', el)
  dom.removeClass(next, el)
}

function removeClasses(el) {
  dom.removeClass('next', el)
  dom.removeClass('prev', el)
  dom.removeClass('visible', el)
}

Carousel.prototype.current = function() {
  var els = this.el.children
  for (var i = 0; i < els.length; i++) {
    var el = els[i]
    if (el.nodeType != 1) continue // IE < 9
    if (dom.hasClass('visible', el)) return el
  }
  return null
}

Carousel.prototype.next = function() {
  var curr = this.current()
  var next = curr && dom.next(curr)
  if (next) this.show('next', next)
}

Carousel.prototype.prev = function() {
  var curr = this.current()
  var prev = curr && dom.prev(curr)
  if (prev) this.show('prev', prev)
}
