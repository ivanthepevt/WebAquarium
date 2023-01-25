const root = document.getElementById('fish-tank');

//Initialize tank with whatever found in storage
function renderfish (i)
{
    var fishclass = 'fish fish' + i.toString();
    var imfishSrc = "fish/" + i.toString() + '.png';
    var bottomparam = Math.floor(Math.random() * 60).toString() + '%';
    var cubezier = (Math.random() * 0.9 + 0.1).toString() + "," + (Math.random() * 0.9 + 0.1).toString() + "," + (Math.random() * 0.6 + 0.1).toString() + "," + (Math.random() * 0.5 + 0.5).toString()
    var animationparam = "fish " + (Math.random() * 45 + 15) + "s cubic-bezier(" + cubezier + ") 0s infinite normal";

    var fish = document.createElement('div');
    fish.className = fishclass;
    fish.style.left = 0;
    fish.style.bottom = bottomparam;
    fish.style.animation = animationparam;

    var imfish = document.createElement('img');
    imfish.onerror = 'this.style.display = "none"';
    imfish.className = 'imfish';
    imfish.src = imfishSrc;

    fish.appendChild(imfish)
    root.appendChild(fish)
}

