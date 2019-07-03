# Verly Range Slider

Range sliders with some verlet physics magic!

![Verly Range Slider](./assets/screenshot.png)

## Usage

Download

```bash
git clone https://github.com/anuraghazra/VerlyRangeSlider.git
```

add verly.js link to your head

```html
<script src="https://cdn.jsdelivr.net/gh/anuraghazra/Verly.js@v1.1.3/dist/verly.bundle.js"></script>
```

import the VerlyRange.js and style.css

```html
<link rel="stylesheet" href="./src/style.css" />
<script src="./src/VerlyRange.js"></script>
```

basic markup

```html
<label class="slidecontainer">
  <span>My Slider</span>
  <input class="slider" id="my-slider" type="range" min="1" step="0.01" max="100" value="20" />
</label>
```

in your js file

```javascript
VerlyRange("my-slider");
```

---

Verly range slider is made with [Verly.js](https://github.com/anuraghazra/Verly.js)

Made with :heart: and Javascript by [Anurag Hazra](http://anuraghazra.github.io)


