# Verly Range Slider

Range sliders with some verlet physics magic!

Checkout [Verly Range Slider's Case Study](https://anuraghazra.github.io/case-studies/verly-range-slider).

![Verly Range Slider](./assets/screenshot.png)

## Usage

Download

```bash
git clone https://github.com/anuraghazra/VerlyRangeSlider.git
```

OR

copy paste this code to your page header

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/anuraghazra/VerlyRangeSlider@v1.0.2/src/style.css" />
<script src="https://cdn.jsdelivr.net/gh/anuraghazra/Verly.js@v1.1.4/dist/verly.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/gh/anuraghazra/VerlyRangeSlider@v1.0.2/src/VerlyRange.js"></script>
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
// id, color
VerlyRange('my-slider', '#655ecf');
```

---

Verly range slider is made with [Verly.js](https://github.com/anuraghazra/Verly.js)

Made with :heart: and Javascript by [Anurag Hazra](http://anuraghazra.github.io)


