
var currentSlide;
var $lg;
var album = {
    init: function (settings) {

      album.initLightGallery();
      album.slideLoaded();
      album.slideClicked();
  
    },
  
    initLightGallery: function () {
        $lg = $('#lightgallery');
        $lg.lightGallery({
            mode: 'lg-fade',
     
    
        });
    },
  
    slideLoaded: function () {
        $lg.on('onAfterSlide.lg',function(event, index, fromTouch, fromThumb){
            currentSlide = fromTouch+1;
            var capt = $(".lg-sub-html");
            if (localStorage.getItem("photo"+currentSlide)==1){
                capt.html("Вам понравилась эта фотография!");
            } else {
                capt.html("");
            }
            console.log(index, fromTouch, fromThumb);
        });
        $lg.on('onAferAppendSlide.lg',function(){
            var capt = $(".lg-sub-html");
            if (localStorage.getItem("photo"+currentSlide)==1){
                capt.html("Вам понравилась эта фотография!");
            } else {
                capt.html("");
            }
        });
  
    },
  
    slideClicked: function () {
        $lg.on('onSlideClick.lg',function(event){
            // var str = "img/cats/orig/"+(currentSlide)+".jpeg";
        // var a = $("#lightgallery").children("a[href ~= '"+str+"']").attr("data-sub-html","Вам понравилась эта фотография!");
        var capt = $(".lg-sub-html");
        if (capt.html()=="Вам понравилась эта фотография!") {
            capt.html("");
            localStorage.setItem("photo"+currentSlide,0);
        } else {
            capt.html("Вам понравилась эта фотография!");
            localStorage.setItem("photo"+currentSlide,1);
    
        }
        });
    },

  };
  
  $(document).ready(album.init);
