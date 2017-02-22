function getFirstSelector(selector) {
  var elem = document.querySelector(selector);
  return elem
}

function nestedTarget() {
  const nested = document.getElementById('nested');
  const target = nested.getElementsByClassName('target');
  return target[0]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0, l = lis.length; i < l; i ++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  var nodeList = document.querySelectorAll('div#grand-node div');

  for (let i = 0, l = nodeList.length; i < l; i++) {
    if (nodeList[i].querySelectorAll('div').length === 0) {
      return nodeList[i]
    }
  }
}
