/**
 * Polyfill element.matches(selector)
 */
/* istanbul ignore next */
export default (Element) => {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector
  }
}
