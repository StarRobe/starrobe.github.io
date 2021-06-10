document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    lrcType: 3,
    audio: [
      {
        name: '春夏秋冬',
        artist: '张国荣',
        url: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/春夏秋冬- 张国荣.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/zgr-1.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/春夏秋冬- 张国荣.lrc'
      },
      {
        name: '遥远的她',
        artist: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/遥远的她 - 张学友.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/zxy-0.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/遥远的她 - 张学友.lrc'
      },
      {
        name: '月半小夜曲',
        artist: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/月半小夜曲 - 李克勤.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/lkq-0.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/月半小夜曲 - 李克勤.lrc'
      },
      {
        name: '天使的翅膀',
        artist: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/天使的翅膀 - 徐誉滕.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/xyt-0.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/天使的翅膀 - 徐誉滕.lrc'
      },
      {
        name: '一生所爱',
        artist: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/一生所爱 - 卢冠廷.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/lgy-0.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/一生所爱 - 卢冠廷.lrc'
      }     
    ]
  });
});
