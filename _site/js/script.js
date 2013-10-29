/* Author:

*/

$(document).ready(function () {
  $('.controls').on('click', 'a', function (e) {

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

    // var currentOffset = parseInt($slide.css('left'));
    var currPos = $slide.data('pos');
    var newPos, targetSlide, next, rightEdge, frameWidth;
    console.log('Currr pos ' + currPos);

    if ($('i', $tar).hasClass('fa-chevron-left')) {
      newPos = currPos - 1;
    } else {
      newPos = currPos + 1;
    }

    console.log('new pos ' + newPos);

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
      $('.fa-chevron-left').addClass('disabled');
    } else {
      $('.fa-chevron-left').removeClass('disabled');
    }

    if (newPos === $group.length - 1) {
      $('.fa-chevron-right').addClass('disabled');
    } else {
      $('.fa-chevron-right').removeClass('disabled');
    }

  });

  $('.container').on('click', '.project', function (e) {
    $tar = $(e.currentTarget);

    if ($tar.hasClass('open')) {
      $('.open').removeClass('open');
    } else {
      $('.open').removeClass('open');
      $tar.addClass('open');
    }
  });
});