$(document).ready(function(){
    $('li').eq(3).hover(function(){
        $('.text1').show()

    })
    $('li').eq(3).mouseleave(function(){
        $('.text1').hide()
    })
    $('li').eq(1).hover(function(){
        $('.text').show()
    })
    $('li').eq(1).mouseleave(function(){
        $('.text').hide()
    }) 
    $('#pull').on('click', function() {
        $('#pull').hide()
        $('.x').show()       
    });
    $('.x').on('click', function() {
        $('#pull').show()
        $('.x').hide()      
    });
    $('#pull').on('click', function() {
        $('.hide').show()
        $('.click').click(function(){
            $('.text2').show()
        })
        $('.click1').click(function(){
            $('.text3').show()
        }) 
    })
    $('.x').on('click', function() {
        $('.hide').hide()
    })  
})