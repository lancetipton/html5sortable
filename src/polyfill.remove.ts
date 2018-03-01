/**
 * Polyfill element.remove()
 */
/* istanbul ignore next */
export default (arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove () {
        if (this.parentNode !== null) {
          this.parentNode.removeChild(this)
        }
      }
    })
  })
}
