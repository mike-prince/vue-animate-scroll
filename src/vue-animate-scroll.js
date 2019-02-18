class Animate {
  constructor (os) {
    this.os = os
  }

  activate (el, binding) {
    const mod = binding.modifiers
    const value = binding.value

    const animateClass = this.os.animateClass || 'animate'
    const activeClass = this.os.activeClass || 'animate-active'

    const { top, bottom } = el.getBoundingClientRect()
    const height = document.documentElement.clientHeight
    const inWindow = top < height && bottom > 0

    el.classList.add(binding.value)

    if (mod.fade) {
      el.classList.add('fade')
    }

    if (inWindow) {
      el.classList.add(activeClass)
    } else if (mod.repeat) {
      el.classList.remove(activeClass)
    }
  }
}

export default {
  install (Vue, os = {}) {
    let a = new Animate(os)

    Vue.directive('animate', {
      bind (el, binding) {
        el.classList.add(os.animateClass || 'animate')
      },
      inserted (el, binding) {
        a.activate(el, binding)
        window.addEventListener('scroll', function () {
          a.activate(el, binding)
        })
      }
    })
  }
}
