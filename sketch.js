let capture;
let videoGraphics;

function setup() {
  // 創建全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 設定背景顏色
  background('#b8bedd');
  
  // 啟用攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的攝影機影像
  
  // 創建與視訊畫面相同大小的圖形
  videoGraphics = createGraphics(capture.width, capture.height);
}

function draw() {
  // 設定背景顏色
  background('#b8bedd'); // 更改背景顏色為 #b8bedd
  
  // 確保 capture.width 和 capture.height 正確
  let videoWidth = capture.width;
  let videoHeight = capture.height;

  // 計算影像顯示位置 (置中)
  let x = (width - videoWidth) / 2;
  let y = (height - videoHeight) / 2;
  
  // 在 videoGraphics 上繪製內容
  videoGraphics.background(0); // 設定背景為黑色
  
  // 循環繪製圓形
  for (let i = 0; i < videoWidth; i += 20) {
    for (let j = 0; j < videoHeight; j += 20) {
      // 從攝影機畫面取得顏色
      let col = capture.get(i, j);
      videoGraphics.fill(col);
      videoGraphics.noStroke();
      videoGraphics.ellipse(i + 10, j + 10, 15, 15); // 繪製圓形，置中於單位格
    }
  }
  
  // 顯示 videoGraphics 圖形，覆蓋在攝影機畫面上
  image(videoGraphics, x, y, videoWidth, videoHeight); // 覆蓋在攝影機畫面上
  
  // 翻轉影像並顯示攝影機畫面
  push();
  translate(x + videoWidth, y); // 移動到影像的右上角
  scale(-1, 1); // 水平翻轉影像
  image(capture, 0, 0, videoWidth, videoHeight);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  videoGraphics = createGraphics(capture.width, capture.height); // 重新調整圖形大小
}
