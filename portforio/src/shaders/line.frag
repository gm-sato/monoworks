// src/shaders/line.frag
precision mediump float;

uniform float u_time;       // 経過時間（秒）
uniform vec2 u_resolution;  // 画面解像度

const float PI = 3.14159265359;

void main() {
  // ピクセルごとの正規化した座標 (0〜1)
  float x = gl_FragCoord.x / u_resolution.x;
  float y = gl_FragCoord.y / u_resolution.y;

  // 【1】波線用のパラメーター
  float amplitude = 0.1;     // 振幅：大きくすると線の上下動が激しくなる
  float frequency = 10.0;    // 周波数：大きくすると波が細かくなる
  float thickness = 0.005;   // 線の太さ

  // 【2】2本の波線の基準位置と位相
  float baseY1 = 0.5;        // 1本目の基準位置（例：画面中央）
  float baseY2 = 0.3;        // 2本目の基準位置（例：やや下側）
  float phase1 = 0.0;
  float phase2 = PI / 2.0;   // 位相シフトで動きをずらす

  // それぞれの波線のY位置を計算
  float lineY1 = baseY1 + amplitude * sin((x + u_time) * frequency + phase1);
  float lineY2 = baseY2 + amplitude * sin((x + u_time) * frequency + phase2);

  // 【3】各波線の描画（smoothstepでエッジを調整）
  float diff1 = abs(y - lineY1);
  float diff2 = abs(y - lineY2);
  float line1 = 1.0 - smoothstep(thickness, thickness + 0.01, diff1);
  float line2 = 1.0 - smoothstep(thickness, thickness + 0.01, diff2);

  // 【4】接続線（DNAの塩基対のような）を描く
  // まず、2本の線の下側と上側を求める
  float lowerBound = min(lineY1, lineY2);
  float upperBound = max(lineY1, lineY2);
  // ピクセルがその範囲内にあるか（step関数で範囲内なら1.0）
  float inConnector = step(lowerBound, y) * step(y, upperBound);

  // さらに、端（接続線が線に「くっつく」部分）では滑らかにフェードさせる
  // 接続線の下端からの距離と上端からの距離それぞれに対してsmoothstepを適用
  float edgeFade = min(
      1.0 - smoothstep(0.0, thickness, y - lowerBound),
      1.0 - smoothstep(0.0, thickness, upperBound - y)
  );
  // これで、下端あるいは上端に近い部分では強く、中央付近はそのままとなります
  float connector = inConnector * edgeFade;

  // 【5】ダッシュ（点線）パターンで接続線を制御
  float dashWidthPixels = 10.0;   // 接続部分が描画される幅（ピクセル単位）
  float gapWidthPixels  = 20.0;    // 接続部分の間隔（ピクセル単位）
  float dashPeriod = dashWidthPixels + gapWidthPixels;
  // gl_FragCoord.xはピクセル単位のx座標を持つので、modで周期を得る
  float dashPattern = step(mod(gl_FragCoord.x, dashPeriod), dashWidthPixels);
  // 接続線にダッシュパターンをかける
  connector *= dashPattern;

  // 【6】最終出力：2本の波線と接続線を合成（maxでうまくくっついた状態に）
  float finalColor = max(max(line1, line2), connector);
  gl_FragColor = vec4(vec3(finalColor), 1.0);
}
