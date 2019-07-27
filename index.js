window.onload = function() {
  if (window.location.href.indexOf("pid") !== -1) {
    window.location.href = "file:///C:/Users/HAL%209000/Desktop/html/index.html";
  }
  let pswpElement = document.querySelectorAll('.pswp')[0];
  let imageArr = document.getElementsByClassName("ps-image");
  let slides = [];
  for (let i = 0; i < imageArr.length; i++) {
    slides.push({
      src: imageArr[i].src,
      w: imageArr[i].naturalWidth,
      h: imageArr[i].naturalHeight,
    });
    imageArr[i].addEventListener("click", function() {
      function showSidebar() {
        if (window.visualViewport.width <= 1024) {
          console.log("manje od 1000")
          document.getElementById("sidebar").style.display = "none";
          document.getElementById("sidebar").style.opacity = "0";
          document.getElementsByClassName("pswp__scroll-wrap")[0].style.position = "absolute";
          document.getElementsByClassName("pswp__scroll-wrap")[0].style.left = "-175px";
        } else if (window.visualViewport.width > 1000) {
          if (document.getElementsByClassName("pswp")[0].classList.contains("pswp--open")) {
            document.getElementById("sidebar").style.display = "inline-block";
            document.getElementById("sidebar").style.opacity = "1";
          }
          document.getElementsByClassName("pswp__scroll-wrap")[0].style.position = "relative";
          document.getElementsByClassName("pswp__scroll-wrap")[0].style.left = "0";
        }
      }
      setTimeout(() => {
        showSidebar();
      }, 0);
      window.addEventListener("resize", () => {
        showSidebar();
      });
      document.getElementById("close-lightbox").addEventListener("click", () => {
        gallery.close();
      })
      let index = parseInt(imageArr[i].getAttribute("index"));
      let options = {
        showAnimationDuration: 200,
        index: index,
        closeOnScroll: false
      };
      let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, slides, options);
      document.getElementById("sidebar").style.display = "inline-block";
      gallery.init();
      gallery.listen("close", function() {
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("sidebar").style.opacity = "0";
      })
      if (window.screen.width < 700 || window.screen.height < 700) {
        gallery.close();
      }
    })
  }
}
