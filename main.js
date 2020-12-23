var glide = new Glide('#intro', {
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    gap:300,
    autoplay: 2000,
    breakpoints: {
      1200: {
        perView: 1,
        
      },
      480: {
        perView: 1
      }
    }
  })
  glide.mount();