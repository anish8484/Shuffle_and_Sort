(function(){
    var table = document.getElementById("table");
      
    function createChild(num) {
        for(var i = 1; i <= num; i++) {
            var element = document.createElement('div');
            element.setAttribute('id', i);
            element.setAttribute('class', 'shuffle' + ' color' +i);
            element.innerText = i;
            table.appendChild(element);
        }
    }

    function sort() {
        var elementsArr = getElementsAsArr();
        removeChild(elementsArr);
        elementsArr.sort(function(a, b) {return a.id - b.id});
        addChild(elementsArr);
    }

    function getElementsAsArr(){
        var item = table.getElementsByClassName('shuffle')
        var elementsArr = Array.prototype.slice.call(item);
        return elementsArr;
    }
    function removeChild(elementsArr) {
        elementsArr.forEach(function (element) {
            table.removeChild(element);
        });
    }
    
    function addChild(elementsArr) {
        elementsArr.forEach(function (element) {
            table.appendChild(element);
        });
    }
    
    function shuffleArr(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
              
    function shuffle() {
        var elementsArr = getElementsAsArr();
        removeChild(elementsArr);
        shuffleArr(elementsArr);
        addChild(elementsArr);
    }

    document.onload = function(){createChild(9)};
    
    document.onload();

    var shuffleButton = document.querySelector("#shuffleButton");
    shuffleButton.addEventListener('click', function(){
        shuffle();
    });
    var sortButton = document.querySelector("#sortButton");
    sortButton.addEventListener('click', function(){
        sort();
    });
})()
    

