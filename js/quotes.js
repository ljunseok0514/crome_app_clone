const quotes = [
  {
    quote: "The Way to Get Started is to Quit Talking and Begin Doing",
    author: "Walt Disney",
  },
  {
    quote:
      "거리낌 없이 한 시간을 낭비하는 사람은 아직 삶의 가치를 발견하지 못한 사람이다.",
    author: "찰스다윈",
  },
  {
    quote:
      "사람은 망설이지만 시간은 망설이지 않는다. 잃어버린 시간은 되돌아오지 않는다.",
    author: "벤자민 프랭클린",
  },
  {
    quote:
      "부모들이 우리의 어린 시절을 꾸며주셨으니 우리는 그들의 말년을 꾸며주어야 한다.",
    author: "생텍쥐페리",
  },
  {
    quote:
      "새는 알을 깨고 나온다. 알은 세계이다. 태어나려는 자는 하나의 세계를 파괴해야한다.",
    author: "헤르만헤세",
  },
  {
    quote:
      "일은 해보면 쉬운 법이다. 그럼에도 시작은 하지 않고 어렵다고만 생각하기에 할 수 있는 일들을 놓친다.",
    author: "맹자",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "승리는 가장 끈기 있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트",
  },
  {
    quote: "지나간 슬픔에 새 눈물을 낭비하지 마라.",
    author: "에우리피데스",
  },
  {
    quote: "그 사람을 알고 싶으면 그의 친구를 보라",
    author: "공자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// console.log(document.querySelector("#quote span:last-child"));

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
