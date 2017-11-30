import { mountComponents } from 'react-rails-ujs'
import ElectionPrograms from './components/ElectionPrograms'
require('bootstrap')
require('fullpage.js')

const mountFullpage = () => {
  $('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: true,
    // anchors: ['page1', 'page2', 'page3', 'page4'],
    // navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
    showActiveTooltip: true,
    navigation: true,
    navigationPosition: 'right',
    css3: false,
    lazyLoading: true
  })
}
const mountToolitp = () => {
  $('[data-toggle="tooltip"]').tooltip()
}

document.addEventListener('DOMContentLoaded', () => {
  mountToolitp()
  mountFullpage()
  mountComponents({
    ElectionPrograms
  })
  // mountComponents is needed since there is an issue with jquery3 onReady method
  // https://github.com/reactjs/react-rails/issues/742
})