/* Author:

*/

$(document).ready(function () {
  $('.container').on('click', '.controls a', function (e) {

    e.preventDefault();
    e.stopPropagation()

    var $tar        = $(e.currentTarget);
    var $section    = $tar.parents('.project');
    var $pictures   = $('.pictures', $section);
    var $slide      = $('.slider', $section);
    var $group      = $('.group', $section);

    if (!$section.hasClass('open')) {
      $section.addClass('open');
    }

    console.log($tar);

    // var currentOffset = parseInt($slide.css('left'));
    var currPos = $slide.data('pos');
    var newPos, targetSlide, next, rightEdge, frameWidth;

    if ($('i', $tar).hasClass('fa-chevron-left')) {
      newPos = currPos - 1;
    } else {
      newPos = currPos + 1;
    }

    if (newPos < 0 || newPos === $group.length) {
      return;
    }

    next = $group.eq(newPos);

    if (newPos === 0) {
      targetSlide = 0;
    } else {
      rightEdge = next.position().left + next.width();
      frameWidth = $pictures.width();
      targetSlide = frameWidth - rightEdge;
    }

    $slide.animate({
      'left': targetSlide
    }, 1000, 'swing', function () {

    });

    $slide.data('pos', newPos);

    if (newPos === 0) {
      $('.fa-chevron-left', $section).addClass('disabled');
    } else {
      $('.fa-chevron-left', $section).removeClass('disabled');
    }

    if (newPos === $group.length - 1) {
      $('.fa-chevron-right', $section).addClass('disabled');
    } else {
      $('.fa-chevron-right', $section).removeClass('disabled');
    }

  });

  $('.container').on('click', 'h2, .pictures', function (e) {
    $tar = $(e.currentTarget).parents('.project');

    if ($tar.hasClass('open')) {
      $('.open').removeClass('open');
    } else {
      $('.open').removeClass('open');
      $tar.addClass('open');
    }
  });
});