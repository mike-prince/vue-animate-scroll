# vue-animate-scroll

A small Vue component that provides an easy way to animate elements as they scroll into view.

## Setup

```bash
npm i --save vue-animate-scroll
# or
yarn add vue-animate-scroll
```

Import into your main Javascript file

```javascript
import Vue from 'vue'
import VueAnimate from 'vue-animate-scroll'

Vue.use(VueAnimate)
```

## Usage

#### HTML

```vue
<div v-animate="'slide-up'">Hello</div>

# NB. A string literal (inner single-quotes) should be passed.
```

#### CSS

```css
.animate {
  transition-delay: .1s
  transition-duration: .25s
  transition-timing-function: ease-in
}

.slide-up {
  transform: translateY(0)
}

.slide-up.animate-active {
  transform: translateY(-100px)
}
```

## Options

```vue
Vue.use(VueAnimateScroll, options)
```

```javascript
const options = {
  animateClass: String,  /* Class that gets added to all directive
                            elements. Default 'animate'. */
  activeClass: String,   /* Class that gets added when elements scrolls
                            into view. Default 'animate-active' */
}
```

## Modifiers

| Modifier | Description |
|---|---|
| repeat | Repeats the animation every time it enters the window. |
| fade | Adds a .fade class so opacity can be applied on the transition |

For example to use both ```repeat``` and ```fade```.

```vue
<div v-animate.repeat.fade="'slide-up'">Hello</div>
```
