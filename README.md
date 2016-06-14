# CSS Emoji Grid

*Smallest and Weirdest CSS Grid, using Emojis as classes*

This experiment shows a full 12 columns working CSS grid, supported by emojis as CSS classes. Less than 1kb.

> Note: this is experimental and exploratory code

### Demo:

[GitHub Pages](http://juanbrujo.github.io/css-emoji-grid) | [CodePen](http://codepen.io/juanbrujo/pen/bepzom)

### Use:

As many CSS grid systems, it has some common classes:

`.container`    => `.🔵`

`.row`          => `.🔷`

`.col-12`       => `.col-💥`

`.col-11`       => `.col-📱`

`.col-10`       => `.col-🔟`

`.col-9`        => `.col-🍪`

`.col-8`        => `.col-🎹`

`.col-7`        => `.col-🎰`

`.col-6`        => `.col-🍇`

`.col-5`        => `.col-🌿`

`.col-4`        => `.col-🍕`

`.col-3`        => `.col-👪`

`.col-2`        => `.col-👫`

`.col-1`        => `.col-👆`


The main/basic markup works as follows:

```html
<main class="🔵">
    <div class="🔷">
      <div class="col-💥">12</div>
    </div>
    <div class="🔷">
      <div class="col-🔟">10</div>
      <div class="col-👫">2</div>
    </div>
</main>
```
### Support:

Tested in Chrome 48, Firefox 44, Safari 9 and it just works! 👏

### License:

[MIT](LICENSE.md)

