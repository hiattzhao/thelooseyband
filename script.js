// Basic interactivity for the Loosey band website
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.links-list a');

    // Add a random delay to hover animations for a DIY feel
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const randomRotate = (Math.random() - 0.5) * 4;
            link.style.transform = `skewX(-5deg) rotate(${randomRotate}deg)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = '';
        });
    });

    // Console easter egg
    console.log("%cLOOSEY NYC PUNK", "color: #ff0055; font-size: 24px; font-weight: bold; background: black; padding: 10px;");
});
