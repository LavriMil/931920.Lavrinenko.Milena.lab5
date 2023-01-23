let ButtonElems = document.querySelectorAll('Button');
const news = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!';
const slide_news = document.getElementById('slide_news');

slide.addEventListener('click', () => 
{

slide_news.style.display='none';
slide.style.display='none';
});

ButtonElems.forEach((el) => 
{
el.addEventListener('click', () => 
{
slide_news.style.display='block';
slide.style.display='block';
        
slide_news.querySelector('h2').textContent=`Новость ${Array.from(ButtonElems).indexOf(el)+1}`;
slide_news.querySelectorAll('p')[0].textContent=`Новость ${Array.from(ButtonElems).indexOf(el)+1}: ${news}`
});
});

const panel = document.getElementById('slide_news');