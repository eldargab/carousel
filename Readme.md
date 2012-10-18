
# screens

  Simple carousel library.
  Check out http://github.com/tomerdmnt/carousel-slide for the same thing with slide transition.

  ```html
    <div id="myCarousel">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  ```

  ```js
    var Carousel = require('carousel');
    var c = Carousel(document.getElementById('myCarousel');

    // show next item
    c.next();

    // show previous item
    c.prev();
  ```

## Installation

    $ component install tomerdmnt/carousel

## API

### (el)
    The container element of the carousel.

### next()
    Show the next item. if there is none returns null.

### prev()
    Show the previous item. if there is none returns null.

## License

  MIT

