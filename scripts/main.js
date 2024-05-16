(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  /**
   * Big Picture Popup for images and videos
   */
   document.querySelectorAll("[data-bigpicture]").forEach((function(e) {
     e.addEventListener("click", (function(t){
       t.preventDefault();
       const data =JSON.parse(e.dataset.bigpicture)
       BigPicture({
        el: t.target,
        ...data
      })
     })
    )
  }))

  /**
   * Big Picture Popup for Photo Gallary
   */
   document.querySelectorAll(".bp-gallery a").forEach((function(e) {
    var caption = e.querySelector('figcaption')
    var img = e.querySelector('img')
    // set the link present on the item to the caption in full view
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + e.href + '">' + caption.innerHTML + '</a>';
    window.console.log(caption, img)
     e.addEventListener("click", (function(t){
       t.preventDefault();
       BigPicture({
        el: t.target,
        gallery: '.bp-gallery',
      })
     })
    )
  }))

  // Add your javascript here

  
  // $("#gform").validate({
  //   rules:{
  //       name:{
  //           minlength:2
  //       },
  //       email:{
  //           email:true
  //       },
  //       message:{
  //         minlength:5
  //       }
  //   },
  //   message:{
  //      name:{

  //       minlength:"Please enter atlest 2 characters."
  //      },
  //      message:{
  //       minlength:"Please enter atleast 5 characters."
  //      }
  //   },

//     submitHandler:function(form){
//         //form.submit();
//         $("#gform").submit((e)=>{
//           e.preventDefault()
//           $.ajax({
//               url:"https://script.google.com/macros/s/AKfycbyOG1uGa0YkdwHg4tLwc4SM1As8Z80p-3Uxx7M9WCCVj37FvQmbyJmUz2XODloScdFY/exec",
//               data:$("#gform").serialize(),
//               method:"post",
//               success:function (response){
//                   alert("Form submitted successfully")
//                   window.location.reload()
//                   //window.location.href="https://google.com"
//               },
//               error:function (err){
//                   alert("Something Error")
        
//               }
//           })
//         })
//     }
// });

/*$("#gform").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyOG1uGa0YkdwHg4tLwc4SM1As8Z80p-3Uxx7M9WCCVj37FvQmbyJmUz2XODloScdFY/exec",
      data:$("#gform").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})*/


})();