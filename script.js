
// Stars
const sc=document.getElementById('stars-canvas');const sctx=sc.getContext('2d');
let sW,sH;function resizeS(){sW=sc.width=window.innerWidth;sH=sc.height=window.innerHeight}resizeS();window.addEventListener('resize',resizeS);
const stars=[];for(let i=0;i<400;i++)stars.push({x:Math.random()*3000,y:Math.random()*3000,r:Math.random()*1.5+0.3,a:Math.random(),f:Math.random()*0.015+0.005});
let scrollY=0;window.addEventListener('scroll',()=>scrollY=window.scrollY);
function drawStars(){
  sctx.clearRect(0,0,sW,sH);
  stars.forEach(s=>{s.a+=s.f;const a=0.3+0.7*Math.abs(Math.sin(s.a));sctx.fillStyle=`rgba(220,210,255,${a})`;sctx.beginPath();sctx.arc((s.x+scrollY*0.05)%sW,(s.y+scrollY*0.02)%sH,s.r,0,Math.PI*2);sctx.fill();});
  requestAnimationFrame(drawStars);
}drawStars();
 
// Cursor
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
function ar(){rx+=(mx-rx)*0.1;ry+=(my-ry)*0.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar)}ar();
 
// Reveal
const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')}),{threshold:0.1});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
