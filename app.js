
const pizzas=['Маргарита','Пепероні','4 Сири','Гавайська'];
const p=document.getElementById('products');
let cart=[];
pizzas.forEach(x=>{let d=document.createElement('div');d.className='card';d.innerHTML=x+' <button onclick="addToCart(\''+x+'\')">Купити</button>';p.appendChild(d);});
function addToCart(x){cart.push(x);render();}
function render(){document.getElementById('cartList').innerHTML=cart.map(i=>'<li>'+i+'</li>').join('');}
function register(){localStorage.setItem('user',document.getElementById('user').value);alert('Збережено');}
