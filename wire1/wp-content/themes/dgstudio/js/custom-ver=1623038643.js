

    var windowWidthdg = jQuery(window).innerWidth();
	var windowHeightdg = jQuery(window).innerHeight();
	var halfWindowWidthdg = windowWidthdg / 2;
	var halfWindowHeightdg = windowHeightdg / 2;
	jQuery( ".mouseovr_elmnt_cls" ).mousemove(function( e) {
    var _this = jQuery(this);   
  	var cursorX = e.pageX;    
  	var cursorY = e.pageY - jQuery(window).scrollTop();
    
  	var moveX = (cursorX - (halfWindowWidthdg))*-0.08;
	  var moveY = (cursorY - (halfWindowHeightdg))*-0.08;

    var moveX2 = (cursorX - (halfWindowWidthdg))*-0.02;
    var moveY2 = (cursorY - (halfWindowHeightdg))*-0.02;
		var rotateY = moveX*-0.09;
    	TweenMax.to(_this.find('.mouseovr_elmnt_lft_cls'), 
			1.175, {
				x: moveX,
				y: moveY,
				rotationY: rotateY
			}
		);

      TweenMax.to(_this.find('.mouseovr_elmnt_mid_cls'), 
      1.175, {
        x: moveX2,
        y: moveY2,
        rotationY: rotateY
      }
      );
		TweenMax.to(_this.find('.mouseovr_elmnt_rght_cls'), 
			1.175, {
				x: moveX*0.4,
				y: moveY*0.8,
				rotationY: rotateY*0.4
			}
		);
    });
    

	/* hide scroll to top button */
	
		// if(jQuery(".backtotp_arrw_cls.backtotp_arrw").length){
		// 	jQuery.fn.isVisible = function() {
		// 		// Current distance from the top of the page
		// 		var windowScrollTopView = jQuery(window).scrollTop();

		// 		// Current distance from the top of the page, plus the height of the window
		// 		var windowBottomView = windowScrollTopView + jQuery(window).height();

		// 		// Element distance from top
		// 		var elemTop = jQuery(this).offset().top - 100;

		// 		// Element distance from top, plus the height of the element
		// 		var elemBottom = elemTop + jQuery(this).height();

		// 		return ((elemBottom <= windowBottomView) && (elemTop >= windowScrollTopView));
		// 	}


		// 	jQuery(document).ready(function() {
		// 		jQuery(window).scroll(function() {
        //             if(jQuery(this).scrollTop() > 600){
        //                 jQuery('.backtotp_arrw_cls').css("opacity", "1");
		// 			if(jQuery("#footerID").isVisible()) {
        //                 // jQuery(".backtotp_arrw_cls.backtotp_arrw").addClass('hiddenscroll2top').hide(1000);
        //                 jQuery(".backtotp_arrw_cls.backtotp_arrw").css("opacity", "0");
					
        //             }
        //              else {
        //                 jQuery(".backtotp_arrw_cls.backtotp_arrw").css("opacity", "1");
		// 				// jQuery(".backtotp_arrw_cls.backtotp_arrw").removeClass('hiddenscroll2top').show(1000);
						
        //             }
        //         }
        //         else{
        //             jQuery('.backtotp_arrw_cls').css("opacity", "0");
        //         }
		// 		});
		// 	});
        // }
        
        jQuery(document).ready(function() {
   
            var WHeight=jQuery(window).height();
            jQuery(window).scroll(function() {
                if(jQuery(this).scrollTop() > WHeight){
                    jQuery('.backtotp_arrw_cls').addClass("et-visible");
                    jQuery(".digital_mrketng_sidebr_cls").addClass("et-visible");
            }
            else {
                jQuery('.backtotp_arrw_cls').removeClass("et-visible");
                jQuery(".digital_mrketng_sidebr_cls").removeClass("et-visible");
            }
            });
           
        });


        jQuery(".schedule_a_free_consulbtn_clickEvnt").click(function(){
            setTimeout(() => {
              schedulebtnmodal();
            }, 1000);
        });

        jQuery('.calendly-popup').on("click", ".calendly-popup-content", function(){
            console.log('cclick');
            setTimeout(function(){
                schedulebtnmodal();
            },200);
        });

        jQuery(window).on('resize', function(){
            schedulebtnmodal();
        });
        
        function schedulebtnmodal(){
			
            var elementOffsetouterWidth = jQuery('.calendly-popup').outerWidth();
            
            var elementOffsetouterHeight = jQuery('.calendly-popup').outerHeight();
			
			// if(jQuery(window).width() > 700 && jQuery(window).width() < 1000){
			// 	var elementOffsetTop = parseFloat(jQuery('.calendly-popup').position().top) + parseFloat(elementOffsetouterHeight*7/100);
			// 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - parseFloat(elementOffsetouterWidth*12/100);
			// }else if(jQuery(window).width() > 1000){
			// 	var elementOffsetTop = parseFloat(jQuery('.calendly-popup').position().top) + parseFloat(elementOffsetouterHeight*12/100);
			// 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - parseFloat(elementOffsetouterWidth*7/100);
			// }else{
			// 	var elementOffsetTop = jQuery('.calendly-popup').position().top;
			// 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - parseFloat(elementOffsetouterWidth*2/100);
            // }

            
            if(jQuery(window).width() >= 1250){
                var elementOffsetTop = jQuery('.calendly-popup').position().top+25;
                var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - 25;
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }else if(jQuery(window).width() >= 900){
                var elementOffsetTop = jQuery('.calendly-popup').position().top+90;
                var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - 140;
                if(jQuery(window).height()<450)
                var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) - 120;
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }else if(jQuery(window).width() >= 768){
                var elementOffsetTop = jQuery('.calendly-popup').position().top+90;
                var popupwidth=parseFloat(jQuery(window).width()*95/100);
                if(popupwidth>680){
                    popupwidth=680;
                }
                var elementOffsetLeft = parseFloat(jQuery(window).width()-popupwidth)/2+popupwidth-20;
                if(jQuery(window).height()<450)
                var elementOffsetLeft = parseFloat(jQuery(window).width()-popupwidth)/2+popupwidth-40;
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }
            else if(jQuery(window).width() >= 721){
                var elementOffsetTop = jQuery('.calendly-popup').position().top+60;
                var popupwidth=parseFloat(jQuery(window).width()*95/100);
                var elementOffsetLeft = parseFloat(jQuery(window).width()-popupwidth)/2+popupwidth-60;
                if(jQuery(window).height()<450)
                var elementOffsetLeft = parseFloat(jQuery(window).width()-popupwidth)/2+popupwidth-80;
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }else if(jQuery(window).width() >= 460){
                var elementOffsetTop = jQuery('.calendly-popup').position().top-8;
			 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth) +10;
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }else{
                var elementOffsetTop = jQuery('.calendly-popup').position().top-8;
			 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetouterWidth);
                jQuery(".calendly-popup-close").css("top", elementOffsetTop);
                jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
            }

            jQuery('.calendly-overlay .calendly-popup-close').show();
        }

	
    /* hide scroll to top button */
    
    jQuery(".backtotp_arrw_cls a").click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery("body").offset().top
        }, 1500);

    });

    jQuery(".arrw_clck_tbn").click(function() {
        if(jQuery(".digital_mrketng_sidebr_cls").hasClass("clse_sidebr_cls")) {
            jQuery(".digital_mrketng_sidebr_cls").css("left", "0");
            jQuery(".digital_mrketng_sidebr_cls h3").css("opacity", "0");
            jQuery(".digital_mrketng_sidebr_cls").removeClass("clse_sidebr_cls");
            jQuery(".arrw_clck_tbn i").removeClass("fa-angle-right");
            jQuery(".arrw_clck_tbn i").addClass("fa-angle-left");
            jQuery(".para_sidebr_txt_cls").removeClass("sidebr_white_bg_cls");
            jQuery(".digital_mrketng_sidebr_cls").removeClass("sidebr_white_bg_cls");
        }
        else {
            if(jQuery(window).width() > 768){
                jQuery(".digital_mrketng_sidebr_cls").css("left", "-378px");
            }
            else{
                jQuery(".digital_mrketng_sidebr_cls").css("left", "-276px");
            }
            
            jQuery(".digital_mrketng_sidebr_cls").addClass("clse_sidebr_cls");
            jQuery(".arrw_clck_tbn i").removeClass("fa-angle-left");
            jQuery(".arrw_clck_tbn i").addClass("fa-angle-right");
            jQuery(".para_sidebr_txt_cls").addClass("sidebr_white_bg_cls");
            jQuery(".digital_mrketng_sidebr_cls").addClass("sidebr_white_bg_cls");
            jQuery(".digital_mrketng_sidebr_cls h3").css("opacity", "1");
        }
    });

    jQuery(document).ready(function() {

        jQuery('.custom-select-wrapper').on('click', function() {
			jQuery(this).find('.custom-select').toggleClass('open');
		});
		
		jQuery(".custom-option").on("click", function(){
			if(!jQuery(this).hasClass("selected")){
				jQuery(this).parents(".custom-options").find(".custom-option").removeClass("selected");
				jQuery(this).addClass("selected");
				jQuery(this).closest(".custom-select").find(".custom-select__trigger span").text(jQuery(this).text());
				/*jQuery("#portfolio_industory").val(jQuery(this).attr('data-value'));*/
				var industry = jQuery(this).attr('data-value');
				var data = {
					'action': 'dgs_get_portfolio',
					'industry'  : industry,
					'offset'  : 0,
					'type'  : 'post',
				};

				jQuery.post(ajaxurl, data, function(response) {
					response = jQuery.parseJSON(response);
					if(response.error == 0){
						jQuery("ul.work-portfolio-lists").html(response.postfolio_lists);
						jQuery(".porfolio-row .portfolio-filterbottom-imgage").html(response.last_portfolio);
						
						jQuery('.view_work_portfolio').attr('data-offset', response.offset);
						if(response.show_button == 0){
							jQuery('.view_work_portfolio').hide();
						}else{
							jQuery('.view_work_portfolio').show();
						}
						
						jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar('destroy');
						jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar({ 
							theme:"dark-3"        
						});
						if(response.last_portfolio != ""){
							jQuery('.porfolio-row .portfolio-filterbottom-imgage .innr_content_sec_cls p').mCustomScrollbar({ 
								theme:"dark-3"        
							});
						}
					}
				});
			}
		});
		
		jQuery(".page-template-our-work .portfolio_filter #portfolio_industory").on("change", function(){
			var industry = jQuery(this).val();
			var data = {
				'action': 'dgs_get_portfolio',
				'industry'  : industry,
				'offset'  : 0,
				'type'  : 'post',
			};

			jQuery.post(ajaxurl, data, function(response) {
				response = jQuery.parseJSON(response);
				if(response.error == 0){
					jQuery("ul.work-portfolio-lists").html(response.postfolio_lists);
					jQuery(".porfolio-row .portfolio-filterbottom-imgage").html(response.last_portfolio);
					
					jQuery('.view_work_portfolio').attr('data-offset', response.offset);
					if(response.show_button == 0){
						jQuery('.view_work_portfolio').hide();
					}else{
						jQuery('.view_work_portfolio').show();
					}
					
					jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar('destroy');
					jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar({ 
						theme:"dark-3"        
					});
					if(response.last_portfolio != ""){
						jQuery('.porfolio-row .portfolio-filterbottom-imgage .innr_content_sec_cls p').mCustomScrollbar({ 
							theme:"dark-3"        
						});
					}
				}
			});
			
			/*if(industry != ""){
				jQuery('.work-portfolio-list').each(function(){
					
					if (jQuery(this).hasClass(industry)) {
						jQuery(this).show(800);
					}else{
						jQuery(this).hide(800);
					}
				});
				jQuery('.view_work_portfolio').hide();
			}else{
				jQuery('.work-portfolio-list').hide(800);
				jQuery('.work-portfolio-list:hidden').slice(0,12).show(800);
				jQuery('.view_work_portfolio').show();
			}*/
		});
		jQuery('.view_work_portfolio').on( "click", function(){
			/*e.preventDefault();*/
			var curr_button = jQuery(this);
			/*jQuery('.work-portfolio-list:hidden').slice(0,3).show(800);
			if( jQuery('.work-portfolio-list:hidden').length <= 0 ) {
				/*jQuery('.view_work_portfolio').after('<p style="background: #f9f9f9;z-index: 2;position: relative;display: inline-block;padding-right: 20px;color: #3c3b40;">No more portfolio to load.</p>');*//*
				jQuery('.view_work_portfolio').hide();
			}*/
			var offset = jQuery(this).attr("data-offset");
			var data = {
				'action': 'dgs_load_more_portfolio',
				'offset'  : offset,
				'type'  : 'post',
			};

			jQuery.post(ajaxurl, data, function(response) {
				response = jQuery.parseJSON(response);
				if(response.error == 0){
					if(response.postfolio_lists != ""){
						jQuery("ul.work-portfolio-lists").append(response.postfolio_lists);
					}
					if(response.last_portfolio != ""){
						jQuery(".porfolio-row .portfolio-filterbottom-imgage").html(response.last_portfolio);
						jQuery('.porfolio-row .portfolio-filterbottom-imgage .innr_content_sec_cls p').mCustomScrollbar({ 
							theme:"dark-3"        
						});
					}else{
						jQuery(".porfolio-row .portfolio-filterbottom-imgage").html('');
					}
					jQuery(curr_button).attr('data-offset', response.offset);
					if(response.show_button == 0){
						jQuery(curr_button).hide();
					}
					jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar('destroy');
					jQuery('ul.work-portfolio-lists li .innr_content_sec_cls p').mCustomScrollbar({ 
						theme:"dark-3"        
					});
				}
			});
        });

		// jQuery('.view_work_portfolio').click( e => {
		// 	e.preventDefault();
		// 	jQuery('.work-portfolio-list:hidden').slice(0,3).show(800);
		// 	if( jQuery('.work-portfolio-list:hidden').length <= 0 ) {
		// 		jQuery('.view_work_portfolio').hide();
		// 	}
        // });
        
        jQuery('.work_slider_slides_cls').slick({
            centerMode: true,
            centerPadding: '60px',
			slidesToScroll: 1,
			swipeToSlide: false,
			swipe: false,
            slidesToShow: 3,
            variableWidth: true,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
            beforeChange: function(event, slick, currentSlide){
                
                /*jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");
     
                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");*/
            },
          });

		jQuery('.work_slider_slides_cls .slick-prev, .work_slider_slides_cls .slick-next').click( function(event){
            event.preventDefault();
            jQuery('.cs_link').attr('href',jQuery('.slick-current .slider_caption_cls a').attr('href'));
			var slick_index = jQuery('.work_slider_slides_cls .slick-current').data('slick-index');
			
			if( slick_index == 0 || slick_index == 3 ) {
				jQuery('.work_slider_slides_cls .slick-prev').removeClass('green-slick-prev blue-slick-prev');
				jQuery('.work_slider_slides_cls .slick-next').removeClass('green-slick-next blue-slick-next');
			}
			if( slick_index == 1 || slick_index == 4 ) {
				jQuery('.work_slider_slides_cls .slick-prev').removeClass('green-slick-prev');
				jQuery('.work_slider_slides_cls .slick-next').removeClass('green-slick-next');
				jQuery('.work_slider_slides_cls .slick-prev').addClass('blue-slick-prev');
				jQuery('.work_slider_slides_cls .slick-next').addClass('blue-slick-next');
			}
			if( slick_index == 2 || slick_index == 5 ) {				
				jQuery('.work_slider_slides_cls .slick-prev').removeClass('blue-slick-prev');
				jQuery('.work_slider_slides_cls .slick-next').removeClass('blue-slick-next');
				jQuery('.work_slider_slides_cls .slick-prev').addClass('green-slick-prev');
				jQuery('.work_slider_slides_cls .slick-next').addClass('green-slick-next');
			}
        });

          /*jQuery('.work_slider_slides_cls').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            //console.log(event); 
            //console.log(slick); 
            //console.log(currentSlide);
            //console.log(nextSlide);
            if(currentSlide == '0') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('green-slick-prev');
                    jQuery('.slick-next').removeClass('green-slick-next');
                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");
                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");
            },100);
            }
            else if(currentSlide == '1') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('blue-slick-prev');
                    jQuery('.slick-next').removeClass('blue-slick-next');
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");
     
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");
    
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");
    
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");
            },100);
            }
            else if(currentSlide == '2') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('blue-slick-prev');
                    jQuery('.slick-next').removeClass('blue-slick-next');
                    jQuery('.slick-prev').removeClass('green-slick-prev');
                    jQuery('.slick-next').removeClass('green-slick-next');
                    
            },100);
            }
            else if(currentSlide == '3') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('green-slick-prev');
                    jQuery('.slick-next').removeClass('green-slick-next');
                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-next").addClass("blue-slick-next");
                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='1']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");

                jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='4']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("blue-slick-prev");
            },100);
            }
            else if(currentSlide == '4') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('blue-slick-prev');
                    jQuery('.slick-next').removeClass('blue-slick-next');
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");
     
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-prev").addClass("green-slick-prev");
    
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='2']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");
    
                    jQuery(".item.slick-slide.slick-center.slick-current[data-slick-index='5']").closest(".work_slider_slides_cls").find(".slick-next").addClass("green-slick-next");
            },100);
            }
            else if(currentSlide == '5') {
                setTimeout(function(){
                    jQuery('.slick-prev').removeClass('blue-slick-prev');
                    jQuery('.slick-next').removeClass('blue-slick-next');
                    jQuery('.slick-prev').removeClass('green-slick-prev');
                    jQuery('.slick-next').removeClass('green-slick-next');
                    
            },100);
            }

          });*/

        var menuDivImg_height = jQuery('.side_br_content_cls .col').height();
        jQuery('.side_br_content_cls .nav_rght_inner_cls .solutin_tb_cls, .side_br_content_cls .nav_rght_inner_cls .our_wrk_tb_cls, .side_br_content_cls .nav_rght_inner_cls .our_thought_tb_cls, .side_br_content_cls .nav_rght_inner_cls .abt_us_tb_cls, .side_br_content_cls .nav_rght_inner_cls .conct_tb_cls').css('height', menuDivImg_height);

        jQuery('.page-template-homeanimation').addClass('.page-template-home');

        /*jQuery('.menu_rght_arrw').on('click', function(){
            jQuery('.humburger_menu').trigger('click');
        });

        jQuery('.side_blue_br_cls').on('click', function(){
            jQuery('.humburger_menu').trigger('click');
        });*/

        jQuery('.menu_rght_arrw, .side_blue_br_cls').click(function() {
            jQuery('.humburger_menu').click();
        });
        jQuery('.side_blue_br_cls ul').click(function(e) {
            e.stopImmediatePropagation();
        });  


        jQuery('.carousel').carousel({
            interval: false,
           
          });
        

        jQuery('.humburger_menu').on('click', function(e){
            if(jQuery(this).hasClass('humburger_togglecls')){
                // jQuery('body, html').addClass('overflw_hidden_cls');
                jQuery(this).removeClass('humburger_togglecls');
                jQuery('.side_menu_cls').addClass('open_side_menu');
                jQuery('.overlay_side_menu_cls').css({'opacity':'1', 'z-index':'9998'});
                jQuery(this).addClass('humbrger_menu_open');
                setTimeout(function(){
                    setTimeout(function(){
                        jQuery('.nav_lst_cls a img').css('opacity', '1');
                    }, 200);
                    setTimeout(function(){
                        jQuery('.snip1573').addClass('snip1573_addcls');
                    }, 500);
                    setTimeout(function(){
                        jQuery('.img_nav_sec img.img_opacity_cls_menu').css('opacity', '1');
                    }, 800);
                    setTimeout(function(){
                        jQuery('.img_ovrly_shdw_cls').addClass('img_ovrly_shdw__anim_cls');
                        jQuery('.menu_svg_icn_cls').addClass('menu_svg_icn_anim_cls');
                    }, 1000);
                    setTimeout(function(){
                        jQuery('.img_ovrly_shdw_cls').addClass('img_ovrly_shdw__anim_cls');
                    }, 1300);
                    setTimeout(function(){
                        jQuery('.snip1573').addClass('img_scale_auto_hiden_cls');
                    }, 1350);
                    setTimeout(function(){
                        jQuery('.img_nav_sec img.img_opacity_cls_menu').addClass('img_scale_cls');
                    }, 1400);
                    setTimeout(function(){
                        jQuery('.prdct_img_btm_yellw').css('opacity', '0.8');
                        jQuery('.img_tp_lght_green_strp').css('opacity', '1');
                        jQuery('.img_tprght_lght_purple_strp').css('opacity', '0.6');
                    }, 1450);
                    jQuery('.nav_lst_cls li:nth-child(1)').addClass('nth_cls_li_anim');
                    
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(2)').addClass('nth_cls_li_anim');
                    }, 200);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(3)').addClass('nth_cls_li_anim');
                    }, 400);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(4)').addClass('nth_cls_li_anim');
                    }, 600);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(5)').addClass('nth_cls_li_anim');
                    }, 800);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(6)').addClass('nth_cls_li_anim');
                    }, 1000);
                }, 600);
            }
            else {
                // jQuery('body, html').removeClass('overflw_hidden_cls');
                jQuery('.overlay_side_menu_cls').css({'opacity':'0', 'z-index':'-1'});
                jQuery(this).addClass('humburger_togglecls');
                jQuery('.side_menu_cls').removeClass('open_side_menu');
                jQuery(this).removeClass('humbrger_menu_open');
                setTimeout(function(){
                    setTimeout(function(){
                        jQuery('.nav_lst_cls a img').css('opacity', '0');
                    }, 200);
                    setTimeout(function(){
                        jQuery('.snip1573').removeClass('snip1573_addcls');
                    }, 500);
                    setTimeout(function(){
                        jQuery('.img_nav_sec img.img_opacity_cls_menu').css('opacity', '0');
                    }, 800);
                    setTimeout(function(){
                        jQuery('.img_ovrly_shdw_cls').removeClass('img_ovrly_shdw__anim_cls');
                        jQuery('.menu_svg_icn_cls').removeClass('menu_svg_icn_anim_cls');
                    }, 1000);
                    setTimeout(function(){
                        jQuery('.img_ovrly_shdw_cls').removeClass('img_ovrly_shdw__anim_cls');
                    }, 1300);
                    setTimeout(function(){
                        jQuery('.snip1573').removeClass('img_scale_auto_hiden_cls');
                    }, 1350);
                    setTimeout(function(){
                        //jQuery('.img_nav_sec img.img_opacity_cls_menu').removeClass('img_scale_cls');
                    }, 1400);
                    setTimeout(function(){
                        jQuery('.prdct_img_btm_yellw').css('opacity', '0');
                        jQuery('.img_tp_lght_green_strp').css('opacity', '0');
                        jQuery('.img_tprght_lght_purple_strp').css('opacity', '0');
                    }, 1450);
                    jQuery('.nav_lst_cls li:nth-child(1)').removeClass('nth_cls_li_anim');
                    
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(2)').removeClass('nth_cls_li_anim');
                    }, 200);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(3)').removeClass('nth_cls_li_anim');
                    }, 400);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(4)').removeClass('nth_cls_li_anim');
                    }, 600);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(5)').removeClass('nth_cls_li_anim');
                    }, 800);
                    setTimeout(function(){
                        jQuery('.nav_lst_cls li:nth-child(6)').removeClass('nth_cls_li_anim');
                    }, 1000);
                }, 600);
            }
            e.stopImmediatePropagation();
        });

        jQuery('.menu_svg_icn_cls ul').hover(
            function() {
                jQuery('.nav_lst_cls li:first-child').addClass('add_svg_ic_actve');
            },
            function() {
                jQuery('.nav_lst_cls li:first-child').removeClass('add_svg_ic_actve');
            }
        );

        jQuery('.solutin_sml_tb img').hover(
            function() {
                jQuery('.nav_lst_cls li:nth-child(2)').addClass('solution_hovr_svg');
            },
            function() {
                jQuery('.nav_lst_cls li:nth-child(2)').removeClass('solution_hovr_svg');
            }
        );

        jQuery('.menu_svg_icn_cls li:nth-child(2)').hover(
            function() {
                jQuery(".main_image_slow_always").css({'display': 'none', 'opacity' : '0'});
                jQuery('.prdct_svg_ic_imgdgele_hvr_cls').css({'display': 'block', 'opacity' : '1'});
            },
            function() {
                jQuery(".main_image_slow_always").css({'display': 'block', 'opacity' : '1'});
                jQuery('.prdct_svg_ic_imgdgele_hvr_cls').css({'display': 'none', 'opacity' : '0'});
            }
        );

        jQuery('.menu_svg_icn_cls li:nth-child(3)').hover(
            function() {
                jQuery(".main_image_slow_always").css({'display': 'none', 'opacity' : '0'});
                jQuery('.prdct_svg_ic_imgdgweb_hvr_cls').css({'display': 'block', 'opacity' : '1'});
            },
            function() {
                jQuery(".main_image_slow_always").css({'display': 'block', 'opacity' : '1'});
                jQuery('.prdct_svg_ic_imgdgweb_hvr_cls').css({'display': 'none', 'opacity' : '0'});
            }
        );

        jQuery('.menu_svg_icn_cls li:nth-child(4)').hover(
            function() {
                jQuery(".main_image_slow_always").css({'display': 'none', 'opacity' : '0'});
                jQuery('.prdct_svg_ic_imgdghype_hvr_cls').css({'display': 'block', 'opacity' : '1'});
            },
            function() {
                jQuery(".main_image_slow_always").css({'display': 'block', 'opacity' : '1'});
                jQuery('.prdct_svg_ic_imgdghype_hvr_cls').css({'display': 'none', 'opacity' : '0'});
            }
        );

        jQuery('.menu_svg_icn_cls li:nth-child(5)').hover(
            function() {
                jQuery(".main_image_slow_always").css({'display': 'none', 'opacity' : '0'});
                jQuery('.prdct_svg_ic_imgdgcare_hvr_cls').css({'display': 'block', 'opacity' : '1'});
            },
            function() {
                jQuery(".main_image_slow_always").css({'display': 'block', 'opacity' : '1'});
                jQuery('.prdct_svg_ic_imgdgcare_hvr_cls').css({'display': 'none', 'opacity' : '0'});
                
            }
        );

        jQuery('.nav_lst_cls li:nth-child(1)').hover(
            function() {
                if(jQuery(window).width() > 1115){
                jQuery('.img_nav_sec').css('display', 'table-cell');
                jQuery('.img_nav_sec img').css('opacity', '1');
                jQuery('.menu_svg_icn_cls').css('display', 'block');
                jQuery('.solutin_tb_cls').css('display', 'none');
                jQuery('.solutin_tb_cls img').css('opacity', '0');
                jQuery('.our_wrk_tb_cls').css('display', 'none');
                jQuery('.our_wrk_tb_cls img').css('opacity', '0');
                jQuery('.abt_us_tb_cls').css('display', 'none');
                jQuery('.abt_us_tb_cls img').css('opacity', '0');
                jQuery('.conct_tb_cls').css('display', 'none');
                jQuery('.conct_tb_cls img').css('opacity', '0');
                jQuery('.our_thought_tb_cls').css('display', 'none');
                jQuery('.our_thought_tb_cls img').css('opacity', '0');
                }
            }
        );

        // jQuery('.nav_lst_cls li:nth-child(2)').hover(
        //     function() {
        //         jQuery('.solutin_tb_cls').css('display', 'table-cell');
        //         jQuery('.solutin_tb_cls img').css('opacity', '1');
        //         jQuery('.img_nav_sec').css('display', 'none');
        //         jQuery('.img_nav_sec img').css('opacity', '0');
        //         jQuery('.menu_svg_icn_cls').css('display', 'none');
        //         jQuery('.our_wrk_tb_cls').css('display', 'none');
        //         jQuery('.our_wrk_tb_cls img').css('opacity', '0');
        //         jQuery('.abt_us_tb_cls').css('display', 'none');
        //         jQuery('.abt_us_tb_cls img').css('opacity', '0');
        //         jQuery('.conct_tb_cls').css('display', 'none');
        //         jQuery('.conct_tb_cls img').css('opacity', '0');
        //         jQuery('.our_thought_tb_cls').css('display', 'none');
        //         jQuery('.our_thought_tb_cls img').css('opacity', '0');
        //     }
        // );
        
        jQuery('.nav_lst_cls li:nth-child(3)').hover(
            function() {              
                jQuery('.our_wrk_tb_cls').css('display', 'table-cell');
                jQuery('.our_wrk_tb_cls img').css('opacity', '1');
                jQuery('.solutin_tb_cls').css('display', 'none');
                jQuery('.solutin_tb_cls img').css('opacity', '0');
                /*jQuery('.menu_svg_icn_cls').css('display', 'none');*/
                jQuery('.img_nav_sec').css('display', 'none');
                jQuery('.img_nav_sec img').css('opacity', '0');
                jQuery('.abt_us_tb_cls').css('display', 'none');
                jQuery('.abt_us_tb_cls img').css('opacity', '0');
                jQuery('.conct_tb_cls').css('display', 'none');
                jQuery('.conct_tb_cls img').css('opacity', '0');
                jQuery('.our_thought_tb_cls').css('display', 'none');
                jQuery('.our_thought_tb_cls img').css('opacity', '0');
            }
        );

        jQuery('.nav_lst_cls li:nth-child(4)').hover(
            function() {
                jQuery('.our_thought_tb_cls').css('display', 'table-cell');
                jQuery('.our_thought_tb_cls img').css('opacity', '1');
                jQuery('.abt_us_tb_cls').css('display', 'none');
                jQuery('.abt_us_tb_cls img').css('opacity', '0');
                jQuery('.solutin_tb_cls').css('display', 'none');
                jQuery('.solutin_tb_cls img').css('opacity', '0');
                /*jQuery('.menu_svg_icn_cls').css('display', 'none');*/
                jQuery('.img_nav_sec').css('display', 'none');
                jQuery('.img_nav_sec img').css('opacity', '0');
                jQuery('.our_wrk_tb_cls').css('display', 'none');
                jQuery('.our_wrk_tb_cls img').css('opacity', '0');
                jQuery('.conct_tb_cls').css('display', 'none');
                jQuery('.conct_tb_cls img').css('opacity', '0');
            }
        );

        jQuery('.nav_lst_cls li:nth-child(5)').hover(
            function() {
                jQuery('.abt_us_tb_cls').css('display', 'table-cell');
                jQuery('.abt_us_tb_cls img').css('opacity', '1');
                jQuery('.solutin_tb_cls').css('display', 'none');
                jQuery('.solutin_tb_cls img').css('opacity', '0');
                /*jQuery('.menu_svg_icn_cls').css('display', 'none');*/
                jQuery('.img_nav_sec').css('display', 'none');
                jQuery('.img_nav_sec img').css('opacity', '0');
                jQuery('.our_wrk_tb_cls').css('display', 'none');
                jQuery('.our_wrk_tb_cls img').css('opacity', '0');
                jQuery('.conct_tb_cls').css('display', 'none');
                jQuery('.conct_tb_cls img').css('opacity', '0');
                jQuery('.our_thought_tb_cls').css('display', 'none');
                jQuery('.our_thought_tb_cls img').css('opacity', '0');
            }
        );

        jQuery('.nav_lst_cls li:nth-child(6)').hover(
            function() {
                jQuery('.conct_tb_cls').css('display', 'table-cell');
                jQuery('.conct_tb_cls img').css('opacity', '1');
                jQuery('.solutin_tb_cls').css('display', 'none');
                jQuery('.solutin_tb_cls img').css('opacity', '0');
                /*jQuery('.menu_svg_icn_cls').css('display', 'none');*/
                jQuery('.abt_us_tb_cls').css('display', 'none');
                jQuery('.img_nav_sec img').css('opacity', '0');
                jQuery('.img_nav_sec').css('display', 'none');
                jQuery('.img_nav_sec img').css('opacity', '0');
                jQuery('.our_wrk_tb_cls').css('display', 'none');
                jQuery('.our_wrk_tb_cls img').css('opacity', '0');
                jQuery('.our_thought_tb_cls').css('display', 'none');
                jQuery('.our_thought_tb_cls img').css('opacity', '0');
            }
        );
        
        setTimeout(function(){
            jQuery('.holistic-sec .tparrw_lyer_img').addClass('trnslte_trnstn_one180_cls');
            jQuery('.holistic-sec .leave_img').addClass('trnslte_trnstn_one200_cls');
            jQuery('.holistic-sec .tp_leave_img').addClass('trnslte_trnstn_one3d200_cls');
            jQuery('.holistic-sec .frme_lyer_img, .holistic-sec .lck_crcle_img').addClass('trnslte_trnstn_four250_cls');
            jQuery('.holistic-sec .blecut_crcle_img').addClass('trnslte_trnstn_four350_cls');
            jQuery('.holistic-sec .latp_leave_img').addClass('trnslte_trnstn_four380_cls');
            jQuery('.holistic-sec .cats_crcle_img').addClass('trnslte_trnstn_one600_cls');
            jQuery('.holistic-sec .ylwstrip_lyer_img').addClass('trnslte_trnstn_oneopcty_cls');
            jQuery('.holistic-sec .right img').addClass('trnslte_trnstn_oneimgblr_cls');
        },500);

        setTimeout(function(){
            jQuery('.holostic_img_cls1').addClass('holostic_img_addanimtn_cls1');
            setTimeout(function(){
                jQuery('.holostic_img_cls9').addClass('holostic_img_addanimtn_cls9');
                jQuery('.side_menu_cls').removeClass('side_menu_onloadanim_cls');
                jQuery('.side_blue_br_cls').addClass('side_blue_br_ani_cls');
                jQuery('.sml_dg_logo_cls').removeClass('sml_dg_logo_ani_cls');
                jQuery('.sml_dg_logo_cls img').addClass('sml_dg_logo_ani_cls_img');

                
                 
                setTimeout(function(){
                    jQuery('.holostic_img_cls3').addClass('holostic_img_addanimtn_cls3');
                    jQuery('.humburger_menu').addClass('humburger_menu_ani');
                    setTimeout(function(){
                        jQuery('.holostic_img_cls11').addClass('holostic_img_addanimtn_cls11');
                        setTimeout(function(){
                            jQuery('.holostic_img_cls5').addClass('holostic_img_addanimtn_cls5');
                            jQuery('.scroll-left').css('opacity', '1');
                            jQuery('.menu_rght_arrw').css('opacity', '1');
                            setTimeout(function(){
                                jQuery('.holostic_img_cls7').addClass('holostic_img_addanimtn_cls7');
                                setTimeout(function(){
                                    jQuery('.holostic_img_cls8').addClass('holostic_img_addanimtn_cls8');
                                    setTimeout(function(){
                                        jQuery('.holostic_img_cls6').addClass('holostic_img_addanimtn_cls6');
                                        setTimeout(function(){
                                            jQuery('.holostic_img_cls10').addClass('holostic_img_addanimtn_cls10');
                                            setTimeout(function(){
                                                jQuery('.holostic_img_cls4').addClass('holostic_img_addanimtn_cls4');
                                                setTimeout(function(){
                                                    jQuery('.holostic_img_cls2').addClass('holostic_img_addanimtn_cls2');
                                                    setTimeout(function(){
                                                        jQuery('.holostic_img_cls12').addClass('holostic_img_addanimtn_cls12');
                                                    }, 300);
                                                }, 300);
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
        }, 300);

        setTimeout(function(){

            setTimeout(function(){
                jQuery('.leave_img, .tp_leave_img, .latp_leave_img, .cats_crcle_img, .blecut_crcle_img, .frme_lyer_img, .tparrw_lyer_img, .ylwstrip_lyer_img, .lck_crcle_img').addClass('transitn_none_cls');
            }, 2000);

                // if(document.body.clientWidth>500){
                setTimeout(function(){
                    jQuery('.page-template-home .logo-part span').addClass('span_lne_anim_cls');
                }, 500);
                setTimeout(function(){
                    jQuery('.holistic-sec .left hr').addClass('hr_lne_anim');
                }, 600);
                setTimeout(function(){
                    jQuery('.page-template-home .logo-part').addClass('logo_prt_anim');
                    jQuery('.shwcse_hedng_cls h3').addClass('h3_opacity_cls');
                }, 800);
                setTimeout(function(){
                    jQuery('.shwcse_hedng_cls .h2_cls').addClass('h2_cls_trnslte_anim');
                }, 1000);
                setTimeout(function(){
                    jQuery('.shwcse_hedng_cls .h2_cls').addClass('h2_cls_anim');
                }, 1200);
                setTimeout(function(){
                    jQuery('.shwcse_hedng_cls span').addClass('span_anim');
                    jQuery('.shwcse_hedng_cls p').addClass('p_anim');
                }, 1400);
                setTimeout(function(){
                    jQuery('.page-template-home .globalClass').addClass('globl_anim_cls');
                }, 1600);
            //}

        },2000);

        function landingpageAnimtin() {
            var windowwdthsze = jQuery(window).width();
    
            if (windowwdthsze <= 767) {
                jQuery('body.page-template-landingPagetest').addClass('overflw_hiddn_cls');
                    jQuery('#dgstudio_svg_ani svg g[mask="url(#__lottie_element_148)"] rect, #dgstudio_svg_ani svg g[mask="url(#__lottie_element_142)"] rect').removeClass('rectngle_white_cls');
                    setTimeout(function(){
                        jQuery('#dgstudio_svg_ani svg g[mask="url(#__lottie_element_148)"] rect, #dgstudio_svg_ani svg g[mask="url(#__lottie_element_142)"] rect').addClass('rectngle_white_cls');
                    },4500);
                    setTimeout(function(){
                        jQuery(".dg_logo").animate({left: '-120px', top: '23px', width:'180px', margin:'0 0 0 -55px'},1500, function() {
                            setTimeout(function(){
                                jQuery('.tp_tagline').animate({opacity:'1'},500);
                                    jQuery(window).scroll(function() {    
                                        var scrolltopsvgtag = jQuery(window).scrollTop();
                                        jQuery('.tp_tagline').css({'opacity':(( 200-scrolltopsvgtag )/200)});
                                    });
                            }, 100);
                            jQuery('.header_inner_btm_brd_cls').animate({width:'100%',opacity:'1'},500);
                            setTimeout(function(){
                                jQuery('.svg_crcle_ani_cls').animate({width:'66px', opacity:'1'},500);
                                jQuery('.landing_rght_social_icn_cls').animate({opacity:'1'},500);
                                setTimeout(function(){
                                    jQuery('.shwcse_headings').animate({opacity:'1'},500);
                                    setTimeout(function(){
                                        jQuery('.dt_arrw_svg').animate({opacity:'1'},500);
                                        jQuery('.shwcse_svg_cls').css({opacity:'1'},500);
                                        jQuery('#landingFormsec').css('display', 'block');
                                        jQuery('body.page-template-landingPagetest').removeClass('overflw_hiddn_cls');
                                    }, 500);
                                }, 500);
                            }, 100);
                        });
                },5000);
            }
            else {
                jQuery('body.page-template-landingPagetest').addClass('overflw_hiddn_cls');
                    jQuery('#dgstudio_svg_ani svg g[mask="url(#__lottie_element_148)"] rect, #dgstudio_svg_ani svg g[mask="url(#__lottie_element_142)"] rect').removeClass('rectngle_white_cls');
                    setTimeout(function(){
                        jQuery('#dgstudio_svg_ani svg g[mask="url(#__lottie_element_148)"] rect, #dgstudio_svg_ani svg g[mask="url(#__lottie_element_142)"] rect').addClass('rectngle_white_cls');
                    },4500);
                    setTimeout(function(){
                        jQuery(".dg_logo").animate({left: '-120px', top: '23px', width:'350px', margin:'0 0 0 -94px'},1500, function() {
                            setTimeout(function(){
                                jQuery('.tp_tagline').animate({opacity:'1'},500);
                                    jQuery(window).scroll(function() {    
                                        var scrolltopsvgtag = jQuery(window).scrollTop();
                                        jQuery('.tp_tagline').css({'opacity':(( 200-scrolltopsvgtag )/200)});
                                    });
                            }, 100);
                            jQuery('.header_inner_btm_brd_cls').animate({width:'100%',opacity:'1'},500);
                            setTimeout(function(){
                                jQuery('.svg_crcle_ani_cls').animate({width:'180px', opacity:'1'},500);
                                jQuery('.landing_rght_social_icn_cls').animate({opacity:'1'},500);
                                setTimeout(function(){
                                    jQuery('.shwcse_headings').animate({opacity:'1'},500);
                                    setTimeout(function(){
                                        jQuery('.dt_arrw_svg').animate({opacity:'1'},500);
                                        jQuery('.shwcse_svg_cls').css({opacity:'1'},500);
                                        jQuery('#landingFormsec').css('display', 'block');
                                        jQuery('body.page-template-landingPagetest').removeClass('overflw_hiddn_cls');
                                    }, 500);
                                }, 500);
                            }, 100);
                        });
                },5000);
            }
        }
        
        landingpageAnimtin();

        jQuery(".dt_arrw_svg a").click(function() {
            jQuery('html, body').animate({
                scrollTop: jQuery("#landingFormsec").offset().top
            }, 2000);
        });

        jQuery(".goto_tp_arrw_cls a").click(function() { 
            jQuery('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        jQuery(window).scroll(function() {    
            var scrolltopsvg = jQuery(window).scrollTop();
            jQuery('.svg_crcle_ani_cls svg').css({'opacity':(( 500-scrolltopsvg )/500)});
            // jQuery('.tp_tagline').css({'opacity':(( 200-scrolltopsvg )/200)});
        });

        /*new fullpage('.landingfullpage', {
            sectionsColor: [],
        });*/

        // jQuery('.our_work_tab_cls').slick({
        //     centerMode: true,
        //     centerPadding: '0px',
        //     slidesToShow: 5,
        //     slidesToScroll: 1,          
        //     prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
        //         nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
        //     responsive: [
        //       {
        //         breakpoint: 1200,
        //         settings: {
        //           centerMode: true,
        //           centerPadding: '0px',
        //           slidesToShow: 4
        //         }
        //       },
        //       {
        //         breakpoint: 768,
        //         settings: {
        //           centerMode: true,
        //           centerPadding: '0px',
        //           slidesToShow: 3
        //         }
        //       },
        //       {
        //         breakpoint: 480,
        //         settings: {
        //           centerMode: true,
        //           centerPadding: '0px',
        //           slidesToShow: 2
        //         }
        //       }
        //     ]
        //   });

          jQuery('.our_work_tab_cls').slick({
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1
                }
              }
            ]
          });
          
        //   jQuery('.blue-pacific-slider').slick({
        //         autoplay: true,
        //         autoplaySpeed: 5000,
        //         prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
        //         nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
        //  });

          Splitting();
          new WOW({
            mobile:       false
            }).init();

        jQuery("#refer_a_friend_form .plus-icon").on("click", function(){
			var friends_details_divs = jQuery("#refer_a_friend_form .friends_details").length;
			friends_details_divs++;
			console.log(friends_details_divs);
			jQuery(this).prev(".friends_details").after('<div class="friends_details" style="margin-top:10%;"><input type="text" class="form-control" placeholder="Your friend\'s name" name="your_friend_name[]" id="your_friend_name_'+friends_details_divs+'" required><input type="email" class="form-control" placeholder="Your friend\'s email" name="your_friend_email[]" id="your_friend_email_'+friends_details_divs+'" required><div class="minus-icon"><span><i class="fa fa-minus" aria-hidden="true"></i></span></div></div>');
		});
        jQuery("#refer_a_friend_form").on("click", ".minus-icon", function(){
			jQuery(this).parents(".friends_details").remove();
		});
		
	jQuery("#refer_a_friend_form").validate({
		submitHandler: function() {
			var data = {
				'action': 'refer_a_friend_form',
				'data'  : jQuery("#refer_a_friend_form").serializeArray(),
				'type'  : 'post',
			};

			jQuery.post(ajaxurl, data, function(response) {
				response = jQuery.parseJSON(response);
				if(response.error == 1){
					jQuery("#refer_a_friend_form").siblings(".messageArea").html(response);
				}else{
					/*jQuery("#refer_a_friend_form").siblings(".messageArea").html('<p style="color:green;">Thank you for your referal.</p>');
					setTimeout(function(){
						window.location = window.location;
					},3000);*/
					alert("Request has been sent!");
					jQuery("#refer_a_friend_form button[type='submit']").text("Sent");
					jQuery("#refer_a_friend_form button[type='submit']").attr('disabled','disabled');
					jQuery("#refer_a_friend_form button[type='submit']").css('border-color','#73d438');
					jQuery("#refer_a_friend_form button[type='submit']").css('border-width','5px');
					jQuery("#refer_a_friend_form button[type='submit']").trigger('blur'); 
					jQuery("#refer_a_friend_form button[type='submit']").unbind('mouseenter mouseleave');
					
					jQuery("#refer_a_friend_form input[type='text']").val('');
					jQuery("#refer_a_friend_form input[type='email']").val('');
					jQuery("#refer_a_friend_form textarea").val('');
					if(jQuery("#refer_a_friend_form .friends_details").length > 1){
						for(var i=0;i<=jQuery("#refer_a_friend_form .friends_details").length;i++){
							console.log(i);
							jQuery("#refer_a_friend_form .friends_details").eq(i).remove();
						}
					}
				}
			});
		}
	});	
    
		if(jQuery("#load_more_archive").length){
			if(jQuery(".archivebox .archiveboxinner ul li").length > 12){
				jQuery(".archivebox .archiveboxinner ul li").slice(12,jQuery(".archivebox .archiveboxinner ul li").length).hide();
			}else{
				jQuery("#load_more_archive").hide();
			}
			
			jQuery("#load_more_archive").on("click", function(){
				jQuery(".archivebox .archiveboxinner ul li").slice(12,jQuery(".archivebox .archiveboxinner ul li").length).show();
				jQuery(this).hide();
			});
		}
    });

    var waypoint = new Waypoint({
        element: document.getElementById('footerID'),
        handler: function(direction) {
          if (direction === 'down') { 
            setTimeout(function(){
                jQuery(".footLogo").css("opacity", "1").addClass("animated slideInLeft");
            },300);
            setTimeout(function(){
                jQuery("._GetStratBtnfotter").css("opacity", "1").addClass("animated slideInRight");
            },300);
            setTimeout(function(){
                jQuery(".borderBotomfooter").addClass("active");
            },350); 
            setTimeout(function(){
                jQuery(".footer_holistc_aprch_cls h5").css("opacity", "1").addClass("animated slideInUp");
                jQuery(".footer_holistc_aprch_cls ul").css("opacity", "1").addClass("animated slideInUp");
                jQuery(".socialLinks").css("opacity", "1").addClass("animated slideInUp");
            },370);
            setTimeout(function(){
                jQuery(".footBtm").css("opacity", "1").addClass("animated fadeIn");
            },500);
            
    
           console.log("footer");
          }
        },
          offset: '80%'
       });
	   

       var animationPinkArrwanimData2 = {"v":"5.5.7","fr":30,"ip":0,"op":106,"w":157,"h":28,"nm":"Flecha","ddd":0,"assets":[{"id":"image_0","w":92,"h":24,"u":"/wp-content/themes/dgstudio/images/","p":"img_pinkarrwanim0.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"58•Flecha PA","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[109.642,14.245,0],"ix":2},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[79.147,9.197],[74.936,9.197],[74.936,14.013],[79.147,14.013]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[86.147,9.105],[74.936,9.197],[74.936,14.013],[86.147,13.921]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[86.147,9.105],[74.936,9.197],[74.936,14.013],[86.147,13.921]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":46,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[74.936,9.197],[74.936,14.013],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[74.936,9.197],[74.936,14.013],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":61,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[80.436,9.105],[80.436,13.921],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":91,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[80.436,9.105],[80.436,13.921],[91.897,13.988]],"c":true}]},{"t":92,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[85.686,9.171],[85.686,13.988],[91.897,13.988]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ip":0,"op":106,"st":-200,"bm":0},{"ddd":0,"ind":2,"ty":1,"nm":"Sólido Azul","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-721,286,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1755.439,248.961],[1682.5,248.961],[1682.5,284.73],[1755.439,284.73]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"sw":1920,"sh":1080,"sc":"#007aff","ip":0,"op":106,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"58•Flecha F1 Nuevas","tt":1,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.293],"y":[1]},"o":{"x":[1],"y":[0]},"t":46,"s":[106.409]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[1],"y":[0]},"t":60,"s":[48.409]},{"t":92,"s":[107.709]}],"ix":3},"y":{"a":0,"k":14.245,"ix":4}},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ip":46,"op":92,"st":-180,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"58•Flecha F1 Original","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[107.409,14.245,0],"ix":2},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ef":[{"ty":22,"nm":"Stroke","np":13,"mn":"ADBE Stroke","ix":1,"en":1,"ef":[{"ty":10,"nm":"Path","mn":"ADBE Stroke-0001","ix":1,"v":{"a":0,"k":1,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Stroke-0010","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Stroke Sequentially","mn":"ADBE Stroke-0011","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":2,"nm":"Color","mn":"ADBE Stroke-0002","ix":4,"v":{"a":0,"k":[0,0,0,1],"ix":4}},{"ty":0,"nm":"Brush Size","mn":"ADBE Stroke-0003","ix":5,"v":{"a":0,"k":3.2,"ix":5}},{"ty":0,"nm":"Brush Hardness","mn":"ADBE Stroke-0004","ix":6,"v":{"a":0,"k":0.95,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Stroke-0005","ix":7,"v":{"a":0,"k":1,"ix":7}},{"ty":0,"nm":"Start","mn":"ADBE Stroke-0008","ix":8,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":71,"s":[100]},{"t":105,"s":[0]}],"ix":8}},{"ty":0,"nm":"End","mn":"ADBE Stroke-0009","ix":9,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[100]},{"t":81,"s":[0]}],"ix":9}},{"ty":7,"nm":"Spacing","mn":"ADBE Stroke-0006","ix":10,"v":{"a":0,"k":15,"ix":10}},{"ty":7,"nm":"Paint Style","mn":"ADBE Stroke-0007","ix":11,"v":{"a":0,"k":3,"ix":11}}]}],"ip":92,"op":106,"st":-134,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"58•Flecha F1 Nueva","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.161]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[112.342]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.076]},"t":15,"s":[106.409]},{"i":{"x":[0.002],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[62.542]},{"t":46,"s":[106.409]}],"ix":3},"y":{"a":0,"k":14.245,"ix":4}},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ef":[{"ty":22,"nm":"Stroke","np":13,"mn":"ADBE Stroke","ix":1,"en":1,"ef":[{"ty":10,"nm":"Path","mn":"ADBE Stroke-0001","ix":1,"v":{"a":0,"k":1,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Stroke-0010","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Stroke Sequentially","mn":"ADBE Stroke-0011","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":2,"nm":"Color","mn":"ADBE Stroke-0002","ix":4,"v":{"a":0,"k":[0,0,0,1],"ix":4}},{"ty":0,"nm":"Brush Size","mn":"ADBE Stroke-0003","ix":5,"v":{"a":0,"k":3.2,"ix":5}},{"ty":0,"nm":"Brush Hardness","mn":"ADBE Stroke-0004","ix":6,"v":{"a":0,"k":0.95,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Stroke-0005","ix":7,"v":{"a":0,"k":1,"ix":7}},{"ty":0,"nm":"Start","mn":"ADBE Stroke-0008","ix":8,"v":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"t":46,"s":[38.235]}],"ix":8}},{"ty":0,"nm":"End","mn":"ADBE Stroke-0009","ix":9,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":35,"s":[0]}],"ix":9}},{"ty":7,"nm":"Spacing","mn":"ADBE Stroke-0006","ix":10,"v":{"a":0,"k":15,"ix":10}},{"ty":7,"nm":"Paint Style","mn":"ADBE Stroke-0007","ix":11,"v":{"a":0,"k":3,"ix":11}}]}],"ip":0,"op":46,"st":-180,"bm":0}],"markers":[]};

       var animationArrwanimData = {"v":"5.5.7","fr":30,"ip":0,"op":106,"w":157,"h":28,"nm":"Flecha","ddd":0,"assets":[{"id":"image_0","w":92,"h":24,"u":"/wp-content/themes/dgstudio/images/","p":"img_arrwanim0.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"58•Flecha PA","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[109.642,14.245,0],"ix":2},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[79.147,9.197],[74.936,9.197],[74.936,14.013],[79.147,14.013]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[86.147,9.105],[74.936,9.197],[74.936,14.013],[86.147,13.921]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[86.147,9.105],[74.936,9.197],[74.936,14.013],[86.147,13.921]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":46,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[74.936,9.197],[74.936,14.013],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[74.936,9.197],[74.936,14.013],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":61,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[80.436,9.105],[80.436,13.921],[91.897,13.988]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":91,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[80.436,9.105],[80.436,13.921],[91.897,13.988]],"c":true}]},{"t":92,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[91.897,9.171],[85.686,9.171],[85.686,13.988],[91.897,13.988]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ip":0,"op":106,"st":-200,"bm":0},{"ddd":0,"ind":2,"ty":1,"nm":"Sólido Azul","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-721,286,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1755.439,248.961],[1682.5,248.961],[1682.5,284.73],[1755.439,284.73]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"sw":1920,"sh":1080,"sc":"#007aff","ip":0,"op":106,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"58•Flecha F1 Nuevas","tt":1,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.293],"y":[1]},"o":{"x":[1],"y":[0]},"t":46,"s":[106.409]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[1],"y":[0]},"t":60,"s":[48.409]},{"t":92,"s":[107.709]}],"ix":3},"y":{"a":0,"k":14.245,"ix":4}},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ip":46,"op":92,"st":-180,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"58•Flecha F1 Original","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[107.409,14.245,0],"ix":2},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ef":[{"ty":22,"nm":"Stroke","np":13,"mn":"ADBE Stroke","ix":1,"en":1,"ef":[{"ty":10,"nm":"Path","mn":"ADBE Stroke-0001","ix":1,"v":{"a":0,"k":1,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Stroke-0010","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Stroke Sequentially","mn":"ADBE Stroke-0011","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":2,"nm":"Color","mn":"ADBE Stroke-0002","ix":4,"v":{"a":0,"k":[0,0,0,1],"ix":4}},{"ty":0,"nm":"Brush Size","mn":"ADBE Stroke-0003","ix":5,"v":{"a":0,"k":3.2,"ix":5}},{"ty":0,"nm":"Brush Hardness","mn":"ADBE Stroke-0004","ix":6,"v":{"a":0,"k":0.95,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Stroke-0005","ix":7,"v":{"a":0,"k":1,"ix":7}},{"ty":0,"nm":"Start","mn":"ADBE Stroke-0008","ix":8,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":71,"s":[100]},{"t":105,"s":[0]}],"ix":8}},{"ty":0,"nm":"End","mn":"ADBE Stroke-0009","ix":9,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[100]},{"t":81,"s":[0]}],"ix":9}},{"ty":7,"nm":"Spacing","mn":"ADBE Stroke-0006","ix":10,"v":{"a":0,"k":15,"ix":10}},{"ty":7,"nm":"Paint Style","mn":"ADBE Stroke-0007","ix":11,"v":{"a":0,"k":3,"ix":11}}]}],"ip":92,"op":106,"st":-134,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"58•Flecha F1 Nueva","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.161]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[112.342]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.076]},"t":15,"s":[106.409]},{"i":{"x":[0.002],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[62.542]},{"t":46,"s":[106.409]}],"ix":3},"y":{"a":0,"k":14.245,"ix":4}},"a":{"a":0,"k":[45.933,11.85,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.541,2.105],[2.041,11.105],[11.541,22.105],[11.541,11.855],[72.041,11.355]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ef":[{"ty":22,"nm":"Stroke","np":13,"mn":"ADBE Stroke","ix":1,"en":1,"ef":[{"ty":10,"nm":"Path","mn":"ADBE Stroke-0001","ix":1,"v":{"a":0,"k":1,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Stroke-0010","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":7,"nm":"Stroke Sequentially","mn":"ADBE Stroke-0011","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":2,"nm":"Color","mn":"ADBE Stroke-0002","ix":4,"v":{"a":0,"k":[0,0,0,1],"ix":4}},{"ty":0,"nm":"Brush Size","mn":"ADBE Stroke-0003","ix":5,"v":{"a":0,"k":3.2,"ix":5}},{"ty":0,"nm":"Brush Hardness","mn":"ADBE Stroke-0004","ix":6,"v":{"a":0,"k":0.95,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Stroke-0005","ix":7,"v":{"a":0,"k":1,"ix":7}},{"ty":0,"nm":"Start","mn":"ADBE Stroke-0008","ix":8,"v":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"t":46,"s":[38.235]}],"ix":8}},{"ty":0,"nm":"End","mn":"ADBE Stroke-0009","ix":9,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":35,"s":[0]}],"ix":9}},{"ty":7,"nm":"Spacing","mn":"ADBE Stroke-0006","ix":10,"v":{"a":0,"k":15,"ix":10}},{"ty":7,"nm":"Paint Style","mn":"ADBE Stroke-0007","ix":11,"v":{"a":0,"k":3,"ix":11}}]}],"ip":0,"op":46,"st":-180,"bm":0}],"markers":[]};
    
       var paramsPinkArrwanim2 = {
            container: document.getElementById('pinkarrwanim2'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationPinkArrwanimData2
        };
        var pinkanimArrwanim2;
        pinkanimArrwanim2 = lottie.loadAnimation(paramsPinkArrwanim2);

        var paramsbktpAllArrwanim = {
            container: document.getElementById('bktpAllarrwanim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationArrwanimData
        };
        var animbktpAllArrwanim;
        animbktpAllArrwanim = lottie.loadAnimation(paramsbktpAllArrwanim);
    

    /* End Scrollify js */
    
//Back to top scroll

jQuery(document).ready(function() {
    var scrollTop     = jQuery(window).scrollTop();
    elementOffset = jQuery('.calendly-popup').offset().top;
    distance      = (elementOffset - scrollTop);
    Adistance= distance + 88;
    var Leftdistance = jQuery('.calendly-popup').offset().left + 77;
    jQuery(".calendly-popup-close").css("top", Adistance);
})
