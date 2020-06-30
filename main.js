let bodyElement = document.querySelector("body")
bodyElement.append()

let coin = {
    state: 0,
    flip: function () {

        this.state = Math.round(Math.random())

    },
    toString: function () {
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.className = "image"

        if (this.state === 0) {
            image.src = "https://s.clipartkey.com/mpngs/s/242-2425364_heads-free-images-at-head-of-a-quarter.png"
        } else {
            image.src = "https://www.nicepng.com/png/detail/146-1464848_quarter-tail-png-tails-on-a-coin.png"
        }
        return image;
    },


    
};
function display20Flips() {
    for (let index = 1; index <= 20; index = index + 1) {
        coin.flip()
        coin.toString()
        bodyElement.append(coin.toString())
    }
}

function display20Images() {
    for (let index = 1; index <= 20; index = index + 1) {
        coin.flip()
        coin.toHTML()
        bodyElement.append(coin.toHTML())
    } 
}


display20Flips()

display20Images()