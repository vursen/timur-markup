$(document).ready(function() {

  $('.b-last-videos__slider').bxSlider({
    slideWidth: 300,
    slideMargin: 20,
    maxSlides: 3,
    pager: false,
    nextText: '',
    prevText: ''
  });

  $('.b-preview').each(function() {
    var $this = $(this);

    $this.append('<img src="' + $this.data('img-preview') + '" class="b-preview__image">');
    $this.append(
      '<div class="b-preview__actions">' +
        '<a href="' + $this.data('img') + '" class="b-preview__actions__zoom"></a>' + 
        '<a href="' + $this.data('src') + '" class="b-preview__actions__src"></a>' + 
      '</div>');
  });

  $('.b-welcome-gallery__slider').bxSlider({
    slideWidth: 140,
    slideMargin: 20,
    maxSlides: 3,
    pager: false,
    nextText: '',
    prevText: ''
  });

});