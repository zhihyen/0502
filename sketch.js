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
  
  // 計算影像顯示位置 (置中)
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  
  // 在 videoGraphics 上繪製內容 (這裡可以自定義內容)
  videoGraphics.background(255, 0, 0, 100); // 半透明紅色背景
  videoGraphics.fill(255);
  videoGraphics.textSize(32);
  videoGraphics.textAlign(CENTER, CENTER);
  videoGraphics.text('Video Overlay', videoGraphics.width / 2, videoGraphics.height / 2);
  
  // 顯示 videoGraphics 圖形在視訊畫面上方
  image(videoGraphics, x, y - capture.height); // 顯示在視訊畫面上方
  
  // 翻轉影像並顯示攝影機畫面
  push();
  translate(x + capture.width, y); // 移動到影像的右上角
  scale(-1, 1); // 水平翻轉影像
  image(capture, 0, 0, capture.width, capture.height);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  videoGraphics = createGraphics(capture.width, capture.height); // 重新調整圖形大小
}
