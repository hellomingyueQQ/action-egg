import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'action-egg';
  numbersArray2017: number[] = [
    145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
    160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
    175, 176, 177, 178,
  ];
  numbersArray2016: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
    248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
    263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
    278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292,
    293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307,
    308, 309, 310, 311,
  ];
  numbersArray2015: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
    248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
    263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
    278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292,
    293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306,
  ];

  numbersOf17StudioClassroom: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
  ];

  numbersOf16StudioClassroom: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
    248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
    263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
    278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292,
    293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307,
    308, 309, 310, 311, 312,
  ];

  finishedLessons = (
    ((this.numbersArray2017[this.numbersArray2017.length - 1] -
      this.numbersArray2017.length) *
      22) /
    60
  ).toFixed(1);

  get daysFromStart(): number {
    const startDate = new Date('2025-02-22');
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  // 生成随机颜色
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  studioClassrooms: string[] = [
    'BV16i4y1a7rN',
    'BV1cN4y187jx',
    'BV1kb4y1V7wf',
    'BV1Ui4y187q9',
    'BV1fN4y147bY',
    'BV1ge411z7Ya',
    'BV1UC4y1K72T',
    'BV1iN4y1q7Fd',
    'BV1Q94y1F7tx',
    'BV1Rg4y167Sz',
    'BV1AC4y1K74R',
    'BV1dg4y1S7BR',
    'BV1k64y1n7XZ',
    'BV1ec41187mN',
    'BV1G5411q7Zd',
    'BV1ze411m7qF',
    'BV1u5411i7Zg',
    'BV1Ag4y1S79Y',
    'BV1yV41197w6',
    'BV1Fc41147wH',
    'BV1Zk4y1Q7eQ',
    'BV1BT4y1n7an',
    'BV1Ua4y1C7w8',
    'BV16g4y1m7Zq',
    'BV1Hc411s7oK',
    'BV1tT4y1h715',
    'BV1794y1K7Vs',
    'BV1GK4y1B7pv',
    'BV1Pb4y1N7U2',
    'BV1CN4y1H7TB',
    'BV1vg4y127Nf',
    'BV1RT4y1b7uH',
    'BV1Pb4y1P7wa',
    'BV1x64y1w74P',
    'BV1qp4y1m78u',
    'BV1BJ4m1b7Ec',
    'BV1wF4m1u7fq',
    'BV197421P7LK',
    'BV1yy421e7VJ',
    'BV1Qm411X7oW',
    'BV1Zp421o7eX',
    'BV1MB421z7GJ',
    'BV1cJ4m1x7Bz',
    'BV1RK421C7KV',
    'BV1Qx4y117vH',
    'BV1Gy421h78u',
    'BV1zC411z7f4',
    'BV1QF4m1M7Ay',
    'BV12C41147PR',
    'BV1vZ421m7Zb',
    'BV1bz421d7nE',
    'BV1KH4y1a7NZ',
    'BV1ZZ42127Uj',
    'BV15C411W7Vh',
    'BV1MJ4m1s741',
    'BV16A4m137AK',
    'BV1kA4m137wY',
    'BV1DK421b77S',
    'BV13j421S79a',
    'BV15j421D7qC',
    'BV1Tt42187Z3',
    'BV1pm411f7Xm',
    'BV1Ey421B7rZ',
    'BV16u4m1w7Te',
    'BV1aK42147dW',
    'BV1at421t7rq',
    'BV1WC411a7m6',
    'BV1T2421u7jM',
    'BV1c2421T7ta',
    'BV1yH4y157hh',
    'BV1XJ4m1b7ZA',
    'BV1Ay421v7My',
    'BV1Pt421L7iY',
    'BV1Yr421n7zC',
    'BV1cF4m1w7HG',
    'BV1yp421m7v6',
    'BV1tx421C77P',
    'BV1k2421N751',
    'BV1hr42187Kw',
    'BV1e6421F7NB',
    'BV1Dx421k7pt',
    'BV1su4m1T7HZ',
    'BV13H4y1p7c8',
    'BV1qK421a7Ks',
    'BV12M4m197Uq',
    'BV1XA4m1w7o9',
    'BV1pt42137Zh',
    'BV1Wr421b7ur',
    'BV1JE421g7Fv',
    'BV1qp421C75t',
    'BV14J4m157ZK',
    'BV1ff421d7ZL',
    'BV1vr421x7AY',
    'BV1Gr42147Bn',
    'BV18x4y1Y7N7',
    'BV1gE42137Fi',
    'BV17D421s7e4',
    'BV1Km41167Uy',
    'BV1gF4m1K7Fm',
    'BV16i421f7XF',
    'BV1rT421m7Vs',
    'BV1Dz421C7bR',
    'BV1vC41137Hg',
    'BV1Xm421x7Ve',
    'BV1qx4y1h7cu',
    'BV19T42127be',
    'BV1HC411n7Us',
    'BV1Lr421379f',
    'BV1Km411m7Jm',
    'BV19x4y167bS',
    'BV1LC411J7Tf',
    'BV1iT421C7mK',
    'BV18J4m1E7Df',
    'BV1Mw4m1C7d2',
    'BV1Cm41117BR',
    'BV1oE421V72d',
    'BV1rb42187n2',
    'BV11r421E7yJ',
    'BV1DT421X71U',
    'BV1ys421P7tn',
    'BV1TH4y1g7eg',
    'BV1pC41177Dg',
    'BV1zm421u7Gx',
    'BV1d1421z7gk',
    'BV1Fx4y1W7sQ',
    'BV1dw4m1Q7PR',
    'BV1Nx4y1W7mf',
    'BV1pE421G7Np',
    'BV1S1421q79x',
    'BV1zf421m7Hv',
    'BV1qx4y1W7h5',
    'BV1Xr421j7X5',
    'BV1Ww4m1U7bU',
    'BV1bw4m1U7SM',
    'BV1AM4m1z7JS',
    'BV1Pb421B7kM',
    'BV14f42197Ho',
    'BV1Ks421G7Ed',
    'BV19y411a7FY',
    'BV1mM4m1679Y',
    'BV1Db421i7yh',
    'BV1pD421g7Mn',
    'BV1qm42157Dp',
    'BV1QJ4m137rt',
    'BV1ss421g7mi',
    'BV1jf421R7C3',
    'BV1hz421b7EC',
    'BV1r7421R7Mr',
    'BV1uM4m1S7Uf',
    'BV1Lw4m1v75g',
    'BV1mNG9epEeH',
    'BV1mNG9epEBB',
    'BV1q9Vhe5EX9',
    'BV1tWVLeSEis',
    'BV1tvgWeYE2h',
    'BV1x6gWeFEcQ',
    'BV1xLg3eZEG1',
    'BV1rWgCekEHJ',
    'BV16ng8eTEda',
    'BV1AogreGEWt',
    'BV18i3FeBEmG',
    'BV18i3FeBEAX',
    'BV1uN34eyE7B',
    'BV1uN34eyEsG',
    'BV1gP34eLELp',
    'BV1nJh5eLEzc',
    'BV1JQ8oe8ENG',
    'BV1akhNeBE5z',
    'BV1FXhke4Enn',
    'BV1G5hsebE2D',
    'BV1k4haeYEtz',
    'BV1j3aceTEb7',
    'BV1GzaFeFEnz',
    'BV1L5aveAEQc',
    'BV1DvaEeCEro',
    'BV1Zhase6E1T',
    'BV1JXbTeQEPY',
    'BV1zXbTeQE2w',
    'BV1cDbXeDE9u',
    'BV1DzbeeLEGt',
    'BV1j2byeHEJv',
    'BV1xf8We1Eei',
    'BV1FW8kepEN5',
    'BV1FH8ke9ErJ',
    'BV1a98tevE3K',
    'BV1j142187ci',
    'BV1yi421671h',
    'BV1Jw4m1k7NP',
    'BV16S421X7L5',
    'BV1nyvkeiEP5',
    'BV1Wav4e8EG7',
    'BV1uevvecE8o',
    'BV1akvRexErL',
    'BV12VvReLEYC',
    'BV1MxYNeTEv8',
    'BV1NRa1e1ERG',
    'BV1UzaDecECX',
    'BV1QzYbeyE9y',
    'BV1pCYXecEqL',
    'BV1FmYXetEvk',
    'BV1r1YXeZE55',
    'BV13LYqePE2c',
    'BV1WKY1eGEPS',
    'BV1G8eJe9Exm',
    'BV1RSeueFExk',
    'BV1zreueiEwh',
    'BV129WNeyEqg',
    'BV1QjpDeCEr3',
    'BV1tuWxeKEKF',
    'BV1w8WuemEAp',
    'BV17VW7ehET9',
    'BV1MrWdedEJt',
    'BV1saWiecESx',
    'BV1zassesELb',
    'BV1qisseQEuo',
    'BV1iLsGemEh8',
    'BV1ZAHgeTETT',
    'BV1JYnReaEpd',
    'BV1JdndevEPe',
    'BV1TLH4ePEj1',
    'BV1KLH4ePEUA',
    'BV1mZpceaEP5',
    'BV1d3H2eqEwX',
    'BV1ErH9ecE1z',
    'BV1WxpvepEx2',
    'BV1V6pHevEX3',
    'BV19U4revEzJ',
    'BV1vm4reKEBz',
    'BV1ko4HetEcS',
    'BV1BLtcefEPf',
    'BV1CMtAeGESK',
    'BV1iEtceoErR',
    'BV1HYtsevE3s',
    'BV1bbtheaEid',
    'BV1V8t5eoE3P',
    'BV1DwtXe8Erw',
    'BV1CatBeCEo8',
    'BV1s1sDerERD',
    'BV1xysDeGEiS',
    'BV1HtxgeREyn',
    'BV1p4xgexEte',
    'BV1QexVe7EiV',
    'BV1QexVe7EEM',
    'BV1QexVe7EUL',
    'BV1fSxEekEHy',
    'BV14XxbenEBr',
    'BV14XxbenEgR',
    'BV1kMxRejEuj',
    'BV1kMxRejE3m',
    'BV1Wd1rY1EWU',
    'BV1Wd1rY1EhQ',
    'BV1g62sY1Eu8',
    'BV1H62AYKEcp',
    'BV1rE2VYcEVg',
    'BV1rE2VYcEGo',
    'BV1rN2rYCEmf',
    'BV1CP2rY5Ec5',
    'BV1ZWmMYLEn1',
    'BV1osmMYyEGx',
    'BV1g3yTYREBM',
    'BV1u5yTYXEuy',
    'BV1yGyvYoE6C',
    'BV113yvYtEyP',
    'BV1EyypY7EJ4',
    'BV1EyypY7E1U',
    'BV1VWy6YREZb',
    'BV1eWy6YREos',
    'BV13s1gYiEgt',
    'BV1rq17Y6ENP',
    'BV1s2S8YoEHG',
    'BV1s2S8YoE8N',
    'BV17CSHYoEZo',
    'BV1piSHYaEb8',
    'BV1xESSYmEv7',
    'BV1xESSYmEmt',
    'BV1cqDNYDEEi',
    'BV1wiDNYHEAF',
    'BV1FPDXYUEvm',
    'BV1Y4DiYZEQH',
    'BV14JmzYJE9i',
    'BV1TJmzYnEfg',
    'BV1PQmhYxE1w',
    'BV1cfmhYDEXt',
    'BV1znmQYTEnN',
    'BV1UJUwYmEgi',
    'BV1Z5UkYVE8e',
    'BV1B5UkY5E7H',
    'BV17mScYeER1',
    'BV1RVScYoEgG',
    'BV1kPU9YSEAb',
    'BV1kPU9YSEme',
    'BV142BtYfEpj',
    'BV1t1BtY8Ewe',
    'BV1p6z5YnETL',
    'BV1r6z5YJE9R',
    'BV1SFzeYEEMg',
    'BV1uFzeYJEMa',
    'BV1Qy6cYAEha',
    'BV12y6KYBE7U',
    'BV1pJzSYDEQq',
    'BV1pJzSYDEZY',
    'BV1iWioYnEjd',
    'BV1vWioYnEUW',
    'BV1daqWYfEjX',
    'BV19qqWYxEyi',
    'BV1hLqCYGEUv',
    'BV1SJqCYzECk',
    'BV1TQqvY1ELS',
    'BV1TQqvY1ELu',
    'BV1uGkLYuEbA',
    'BV1ggkLY6Ep4',
    'BV18oroYxEyn',
    'BV1eKkKYHEu4',
    'BV1pnk1YLExL',
    'BV1AEk1Y2EtY',
    'BV1qoC3Y1E4y',
    'BV137k9YJEp6',
    'BV1VtCiYkE2n',
    'BV15tCiYkEbf',
    'BV1WrCnYmEtL',
    'BV1y6CnYEEo3',
    'BV1th63YXEPA',
    'BV1M863YWEqo',
    'BV1Af69YeEMb',
    'BV1p966YhEra',
    'BV1p966Y8Eah',
    'BV1WX66YcEeq',
    'BV1MurjYTE36',
    'BV1UTrjYqEWv',
    'BV1zYrRYPEZG',
    'BV1TZraYUE2y',
    'BV1iQcjeKE6W',
    'BV1TEcceCE1f',
    'BV1pwcre2EtQ',
    'BV1d7cXeNEsq',
    'BV1jecbeTEWW',
    'BV19Rcqe9EKf',
    'BV1MYwLeWEx7',
    'BV1bYwLeWENF',
    'BV1qJw6euEBa',
    'BV1GBwHe5EPk',
    'BV1BMf4YbEUa',
    'BV1bifhYdEVx',
    'BV1DqfGYGEq2',
    'BV13qfGYVE37',
    'BV1SqfyYaE69',
    'BV1fbfDYwECh',
    'BV1VjFYe3Ee6',
    'BV1VjFYe3Efv',
    'BV1MfFSe2EJf',
    'BV1becFeCE4t',
    'BV1UWFke4EPk',
    'BV1AbP9etEo2',
    'BV1iFPkemEdR',
    'BV1RWPreGE3A',
    'BV15kNWecEw3',
    'BV1BUNuefEgK',
    'BV1q6NUeBEYz',
    'BV1y7NYeMEmx',
    'BV1hwKjeMETK',
    'BV1hwKjeMEvT',
    'BV1SmKTe1ESW',
    'BV1ftAuexEWh',
    'BV1k8wDeGE3P',
    'BV1qXwfebE14',
    'BV1rUAYeFE89',
    'BV1r2AYehE49',
    'BV11JApeuEzX',
    'BV11JApeuEjH',
    'BV1wkA9eREJE',
    'BV1kWPbe9E1P',
    'BV18jPge2EJZ',
    'BV1TpPHeGEz2',
    'BV1cK9TYhE5Q',
    'BV1ENX9Y9Eyq',
    'BV14c9eYUEFv',
    'BV1Jr95YSENB',
    'BV1be9RY2EUw',
    'BV18e9RY2E6w',
    'BV1Dg9kYyEJs',
    'BV1Wk9XYYEge',
    'BV1tPRgYpE4k',
    'BV1U8RVYwEUB',
    'BV11LQjYtEZL',
    'BV1ikQnYxE4Q',
    'BV1iJQMYXEuS',
  ];

  ITOne: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  ITTwo: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
}
