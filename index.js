document.addEventListener('DOMContentLoaded', () => {

alert("Welcome to my website!");

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        alert('You clicked an image!');
    });
});


document.querySelectorAll('.grid-img').forEach(img => {
img.addEventListener('mouseover', () => {
img.style.transform = 'scale(1.1)';
img.style.transition = 'transform 0.3s';
});
img.addEventListener('mouseout', () => {
img.style.transform = 'scale(1)';
});
});


const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑ Top';
scrollButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; display: none; padding: 10px; background: #fce38a; border: none; border-radius: 5px; cursor: pointer;';
document.body.appendChild(scrollButton);


window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
scrollButton.style.display = 'block';
} else {
scrollButton.style.display = 'none';
}
});

scrollButton.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

});
