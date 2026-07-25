    document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('modeSwitcher');
    const currentMode = localStorage.getItem('theme') || 'light';


    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        switcher.title = 'Jour';
    }

    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        switcher.title = mode === 'dark' ? 'Jour' : 'Nuit';
        localStorage.setItem('theme', mode);
    });
});