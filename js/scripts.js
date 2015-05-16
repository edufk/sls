(function($) {
  $(document).ready(function(){

    /**
    * Handle the left column tabs on page 1 and 2.
    */
    $('.tabs-container .tabs a').click(function(e) {
      e.preventDefault();

      // Remove the active class from the current tab.
      $('.tabs-container .tabs a.active, .tabs-container .tabs-content .tab-content.active').removeClass('active');

      // Add active class to this tab.
      $(this).addClass('active');
      $('.tabs-container .tabs-content .tab-content#tab-content-' + $(this).data('tab')).addClass('active');
    });

    /**
    * Handle navigation between pages 1 and 2.
    */
    $('a.page-nav').click(function(e){
      e.preventDefault();
      goToPage($(this).data('page'));
    });

    /**
    * Handle the Check all link on Page 3.
    */
    $('a.check-all').click(function(e){
      e.preventDefault();

      if ($('#page-3 .page-content td.green input').is(':checked')) {
        $('#page-3 .page-content td.green input').prop('checked', false);
      }
      else {
        $('#page-3 .page-content td.green input').prop('checked', true);
      }
    });

    /**
    * Adjunst the width of the textboxes on page 2.
    */
    $('#page-2 .values input').each(function(){
      var maxLength = parseInt($(this).attr('maxlength'));
      if (maxLength < 50) {
        $(this).css('width', (maxLength + 1) + 'ch');
      }
    });

    /**
    * Handle the Clear button.
    */
    $('.nav a.clear').click(function(e){
      e.preventDefault();

      // Clear all text inputs in all three pages.
      $('.page input[type=text], .page textarea').val('');
      $('#page-3 .page-content td input').prop('checked', false);
    });
  });

  /**
  * Show a different page.
  *
  * @param {integer} page
  *   The page number to show.
  */
  function goToPage(page) {

    if ($('.page#page-' + page).hasClass('page-full')) {
      $('.container .column').hide();
      $('.page.active').removeClass('active');
      $('.page#page-' + page).show().addClass('active');
    }
    else {

      // If the current page is a full page, hide it and show the columns.
      if ($('.page.active').hasClass('page-full')) {
        $('.container .column').show();
        $('.page.active').hide();
      }
      // Remove active class from current page.
      $('.page.active, a.page-nav.active').removeClass('active');

      // Add active class to this page.
      $('.page#page-' + page).addClass('active');

      // Add active class to links to this page.
      $('a.page-nav[data-page=' + page + ']').addClass('active');
    }
  }
})(jQuery);
