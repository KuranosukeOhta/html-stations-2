function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkbox = document.getElementById("check");
  const backGround = document.getElementById("text");

  if (checkbox.checked) {
    backGround.style.backgroundColor = "red";
  } else {
    backGround.style.backgroundColor = "";
  }
}
