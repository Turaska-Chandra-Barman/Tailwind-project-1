const html = document.getElementById('darkHtml');
const btn = document.getElementById('switch');

console.log(btn);
btn.addEventListener('click',function(e){
    html.classList.toggle('dark')
})