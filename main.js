$(window).scroll(function() {
    if($(this).scrollTop()> 690) {
        $('.htm').prop('className', 'htm1');
        $('.css').prop('className', 'css1');
        $('.js').prop('className', 'js1');
        $('.jq').prop('className', 'jq1');
        $('.sass').prop('className', 'sass1');
        $('.bt').prop('className', 'bt1');
    }
})