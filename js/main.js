const searchEl = document.querySelector('.search'); //document 자체는 html이라고 봐도 무방
const searchInputEl = searchEl.querySelector('input');

// addEventListener(event, handler)
searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    // 속성의 이름, 속성 값
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// input 요소의 focus가 해제된 경우 (blur)
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    // 속성의 이름, 속성 값
    searchInputEl.setAttribute('placeholder', '');
});