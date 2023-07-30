function displayList() {
  let lists = fruits.getElementsByTagName('p')
  let newLists = document.createElement('ul')
  for (let i = 0; i < lists.length; i++) {
    let li = document.createElement('li')
    li.textContent = lists.item(i).innerText
    newLists.appendChild(li)
  }
  fruits.replaceChildren(newLists)
}
