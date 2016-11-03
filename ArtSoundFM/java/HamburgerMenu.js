// Hamburger Menu Show + Hide

$(document).ready(function(){
    $(".navicons > #menuicon").click(function(){
        $(".nav > li").toggle(500);
		$(".pagewrapper").toggle();
        Resizer('')
        if ($(".pagewrapper").css('display') == 'none'){
            $('#menuicon').css('color', '#79e1bc')
        } else {
            $('#menuicon').css('color', 'white')
        }
        $('#fbicon').toggle();
    });
});
