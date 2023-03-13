 
    // Set slideShowSpeed (milliseconds)
    var slideShowSpeed = 3000;
    // Duration of crossfade (seconds)
    var crossFadeDuration = 3;
    // Specify the image files
    var Pic = new Array();
    
    Pic[0] = 'images/slide1.jpg'
    Pic[1] = 'images/slide2.jpg'
    Pic[2] = 'images/slide3.jpg'
    Pic[3] = 'images/slide4.jpg'
    Pic[4] = 'images/slide5.jpg'
    Pic[5] = 'images/slide7(1).jpg'
    Pic[6] = 'images/slide7.jpg'
    Pic[7] = 'images/slide8.jpg'
    
    
    
    var t;
    var j = 0;
    var p = Pic.length;
    var preLoad = new Array();
    for (i = 0; i < p; i++) {
    preLoad[i] = new Image();
    preLoad[i].src = Pic[i];
    }
    function runSlideShow() {
    if (document.all) {
    document.images.SlideShow.style.filter="blendTrans(duration=2)";
    document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)";
    document.images.SlideShow.filters.blendTrans.Apply();
    }
    document.images.SlideShow.src = preLoad[j].src;
    if (document.all) {
    document.images.SlideShow.filters.blendTrans.Play();
    }
    j = j + 1;
    if (j > (p - 1)) j = 0;
    t = setTimeout('runSlideShow()', slideShowSpeed);
    }