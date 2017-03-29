function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div div div div')
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for(var i = 0; i < ranks.length; i++)  {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML + n)
  }
  return ranks
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div')
}
