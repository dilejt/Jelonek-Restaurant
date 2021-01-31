declare var $:any;
export function loader(){
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
            $('body').css('overflowY','auto');
        }, 2500);
        $('body').removeClass('loaded');
        $('body').css('overflowY','hidden');
    });
}
