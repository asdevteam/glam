
(function($) {
    $(document).ready(function() {
        var mdSliderPanel = new MdSliderPanel();
        mdSliderPanel.init();
        $('#md-slider-edit').submit(function() {
            $("#edit-slider-data-save").val($.objectToString(mdSliderPanel.getSliderData()));
        });
    });
})(jQuery);
