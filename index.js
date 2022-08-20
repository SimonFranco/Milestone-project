for (var i=25;i>0;i--){
    let slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id','slider'+i)
    document.getElementById('game').append(slider);
}

function stopSliding(slider){
    var sliderCurrent = document.getElementById('slider'+(slider))
    var sliderAbove = document.getElementById('slider'+(slider+1))
    var sliderBelow = document.getElementById('slider'+ (slider-1 ))
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue('left');
    sliderCurrent.classList.remove('animate');
    // sliderCurrent.style.left = left;
    // var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue('width'));
    // var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue('left'))
    // // left = parseInt(left);
    // var difference = left - leftBelow;
    // var absDifference = math.abs(difference);
    // if (difference < 0){
    //     left = left + absDifference;
    //     sliderCurrent.style.left = left.toString().concat("px")
    // }else{
    //     left = left - difference;
    //     sliderCurrent.style.left = left.toString().concat('px');
    // }
    // var offset =

}