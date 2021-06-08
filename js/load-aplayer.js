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
        name: "春夏秋冬",
        artist: '张国荣',
        url: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/audio/张国荣 - 春夏秋冬.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/img/music_pic/zhang-0.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/starrobe/cdn/lrc/春夏秋冬- 张国荣.lrc'
      }
    ]
  });
});
