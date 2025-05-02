# 20250502 上課筆記

---
## 第一條指令


```
let capture;

function setup() {
  // 創建全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 設定背景顏色
  background('#1b263b');
  
  // 啟用攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的攝影機影像
}

function draw() {
  // 設定背景顏色
  background('#1b263b');
  
  // 計算影像顯示位置 (置中)
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  
  // 繪製攝影機影像
  image(capture, x, y, capture.width, capture.height);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}

```

產生一個全螢幕畫布
背景顏色為1b263b
擷取攝影機的影像，正常的顯示在視窗中間
影像寬高為視窗的80%大小
請把程式寫在sketch.js

說明：
createCanvas(windowWidth, windowHeight)：創建全螢幕畫布。
background('#1b263b')：設定背景顏色為深藍色。
createCapture(VIDEO)：啟用攝影機，並擷取影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8)：設定影像寬高為視窗的 80%。
image(capture, x, y, capture.width, capture.height)：將攝影機影像繪製在畫布上，並置中顯示。
windowResized：當視窗大小改變時，重新調整畫布和影像大小。

---
