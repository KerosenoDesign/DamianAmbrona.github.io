
document.addEventListener("DOMContentLoaded", function () {

    function wrapWordsInSpan(elementId) {
        const paragraph = document.getElementById(elementId);
        const words = paragraph.innerText.split(' '); 
        paragraph.innerHTML = ''; 

        words.forEach(word => {
            const span = document.createElement('span'); 
            span.innerText = word + ' '; 
            paragraph.appendChild(span); 
        });
    }


    wrapWordsInSpan('text1');
    wrapWordsInSpan('text2');
});