function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    const video = document.getElementById('bg-video');
    const videoSource = document.getElementById('video-source');

    video.classList.add('fade-out');

    setTimeout(() => {
        if (document.body.classList.contains('dark-mode')) {
            videoSource.src = 'images/background/dark-mode-video.mp4';
        } else {
            videoSource.src = 'images/background/light-mode-video.mp4';
        }
        
        video.load();
        video.classList.remove('fade-out');video
    }, 500);

    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('video-source').src = 'images/background/dark-mode-video.mp4';
    } else {
        document.getElementById('video-source').src = 'images/background/light-mode-video.mp4';
    }
    document.getElementById('bg-video').load();
};
