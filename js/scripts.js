(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    
    resizeCanvas();
    context.fillStyle = "brown";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    window.addEventListener('resize', resizeCanvas);
})();