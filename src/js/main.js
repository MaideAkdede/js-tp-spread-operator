(function () {
    const SpreadOperator = {
        spread() {
            this.jump = document.querySelector('.jump'); //balise class Jump
            this.jumpText = document.querySelector('.jump').textContent; //Syntaxe de décomposition
            this.jump.textContent = "";
            this.letter();
        },
        letter() {
            //Mettre span autours des lettres- for - structure de controle - controle exécution du code
            for (let lettre of this.jumpText) {
                console.log(lettre);
                //let span = document.createElement('span');
                this.jump.insertAdjacentHTML('beforeend', `<span>${(lettre === " ") ? "\u00A0" : lettre} </span>`)
                // if(lettre === " "){
                //     span.textContent = "\u00A0";
                // } else {
                //     span.textContent = lettre;
                // }
                //jump.appendChild(span);
            }
        }
    };
    SpreadOperator.spread();
})();