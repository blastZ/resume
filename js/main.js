$(document).ready(function(){
  $("#pagepiling").pagepiling({
    verticalCentered: false,
    navigation: {
            'textColor': '#000',
            'bulletsColor': '#000000',
            'position': 'left',
            'tooltips': ['Home', 'Professions', 'Projects', 'Education', 'Contact Me']
    },
    loopBottom: true,
    scrollingSpeed: 400,
    afterRender: function(anchorLink, index){
        $("#arrow").on("click",function(){
          $.fn.pagepiling.moveSectionDown();
        });
    },
    onLeave: function(index, nextIndex, direction){
        var $pages = $('.section');
        for (var i = 0; i < $pages.length; ++i) {
            if (i + 1 !== nextIndex) {
                $($pages[i]).addClass('leaving');
            } else {
                $($pages[i]).removeClass('leaving');
            }
        }

    },
    afterLoad: function(anchorLink, index){
    }
  });
});
