# CSS Emoji Grid

*Smallest and weirdest CSS grid, using emojis as classes. And responsive!*

This experiment shows a full 12 columns working CSS grid, supported by emojis as CSS classes. Less than 5kb.

> Note: this is experimental and exploratory code

![](https://i.imgur.com/n9O3nHh.png)

### Demo:

[GitHub Pages](http://juanbrujo.github.io/css-emoji-grid) | [CodePen](http://codepen.io/juanbrujo/pen/bepzom)

### Use:

As many CSS grid systems, it has some common classes:

`.container`    => `.🔵`

`.row`          => `.🔷`

`.col-12`       => `.🍺-💥`

`.col-11`       => `.🍺-📱`

`.col-10`       => `.🍺-🔟`

`.col-9`        => `.🍺-🍪`

`.col-8`        => `.🍺-🎹`

`.col-7`        => `.🍺-🎰`

`.col-6`        => `.🍺-🍇`

`.col-5`        => `.🍺-🌿`

`.col-4`        => `.🍺-🍕`

`.col-3`        => `.🍺-👪`

`.col-2`        => `.🍺-👫`

`.col-1`        => `.🍺-👆`


The main/basic markup works as follows:

```html
<main class="🔵">
    <div class="🔷">
      <div class="🍺-💥">12</div>
    </div>
    <div class="🔷">
      <div class="🍺-🔟">10</div>
      <div class="🍺-👫">2</div>
    </div>
</main>
```

#### Responsive:

As usual, responsive classes are similar to Bootstrap but _emojified_ 😂

```css
.🍺-xs-#
.🍺-sm-#
.🍺-md-#
.🍺-lg-#
```
Example: _large: 2 rows | medium: 4 rows | small: 3 rows_

```html
<div class="🍺-👫 🍺-md-🍕 🍺-sm-👪">
    <div class="item"></div>
</div>
```



### Support:

Tested in Chrome 48, Firefox 44, Safari 9 and it just works! 👏

### License:

[MIT](LICENSE.md)

