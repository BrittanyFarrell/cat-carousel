/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */
$('.thumbnail').on('click', e => {
    console.log(e.target);
  });

  function handleCatClicks() {
    $('.thumbnail').on('click', (e) => {
        const newCatSrc = $(e.target).attr('src');
        $('.hero img').attr('src', newCatSrc);
      });
  }

  function handleCatAlts() {
    $('.thumbnail').on('click', (e) => {
        const newCatSrc = $(e.target).attr('alt');
        $('.hero img').attr('alt', newCatSrc);
      });
  }
  
  $(handleCatClicks);
  $(handleCatAlts);