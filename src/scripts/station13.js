function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (this.checked) {
    document.getElementById('text').style.backgroundColor = 'red'
  } else {
    document.getElementById('text').style.backgroundColor = ''
  }
}
