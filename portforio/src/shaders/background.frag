// src/shaders/background.frag

precision mediump float;

uniform float u_time;         // 時間
uniform vec2 u_resolution;    // 解像度

// πを定義（GLSL内に既定の定数はないので自前で定義）
const float PI = 3.14159265359;

void main() {
  // 画面上のピクセル位置を[0.0, 1.0]に正規化
  vec2 st = gl_FragCoord.xy / u_resolution;

  // 中心を (0.5, 0.5) とした座標に変換
  vec2 pos = st - 0.5;

  // 半径rと角度thetaを求める (atan2 を使う場合は要注意。GLSLではatan(y, x) = atan2(y, x))
  float r = length(pos);
  float theta = atan(pos.y, pos.x);

  // シェーダー時間と組み合わせてうねらせる例
  // 時間と半径を使って角度に揺らぎを加える
  float timeFactor = u_time * 0.2;   // 時間に応じる速さ
  float swirlTurns = 2.0;           // 渦巻きの回転数
  float swirlAngle = swirlTurns * 2.0 * PI; // 中心→外周まで何回転するか

  // 「角度theta - (半径に応じた角度)」でうねりを表現
  // さらにtimeFactorでゆったり回転させる
  float swirl = theta - (swirlAngle * r) - timeFactor;

  // 複数の線を生成するためsinを使う
  // 値を大きくすると線の本数が増える
  float lineDensity = 50.0;  // 線の密度
  float wave = sin(swirl * lineDensity);

  // waveが 0付近で明るくなるようにする
  // threshold(しきい値)を決めて、線をモノクロのパターンに
  // step(a, x)  => x < a のとき 0.0, x >= a のとき 1.0
  // smoothstep(edge0, edge1, x) => x が edge0〜edge1 の間で滑らかに変化
  // ここでは |wave| が小さいほど色が白に近づくようにする
  float lineThickness = 0.05; // 線の太さの調整用
  float intensity = 1.0 - smoothstep(0.0, lineThickness, abs(wave));

  // 背景を黒、線を白っぽくする（モノクロ）
  // intensityが高い(=1.0)ほど白になる
  vec3 color = vec3(intensity);

  gl_FragColor = vec4(color, 1.0);
}
