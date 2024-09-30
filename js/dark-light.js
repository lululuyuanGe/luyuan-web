function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    const videoSource = document.getElementById('video-source');

    // Change video source based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        videoSource.src = 'images/background/cat-astranaut.mp4'; 
    } else {
        videoSource.src = 'images/background/cat-pool.mp4'; 
    }

    document.getElementById('bg-video').load();

    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const videoSource = document.getElementById('video-source');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        videoSource.src = 'images/background/dark-mode-video.mp4';
    } else {
        videoSource.src = 'images/background/light-mode-video.mp4';
    }
    document.getElementById('bg-video').load();
};
