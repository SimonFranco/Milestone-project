for (var i=27;i>0;i--){
    let slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id','slider'+i)
    document.getElementById('game').append(slider);
}
var aniWidth = 500;
var win = document.getElementById('slider26');
win.classList.remove('animate')
var level = document.getElementById('slider27')
level.classList.remove('animate')
level.textContent = 0;

function winner(){
    alert('you win!')
}

function stopSliding(slider){
        if (slider== 26){
            winner()
            location.reload()
        }
    level.textContent = slider;
    
    var score ='Score:'.concat(slider-1);
    var sliderCurrent = document.getElementById('slider'.concat(slider))
    var sliderAbove = document.getElementById('slider'.concat(slider+1))
    if(slider ==1){
        var sliderBelow = sliderCurrent
    }else{
        var sliderBelow = document.getElementById('slider'+ (slider-1 ))
    }
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue('left');
    sliderCurrent.classList.remove('animate');
    // Keeps slider where clicked
    sliderCurrent.style.left = left;
    var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue('width'));
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue('left'))
    left = parseInt(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);
    if( difference>width || difference <-width){
            alert(score)
            location.reload()
        }
        //aligns sliders to the left
        if (difference <0){
            left = left + absDifference;
            sliderCurrent.style.left = left.toString().concat("px")
        }else{
            left = left - difference;
            sliderCurrent.style.left = left.toString().concat('px');
        }
        var offset = (width - absDifference).toString().concat('px');
        sliderCurrent.style.width = offset;
        sliderAbove.style.width = offset;
        sliderAbove.style.visibility = 'visible';
        var newWidth = aniWidth + absDifference;
        document.documentElement.style.setProperty('--width', newWidth + 'px');
        var onclick =  'stopSliding(' + (slider+1) + ')';
        document.getElementById('btn').setAttribute('onclick', onclick);
    }