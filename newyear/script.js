const video = document.getElementById('my-video');
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', async () => {
    try {
        // 播放视频
        await video.play();

        // 尝试全屏
        if (video.requestFullscreen) {
            await video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            await video.webkitRequestFullscreen(); // Safari/旧版 Chrome
        } else if (video.mozRequestFullScreen) {
            await video.mozRequestFullScreen(); // Firefox
        } else if (video.msRequestFullscreen) {
            await video.msRequestFullscreen(); // IE/Edge
        } else {
            console.warn("该浏览器不支持全屏 API");
        }
        // 隐藏播放按钮
        playButton.style.display = 'none';
    } catch (error) {
        console.error("播放或全屏失败：", error);
    }
});
document.getElementById("play-button").addEventListener("click", function() {
    const box = document.querySelector(".box");
    if (box) {
        box.style.display = "none";
    }
});
// 视频加载完成后隐藏加载指示灯功能
function hideLoading() {
    var loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}