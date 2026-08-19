(function($) { 
    jQuery(window).load(function() {
        if(!$('.block-editor').length > 0){ 
            console.log('front');
            $(document).find('.imghvr-anim-slide-content').each(function() {
                var self = $(this);
                var height = self.prop('scrollHeight') + 'px';
                self.closest('.imghvr').hover(function() { self.css('height', height); }, function() { self.css('height', 0); });
            });
        }
    }); 
})(jQuery);