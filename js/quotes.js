const quotes = [{
 quote : "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다 "  ,
 author : "생떽쥐베리" 
},
{
    quote : "자신을 내보여라. 그러면 재능이 드러날 것이다. "  ,
    author : "발타사르 그라시안" 
   },
   {
    quote : "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다. "  ,
    author : "오손 웰스" 
   },
   {
    quote : "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다"  ,
    author : "하버트 개서" 
   },{
    quote : "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다. "  ,
    author : "동아프리카속담" 
   },
   {
    quote : "최고에 도달하려면 최저에서 시작하라. "  ,
    author : "P.시루스" 
   },
   {
    quote : "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?"  ,
    author : "이드리스 샤흐" 
   },
   {
    quote : "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다."  ,
    author : "괴테" 
   },{
    quote : "행복은 습관이다,그것을 몸에 지니라"  ,
    author : "허버드" 
   },{
    quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 "  ,
    author : "엘버트 허버드" 
   }]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;