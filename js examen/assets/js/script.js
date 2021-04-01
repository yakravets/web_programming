var burgerCtr = document.querySelector("#burger-menu");
var menuCtr = document.querySelector("#mobile-menu");
burgerCtr.addEventListener("click", function () {
    this.classList.toggle("active");
    menuCtr.classList.toggle("show_mobile_menu");
});

jQuery(document).ready(function () {
   fetch('/assets/js/categories.json')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      const result = data.data;
      result.forEach(({id,name }) => {
         const element = document.createElement('li');
         element.classList.add('category');
         element.id=id;
         element.innerHTML = `
         <a href="#" class="works__link">${name}</a>
                  `;
         document.querySelector('.works__list').append(element);
      });
   });
  
   fetch('/assets/js/categories.json')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      const result = data.data;
      result.forEach(({id,name }) => {
         const element = document.createElement('ul');
         element.classList.add('categories__list');
         element.id=id;
         element.innerHTML = `
         <li id="${id}" class="categories__item">${name}</li>
                  `;
                  if( document.querySelector('.categories')!=null){ document.querySelector('.categories').appendChild(element);}
        
      });
   });
   fetch('/assets/js/products.json')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      const result = data.data;
      let i=0;
      result.forEach(({ id, categoryId, icon,name,author,view,price,currency,rating,voted }) => {
         i++;
         if(i<=12){
         const element = document.createElement('a');
         element.classList.add('cart');
                  element.href="card.html";
         element.id=id;
         element.innerHTML = `
         <div id="${categoryId}" class="category__id">
    <img class="cart__img" src="/assets/img/cart/cart${icon}.jpg"  alt="" />
         <div class="cart__block">
            <div class="cart__title">${name}</div>
            <div class="cart__author">${author}</div>
            <div class="row1">
               <div class="cart__view">${view}</div>
               <div class="cart__price">$${view}</div>
            </div>
            <div class="row2">
               <div class="cart__stars"><svg width="60" height="12" viewBox="0 0 60 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.315L6 1L4.595 4.315L1 4.62L3.73 6.985L2.91 10.5L6 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M18 8.635L21.09 10.5L20.27 6.985L23 4.62L19.405 4.315L18 1L16.595 4.315L13 4.62L15.73 6.985L14.91 10.5L18 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M30 8.635L33.09 10.5L32.27 6.985L35 4.62L31.405 4.315L30 1L28.595 4.315L25 4.62L27.73 6.985L26.91 10.5L30 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M42 8.635L45.09 10.5L44.27 6.985L47 4.62L43.405 4.315L42 1L40.595 4.315L37 4.62L39.73 6.985L38.91 10.5L42 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M54.2584 8.20693L54 8.05099L53.7416 8.20693L51.6661 9.45962L52.2169 7.09859L52.2855 6.80469L52.0574 6.60709L50.2231 5.01803L52.6373 4.81321L52.9377 4.78772L53.0554 4.51011L54 2.2813L54.9446 4.51011L55.0623 4.78772L55.3627 4.81321L57.7769 5.01803L55.9426 6.60709L55.7145 6.80469L55.7831 7.09859L56.3339 9.45962L54.2584 8.20693Z"
                        stroke="#143F5F" stroke-opacity="0.5" />
                  </svg>
                  <div class="cart__reviews">
                     (${voted})</div>
               </div>

               <button class="save"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M11.3333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V4.66667L11.3333 2ZM8 12.6667C6.89333 12.6667 6 11.7733 6 10.6667C6 9.56 6.89333 8.66667 8 8.66667C9.10667 8.66667 10 9.56 10 10.6667C10 11.7733 9.10667 12.6667 8 12.6667ZM10 6H3.33333V3.33333H10V6Z"
                        fill="#143F5F" fill-opacity="0.5" />
                  </svg>
               </button>
            </div>
         </div>
      </a> `;
      if(    document.querySelector('.cart__inner')!=null){ document.querySelector('.cart__inner').appendChild(element);}
        }
      });
   });
   localStorage.setItem('categories-id',1);
   
  

   $('.cart__inner').on('click', '.cart', function(){
   localStorage.setItem("cart-id",$(this).attr("id"));
    });
    $('.categories').on('click','.categories__item', function(){
     $('.categories__item').removeClass('active');
    $(this).addClass('active');
     localStorage.setItem("categories-id",$(this).attr("id"));
     $('.cart__inner2 .cart').remove();
     $('.cart__inner2 .block').remove();
     let count=0;
     fetch('/assets/js/products.json')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      const result = data.data;
      result.forEach(({ id, categoryId, icon,name,author,view,price,currency,rating,voted}) => {
      
         if(categoryId==localStorage.getItem('categories-id')){
            count++;
        }
 });
       
         if(count>0){
           
      result.forEach(({ id, categoryId, icon,name,author,view,price,currency,rating,voted }) => {
         const element = document.createElement('a');
         element.classList.add('cart');
         element.innerHTML = ``;
         element.href="card.html";
         element.id=id;
           if(categoryId==localStorage.getItem('categories-id')){
     element.innerHTML = `
         <div id="${categoryId}" class="category__id">
    <img class="cart__img" src="/assets/img/cart/cart${icon}.jpg"  alt="" />
         <div class="cart__block">
            <div class="cart__title">${name}</div>
            <div class="cart__author">${author}</div>
            <div class="row1">
               <div class="cart__view">${view}</div>
               <div class="cart__price">$${view}</div>
            </div>
            <div class="row2">
               <div class="cart__stars"><svg width="60" height="12" viewBox="0 0 60 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.315L6 1L4.595 4.315L1 4.62L3.73 6.985L2.91 10.5L6 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M18 8.635L21.09 10.5L20.27 6.985L23 4.62L19.405 4.315L18 1L16.595 4.315L13 4.62L15.73 6.985L14.91 10.5L18 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M30 8.635L33.09 10.5L32.27 6.985L35 4.62L31.405 4.315L30 1L28.595 4.315L25 4.62L27.73 6.985L26.91 10.5L30 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M42 8.635L45.09 10.5L44.27 6.985L47 4.62L43.405 4.315L42 1L40.595 4.315L37 4.62L39.73 6.985L38.91 10.5L42 8.635Z"
                        fill="#143F5F" fill-opacity="0.5" />
                     <path
                        d="M54.2584 8.20693L54 8.05099L53.7416 8.20693L51.6661 9.45962L52.2169 7.09859L52.2855 6.80469L52.0574 6.60709L50.2231 5.01803L52.6373 4.81321L52.9377 4.78772L53.0554 4.51011L54 2.2813L54.9446 4.51011L55.0623 4.78772L55.3627 4.81321L57.7769 5.01803L55.9426 6.60709L55.7145 6.80469L55.7831 7.09859L56.3339 9.45962L54.2584 8.20693Z"
                        stroke="#143F5F" stroke-opacity="0.5" />
                  </svg>
                  <div class="cart__reviews">
                     (${voted})</div>
               </div>

               <button class="save"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M11.3333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V4.66667L11.3333 2ZM8 12.6667C6.89333 12.6667 6 11.7733 6 10.6667C6 9.56 6.89333 8.66667 8 8.66667C9.10667 8.66667 10 9.56 10 10.6667C10 11.7733 9.10667 12.6667 8 12.6667ZM10 6H3.33333V3.33333H10V6Z"
                        fill="#143F5F" fill-opacity="0.5" />
                  </svg>
               </button>
            </div>
         </div>
      </a> `;
        
         document.querySelector('.cart__inner2').appendChild(element);}
         
      });}
      else{
    document.querySelector('.cart__inner2').innerHTML=`<div class="block">
         <img src="assets/img/man.png" alt="" />
         <div class="text">This Search Matches 0 Results</div>
         <div class="links">
            <a href="all.html">New Search</a>
            <span>or</span>
            <a href="index.html">Back to Home</a>
         </div>
      </div>`;
      }
   });
     });
   fetch('/assets/js/details.json')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      const result = data;
      result.forEach(({ id, categoryId, icon,name,view, author, price,currency,rating,voted,sales,reviews,time_deliv,description,attachments }) => {
         const element = document.createElement('div');
         element.classList.add('info');
if(id==localStorage.getItem("cart-id")){
  
   element.innerHTML = `
                 <div class="col1">
                  <div class="row1 row">
                     <div class="text">
                    
                        <div class="info-top">
                           <div class="info__name subtitle">${name}</div>
                           <div class="info__name-desc">Interaction Design</div>
                        </div>
                        <div class="tt2">
                           <div class="info__mod">Last Modified:</div>
                           <div class="info__date">November 14, 2018</div>
                        </div>
                     </div>
                     <img class="info__img" src="/assets/img/att/${icon}.png"  alt="" />
                  </div>
                  <div class="row2 row">
                     <div class="att-subtitle subtitle">
                        Attachments</div>
                     <div class="gallery">
                     <img src="assets/img/${attachments[0]}.PNG" alt="" />
                     <img src="assets/img/${attachments[1]}.PNG" alt="" />
                     <img src="assets/img/${attachments[2]}.PNG" alt="" />
                     </div>
                  </div>
                  <div class="row3 row">
                     <div class="subtitle">Description</div>
                     <p class="text">${description}</p>
                  </div>
                  <div class="row3 row">
                     <div class="subtitle">Reviews (${reviews.length} Total)</div>
                     ${reviews} 
                  </div>
                  <div class="row4 row">
                     <div class="info-top">
                        <div class="info__name subtitle">${name}</div>
                        <div class="info__name-desc">Interaction Design</div>
                     </div>
                     <div class="price-box">
                        <div class="price">$${price}</div>
                        <button class="btn">Order Now</button>
                     </div>
                  </div>
               </div>
               <div class="col2">
                  <div class="row1 row">
                     <div class="line1 line">
                        <div class="left">
                           <div class="view">${view}</div>
                           <div class="stars"><svg width="60" height="12" viewBox="0 0 60 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.315L6 1L4.595 4.315L1 4.62L3.73 6.985L2.91 10.5L6 8.635Z"
                                    fill="#143F5F" fill-opacity="0.5" />
                                 <path
                                    d="M18 8.635L21.09 10.5L20.27 6.985L23 4.62L19.405 4.315L18 1L16.595 4.315L13 4.62L15.73 6.985L14.91 10.5L18 8.635Z"
                                    fill="#143F5F" fill-opacity="0.5" />
                                 <path
                                    d="M30 8.635L33.09 10.5L32.27 6.985L35 4.62L31.405 4.315L30 1L28.595 4.315L25 4.62L27.73 6.985L26.91 10.5L30 8.635Z"
                                    fill="#143F5F" fill-opacity="0.5" />
                                 <path
                                    d="M42 8.635L45.09 10.5L44.27 6.985L47 4.62L43.405 4.315L42 1L40.595 4.315L37 4.62L39.73 6.985L38.91 10.5L42 8.635Z"
                                    fill="#143F5F" fill-opacity="0.5" />
                                 <path
                                    d="M54.2584 8.20693L54 8.05099L53.7416 8.20693L51.6661 9.45962L52.2169 7.09859L52.2855 6.80469L52.0574 6.60709L50.2231 5.01803L52.6373 4.81321L52.9377 4.78772L53.0554 4.51011L54 2.2813L54.9446 4.51011L55.0623 4.78772L55.3627 4.81321L57.7769 5.01803L55.9426 6.60709L55.7145 6.80469L55.7831 7.09859L56.3339 9.45962L54.2584 8.20693Z"
                                    stroke="#143F5F" stroke-opacity="0.5" />
                              </svg>
                              <span>(${voted})</span>
                           </div>
                        </div>
                        <div class="price">$${price}</div>
                     </div>
                     <div class="line2 line">
                        <div class="rate q1">Overall Rate</div>
                        <div class="rate__sum sum">${rating}</div>
                     </div>
                     <div class="line2 line">
                        <div class="reviews q1">Reviews</div>
                        <div class="reviews__sum sum">${reviews.length}</div>
                     </div>
                     <div class="line2 line">
                        <div class="sales q1">Sales</div>
                        <div class="sales__sum sum">${sales}</div>
                     </div>
                     <div class="line2 line line-last">
                        <div class="time q1">Time of Delivery</div>
                        <div class="sales__sum sum">${time_deliv} day(s)</div>
                     </div>
                     <button class="btn">Order Now</button>
                     <div class="subtitle subtitle-order">Extra</div>
                     <div class="text">There are no Extra Services</div>
                     <a href="" class="link">Send Custom Order</a>
                  </div>
                  <div class="row2 row">
                     <img src="assets/img/avatar.png" alt="" />
                     <div class="name__author">${author.name}</div>
                     <div class="line">
                        <div class="location">Location</div>
                        <div class="country">${author.location}</div>
                     </div>
                     <div class="line">
                        <div class="lang">Languages</div>
                        <div class="lang-country">${author.Lang}</div>
                     </div>
                     <div class="bio">Bio</div>
                     <div class="text">
                    ${author.Bio}
                     </div>
                     <button class="btn">Contact me</button>
                     <button class="btn btn-blue">View Profile</button>

                  </div>
                  <div class="row row3">
                     <div class="socials">
                        <a href="http://${author.contacts.fb}"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                 fill="#143F5F" />
                              <path
                                 d="M19.167 7.5H10.8337C9.91699 7.5 9.17533 8.25 9.17533 9.16667L9.16699 22.5L15.0003 20L20.8337 22.5V9.16667C20.8337 8.25 20.0837 7.5 19.167 7.5Z"
                                 fill="white" />
                           </svg></a>
                        <a href="http://${author.contacts.twitter}"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                 fill="#3B5998" />
                              <path
                                 d="M18.7718 15.5872H16.0952V25.3929H12.04V15.5872H10.1113V12.1411H12.04V9.91107C12.04 8.31636 12.7975 5.81921 16.1313 5.81921L19.1352 5.83178V9.17682H16.9557C16.5982 9.17682 16.0955 9.35544 16.0955 10.1162V12.1443H19.1261L18.7718 15.5872Z"
                                 fill="white" />
                           </svg></a>
                        <a href="http://${author.contacts.pinterest}"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                 fill="#55ACEE" />
                              <path
                                 d="M24.1879 10.78C23.5451 11.0651 22.8537 11.2579 22.1285 11.344C22.8689 10.9004 23.4371 10.1985 23.7053 9.36074C23.0125 9.77171 22.2448 10.0699 21.4285 10.2306C20.7744 9.534 19.8426 9.09869 18.8107 9.09869C16.831 9.09869 15.2253 10.7044 15.2253 12.6841C15.2253 12.9651 15.2571 13.2387 15.3186 13.5013C12.3389 13.3518 9.69678 11.9245 7.92827 9.7546C7.6197 10.284 7.44269 10.9004 7.44269 11.5573C7.44269 12.801 8.07613 13.8989 9.03766 14.5417C8.45021 14.5232 7.89698 14.362 7.41381 14.0927C7.41354 14.108 7.41354 14.1232 7.41354 14.1382C7.41354 15.8754 8.64995 17.3244 10.2898 17.6535C9.9893 17.7359 9.67191 17.7795 9.34543 17.7795C9.11387 17.7795 8.88953 17.7573 8.67081 17.7156C9.12697 19.1397 10.4508 20.1764 12.0201 20.2055C10.7928 21.1673 9.24703 21.7403 7.56676 21.7403C7.27798 21.7403 6.99187 21.7235 6.71191 21.6901C8.2978 22.7077 10.1829 23.3011 12.2076 23.3011C18.8025 23.3011 22.409 17.8378 22.409 13.0994C22.409 12.944 22.4055 12.7892 22.3986 12.6357C23.0997 12.1304 23.7074 11.499 24.1879 10.78Z"
                                 fill="#F1F2F2" />
                           </svg></a>
                        <a href="http://${author.contacts.fb}"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                 fill="#CB2027" />
                              <path
                                 d="M16.2106 20.0863C15.0766 19.9986 14.6001 19.4363 13.7108 18.8964C13.222 21.4609 12.6247 23.9193 10.8553 25.2036C10.3085 21.3275 11.657 18.4162 12.2832 15.326C11.2158 13.5291 12.4115 9.91241 14.663 10.8036C17.4339 11.8994 12.2639 17.4849 15.7347 18.1825C19.3581 18.9109 20.8373 11.8954 18.5901 9.61347C15.3435 6.31896 9.13977 9.5386 9.90264 14.2548C10.0885 15.4078 11.28 15.7578 10.3786 17.3488C8.30071 16.8886 7.6809 15.2498 7.76058 13.0649C7.88919 9.48859 10.9741 6.98449 14.0683 6.63796C17.9815 6.19997 21.6544 8.07491 22.1614 11.7558C22.7317 15.9102 20.3947 20.4093 16.2106 20.0863Z"
                                 fill="#F1F2F2" />
                           </svg></a>
                     </div>
                  </div>
               </div>
           
`;}
if( document.querySelector('.cart-detail')!=null){   document.querySelector('.cart-detail').appendChild(element);}

});

       
   });
  
    $(".phone").mask("+380 (99) 999-99-99");

    //FORMS 


    jQuery('.send-form').click(function () {
        var form = jQuery(this).closest('form');

        if (form.valid()) {
            form.css('opacity', '.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    form.html(data);
                    form.css('opacity', '1');
                },
                error: function () {
                    form.find('.status').html('серверная ошибка');
                }
            });
        }
    });
    let id;
  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    jQuery(".m1").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec3").offset().top
        }, 400);
    });

    jQuery(".m11").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec3").offset().top
        }, 400);

        jQuery('#burger-menu').click();
    });



    // Counter -----------------------
    var timeSpend = 86400000 * 50;

    if (jQuery.cookie('firstOpen') != undefined) {
        var interval = ((new Date()).getTime() - jQuery.cookie('firstOpen'));
        if (interval > timeSpend) {
            timeSpend = 0;
        } else {
            timeSpend -= interval;
        }
    } else {
        jQuery.cookie('firstOpen', (new Date()).getTime());
    }

    jQuery('.clock').countdown({
        until: timeSpend / 1000,
        format: 'DHMS'
    });
});

/*
	900 		- 200
	screeHeight	- X
*/
var screeHeight = jQuery(window).height();
var offSet = 200;

if (screeHeight > 930) {
    offSet = 200;
} else {
    offSet = screeHeight * 200 / 900;
    offSet = offSet.toFixed();
}

wow = new WOW({
    animateClass: 'animated',
    offset: offSet,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});

wow.init();



