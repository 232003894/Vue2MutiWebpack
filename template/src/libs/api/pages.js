import {
  pages as _pages
}
from './build_pages'
import * as utils from './h5/utils'

export var pages = _pages

export function addPage(page) {
  return utils.mix(true, pages, page)
}
