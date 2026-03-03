let animation = document.getElementById('animation');

function animate() {
    animation.style.transform = 'translateX(10px)';
    setTimeout(() => {
        animation.style.transform = 'translateX(-10px)';
        setTimeout(animate, 1000);
    }, 1000);
}

animate();

// لوجو الخضراوات
let logo = document.createElement('div');
logo.style.position = 'fixed';
logo.style.top = '50%';
logo.style.left = '50%';
logo.style.transform = 'translate(-50%, -50%)';
logo.style.width = '100px';
logo.style.height = '100px';
logo.style.borderRadius = '50%';
logo.style.background = 'green';
logo.style.zIndex = '1';
document.body.appendChild(logo);