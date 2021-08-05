jQuery(document).ready(function($) {
	$(this).scrollTop(0);
		//$(".heding_anim_cls").removeClass("heding_anim_onscrn_cls");
		//jQuery("._ContactusTitle").delay(500).css("opacity", "1").addClass("heding_anim_onscrn_cls");

		setTimeout(() => {
			jQuery("._ContactusTitle").delay(500).css("opacity", "1").addClass("heding_anim_onscrn_cls");
		}, 500);

	
});

// jQuery("#shcedulebtnClick").click(function(){
// 	setTimeout(() => {
// 	  schedulebtnmodal();
// 	}, 1000);
// })

// function schedulebtnmodal(){

// 	// var scrollTop     = jQuery(window).scrollTop();
// 	var elementOffsetInnerWidth = jQuery('.calendly-popup').innerWidth();
// 	var elementOffsetouterWidth = jQuery('.calendly-popup').outerWidth()*8/100;
// 	var elementOffsetouterWidthLeft = jQuery('.calendly-popup').outerWidth()*7/100;
// 	var elementOffsetTop = parseFloat(jQuery('.calendly-popup').position().top) + parseFloat(elementOffsetouterWidth);
// 	var elementOffsetLeft = parseFloat(jQuery('.calendly-popup').position().left) + parseFloat(elementOffsetInnerWidth) - parseFloat(elementOffsetouterWidthLeft);
	
// 	// distance      = (elementOffset - scrollTop);
// 	// Adistance= distance + 88;
// 	// var Leftdistance = jQuery('.calendly-popup').offset().left + 77;
// 	jQuery(".calendly-popup-close").css("top", elementOffsetTop);
// 	jQuery(".calendly-popup-close").css("left", elementOffsetLeft);
// }


/*=======================================

      Banner Page Animation
 
 ==========================================*/

//Right Side Bar humberger menu animation
setTimeout(function(){
	jQuery('.sml_dg_logo_cls').removeClass('sml_dg_logo_ani_cls');
}, 300);
setTimeout(function(){
	jQuery('.sml_dg_logo_cls img').addClass('sml_dg_logo_ani_cls_img');
}, 500);
setTimeout(function(){
	jQuery('.side_menu_cls').removeClass('side_menu_onloadanim_cls');
	jQuery('.side_blue_br_cls').addClass('side_blue_br_ani_cls');
}, 700);
setTimeout(function(){
	jQuery('.humburger_menu').addClass('humburger_menu_ani');
	jQuery('.menu_rght_arrw').css('opacity', '1');
}, 800);
setTimeout(function(){
	jQuery('.side_blue_br_cls').addClass('side_blue_br_ani_cls');
}, 1000);

//Right Side Bar humberger menu animation

jQuery("#logoSection").delay(1400).fadeIn(300);

// Banner background animate
var bbgSlide= setTimeout(function() {
jQuery(".bannerCoverB_css").animate({
	width: "65%",
}, 600);
});

 setTimeout(() => {
	 jQuery(".bannerGrayB_css").delay(150).animate({
		opacity:1,
	},800, function(){
	});
 });
 setTimeout(() => {
	jQuery(".animationedDIvBox").delay(100).animate({
	   opacity:1,
	   height: '0%'
   },800, function(){
   });
});

// Banner border animate
var bt= setTimeout(function() {
jQuery(".borderbottom").animate({
width: "39.6%",
}, 1000);
});

//Banner text move animation
	// var textWrapper = document.querySelector('.bannerGrayB_css h2');
	// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
	
	// anime.timeline({loop: false})
	// 	.add({
	// 	targets: '.bannerGrayB_css .letter',
	// 	rotateY: [-90, 0],
	// 	duration: 1300,
	// 	delay: function(el, i) {
	// 	return 45 * i;
	// 	}
	// });
	
	jQuery(".threeDima_css img").addClass("zoomimg");
	jQuery(".threeDima_css").css({"opacity": "1"});
/*=======================================

       For Validate Form 
 
 ==========================================*/
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var $CLickBtn;
jQuery(".btnPrevSlide").on("click", function(){
	var curr_slide = jQuery(this).parents(".carousel-item.slide.active");
	var prev_slide = jQuery(this).parents('.carousel-item.slide.active').prev('.carousel-item');
	var current_slide_form_id = jQuery(this).parents("form").attr("id");
	console.log(curr_slide);
	/*show the next fieldset*/
	jQuery(".get_started_form_identifiers li.active:last").removeClass("active");

	curr_slide.find('label').addClass("fadeOutUp animated");
	curr_slide.find(".text-muted").addClass("fadeOutUp animated");

	curr_slide.removeClass("active");
	
	curr_slide.find('label').removeClass("fadeInUp animated fadeOutUp");
	curr_slide.find('.text-muted').removeClass("fadeInUp animated fadeOutUp");
	

	prev_slide.find('label').removeClass("fadeInUp animated");
	prev_slide.find('.text-muted').removeClass("fadeInUp animated");
	prev_slide.addClass("active");
	if(current_slide_form_id == "get_started_form_step_2"){
		prev_slide.find("input[type='email']").focus();
	}else{
		prev_slide.find("input[type='text']").focus();
	}
});
jQuery(".btnSlide").on("click", function(){
	$CLickBtn =jQuery(this);
	jQuery(".get_started_form_slides .carousel-item.active").find("form").submit();
});
jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
jQuery.validator.setDefaults({
	submitHandler: function(form) {
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale; //fieldset properties which we will animate
		var animating; //flag to prevent quick multi-click glitches
		var current_step;
		var current_form = jQuery(this);
		/*console.log(current_form);*/
		jQuery(".show_message").html('');
		jQuery(".show_message").hide();
		/* Go to Next Step Starts */
		if(animating) return false;
		animating = true;
		
		jQuery.map(current_form, function(val, key) {
			current_step = val.currentForm.id;
			current_form = val;
		});
		var current_form_id = current_form.currentForm.id;
		current_fs = jQuery('#'+current_step).parents(".carousel-item");
		next_fs = jQuery('#' + current_step).parents('.carousel-item').next('.carousel-item');
		/* Insert Data Start */ 
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : jQuery("#"+current_form_id).serializeArray(),
			'step'  : current_step,
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				console.log(current_fs);
				jQuery(current_fs).parents(".form-textfield").siblings(".form-box").find(".form_message").html(response.msg);
				setTimeout(function(){
					jQuery(current_fs).parents(".form-textfield").siblings(".form-box").find(".form_message").html("");
				},5000);
			}else{
				if(current_form_id != "get_started_form_step_5"){
					/*show the next fieldset*/
					jQuery(".get_started_form_identifiers li.active:last").next("li").addClass("active");
					/* current_fs.addClass("slideInLeft animated"); */

					/* current_fs.children().find("button").removeClass("fadeInLeft"); */
					current_fs.find('label').addClass("fadeOutUp animated");
					current_fs.find(".text-muted").addClass("fadeOutUp animated");
					/* current_fs.children().find("button").addClass("fadeOutRight"); */

					current_fs.removeClass("active");
					

					next_fs.find('label').addClass("fadeInUp animated");
					next_fs.find('.text-muted').addClass("fadeInUp animated");
					next_fs.addClass("active");
					if(current_form_id == "get_started_form_step_2"){
						next_fs.find("input[type='email']").focus();
					}else{
						next_fs.find("input[type='text']").focus();
					}
					/* Go to Next Step Ends */
				}else{
					// alert("Thank You for contacting us.");
					// //jQuery(".identity-scroll-left").click(function() {
						jQuery('.service-zone').addClass('contct_sec_disply_blck');
						jQuery("#btnSlide").focus();
						jQuery('html, body').animate({
						  scrollTop: jQuery("#ServiceZone_ID").offset().top
						}, 1500);
					//   //}); 
				  
				}
			}
		});
	},
	highlight: function(element, errorClass, validClass) {
		jQuery(element).prev("small").addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
		jQuery(element).prev("small").removeClass(errorClass).addClass(validClass);
    }
});

jQuery("#get_started_form_step_1").validate();
jQuery("#get_started_form_step_2").validate();
jQuery("#get_started_form_step_3").validate();
jQuery("#get_started_form_step_4").validate();
jQuery("#get_started_form_step_5").validate();

jQuery("#specifications_form_step_1").validate({
	submitHandler: function() {
		if(jQuery.trim(jQuery("#specifications_form_step_1 .messageDiscriptionArea").text()) != ""){
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : jQuery("#specifications_form_step_1 .messageDiscriptionArea").text(),
			'step'  : "specification_form_step_1",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#specifications_form_step_1").siblings(".form_message").html(response);
			}else{
				alert("Request Sent successfully");
				var user_comments = jQuery("#specifications_form_step_1 .messageDiscriptionArea").text();
				jQuery('.messageDiscriptionArea').html('Thank you for contacting us. You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your project.');
				/*jQuery('#SendProjectbtn').html('SENT<div id="tick">&#10003;</tick>');*/
				jQuery('#SendProjectbtn').html('SENT');
				jQuery('#SendProjectbtn').attr('disabled','disabled');
				jQuery('#SendProjectbtn').css('border-color','#73d438');
				jQuery('#SendProjectbtn').css('border-width','5px');
				jQuery('#SendProjectbtn').trigger('blur'); 
				jQuery('#SendProjectbtn').unbind('mouseenter mouseleave');
				jQuery('.messageDiscriptionArea').attr('contenteditable','false');
				
				setTimeout(function(){
					jQuery("#capsulecrm_form input[name='PERSON_NAME']").val(jQuery("#get_started_form_step_1 #get_started_name").val());
					jQuery("#capsulecrm_form input[name='JOB_TITLE']").val(jQuery("#get_started_form_step_2 #get_started_role").val());
					jQuery("#capsulecrm_form input[name='EMAIL']").val(jQuery("#get_started_form_step_3 #get_started_email").val());
					jQuery("#capsulecrm_form input[name='PHONE']").val(jQuery("#get_started_form_step_4 #get_started_phone").val());
					jQuery("#capsulecrm_form input[name='ORGANISATION_NAME']").val(jQuery("#get_started_form_step_5 #get_started_company").val());
					var selected_services = [];
					for(var i=1;i<=4;i++){
						jQuery(".services_"+i+" li").each(function(){
							if(jQuery(this).find("input[type='checkbox']").is(':checked')){
								selected_services.push(jQuery(this).find("input[type='checkbox']:checked").val());
							}
						});
					}
					jQuery("#capsulecrm_form input[name='CUSTOMFIELD[Services]']").val(selected_services.join(" & "));
					jQuery("#capsulecrm_form input[name='NOTE']").val(user_comments);
					
					jQuery("#capsulecrm_form").submit();
				}, 3000);
			}
		});		
		}else{
			alert("Please describe your request");
		}
	}
});
jQuery(document).on('keypress',function(e) {
    if(e.which == 13) {
        jQuery(":focus").each(function() {
			if(this.id == "btnSlide"){
				jQuery(".carousel-control-next").trigger("click");
			}
		});
    }
});
jQuery("#ServiceList").on("click", "li", function(){
	var curr_slide = jQuery(this).attr("slide-attr");
	curr_slide = parseInt(curr_slide)-1;
	jQuery("#carouselExampleControls").carousel(parseInt(curr_slide));
	jQuery("#ServiceList li").removeClass("active");
	for(var a=0;a<=curr_slide;a++){
		jQuery("#ServiceList li").eq(a).addClass("active");
	}
	if(curr_slide == 0){
		jQuery(".btnPrevService").hide();
	}else{
		jQuery(".btnPrevService").show();
	}
	if(curr_slide < 3){
		jQuery("#btnSlide").show();
		jQuery(".SlideDownBtn").hide();
	}else{
		jQuery("#btnSlide").hide();
		jQuery(".SlideDownBtn").show();
	}
	/*if(curr_slide == 0){
		jQuery("#ServiceList li").eq(0).addClass("active");
	}else if(curr_slide > 0){
		for(var a=0;a<curr_slide;a++){
			jQuery("#ServiceList li").eq(a).addClass("active");
		}
	}*/
	
});
jQuery("#carouselExampleControls").on("click", ".btnPrevService", function(){
	var curr_slide = jQuery("#ServiceList li.active").length;
	curr_slide = parseInt(curr_slide)-2;
	jQuery("#carouselExampleControls").carousel(parseInt(curr_slide));
	jQuery("#ServiceList li").removeClass("active");
	for(var a=0;a<=curr_slide;a++){
		jQuery("#ServiceList li").eq(a).addClass("active");
	}
	if(curr_slide == 0){
		jQuery(".btnPrevService").hide();
	}else{
		jQuery(".btnPrevService").show();
	}
	if(curr_slide < 3){
		jQuery("#btnSlide").show();
		jQuery(".SlideDownBtn").hide();
	}else{
		jQuery("#btnSlide").hide();
		jQuery(".SlideDownBtn").show();
	}	
});
//============================================

//Animation Funcation on Page Load

//============================================

// function animationFunction() {

// 		jQuery("#logoSection").delay(1400).fadeIn(300);

// 		// Banner background animate
// 	var bbgSlide= setTimeout(function() {
// 		jQuery(".bannerCoverB_css").animate({
// 			width: "65%",
// 		}, 600);
		
// 	});


// 	// Banner border animate
// 	var bt= setTimeout(function() {
// 		jQuery(".borderbottom").animate({
// 		width: "49%",
// 	}, 1000);
// 	});

// 		//Banner text move animation
// 			var textWrapper = document.querySelector('.bannerGrayB_css h2');
// 			textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
			
// 			anime.timeline({loop: false})
// 				.add({
// 				targets: '.bannerGrayB_css .letter',
// 				rotateY: [-90, 0],
// 				duration: 1300,
// 				delay: function(el, i) {
// 				return 45 * i;
// 				}
// 			});
			
// 			jQuery(".threeDima_css img").addClass("zoomimg");

// }


//============================================

//Slide Image Animate left to right method

//============================================
wow = new WOW({
	animateClass: 'animated',
	offset:       0,
	callback:  function(box) {
		setTimeout(function(){
			
			jQuery('.image_div.left, .image_div.right').removeAttr('style');
			jQuery('.image_div.left').css({'z-index': '0'});
			jQuery('.image_div.right').css({"opacity": "1"});
			jQuery('.image_div.left, .image_div.right').removeClass('slideInLeft');
			// jQuery('.image_div.left, .image_div.right').addClass('zoomClass');
		}, 2020);
	}
});
wow.init();
setTimeout(function(){
	jQuery('.image_div.left, .image_div.right').addClass('zoomClass');
},2500)
var slideActive='';
var min_val = 0;
var max_val = 0;
jQuery('#carouselExampleControls').on('slide.bs.carousel', function(e) {
	
	var actionType='', NextSlide='', PrevSlide='', currentSlide = 0; 
	
	jQuery("#ServiceList").find(".active").next().addClass("active");
	/*console.log(jQuery("#ServiceList").find(".active"));*/
	currentSlide = jQuery("#ServiceList").find(".active").length;
	currentSlide = currentSlide - 1;
	actionType = jQuery("#ServiceList").find(".ChartActive").next().attr("slide-attr");
	CurrentActive = jQuery("#ServiceList").find(".ChartActive").next().addClass("ChartActive");
	PrevSlide = jQuery("#ServiceList").find(".ChartActive").prev().removeClass("ChartActive");
	/*console.log(currentSlide);*/
	if(currentSlide == 1){
		var services_1 = [];
		jQuery(".services_1 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				services_1.push(jQuery(this).find("input[type='checkbox']").val());
				
			}	
		});
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : services_1,
			'step'  : "services_form_step_1",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#services_form_step_1").parents("#carouselExampleControls").siblings(".form-box").find(".form_message").html(response);
			}else{
				jQuery(".services_1 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
						max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
					}
				});
				jQuery("#btnSlide").focus();
				/*min_val = max_val;
				jQuery(".services_1 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
							min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
						}
					}
				});*/
			}
		});	
	}else if(currentSlide == 2){
		
		var services_2 = [];
		jQuery(".services_2 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				services_2.push(jQuery(this).find("input[type='checkbox']").val());
			}
		});
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : services_2,
			'step'  : "services_form_step_2",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#services_form_step_2").parents("#carouselExampleControls").siblings(".form-box").find(".form_message").html(response);
			}else{
				jQuery(".services_2 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
						max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
					}
				});
				jQuery("#btnSlide").focus();
				/*min_val = max_val;
				jQuery(".services_2 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
							min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
						}
					}
				});*/
			}
		});	
	}else if(currentSlide == 3){
		var services_3 = [];
		jQuery(".services_3 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				services_3.push(jQuery(this).find("input[type='checkbox']").val());
			}
		});
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : services_3,
			'step'  : "services_form_step_3",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#services_form_step_3").parents("#carouselExampleControls").siblings(".form-box").find(".form_message").html(response);
			}else{
				jQuery(".services_3 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") >= max_val){
							min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
							max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
						}
					}
				});
				jQuery("#btnSlide").focus();
				/*min_val = max_val;
				jQuery(".services_3 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
							min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
						}
					}
				});*/
			}
		});	
	}else if(currentSlide == 4){
		var services_4 = [];
		jQuery(".services_4 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				services_4.push(jQuery(this).find("input[type='checkbox']").val());
			}
		});
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : services_4,
			'step'  : "services_form_step_4",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#services_form_step_4").parents("#carouselExampleControls").siblings(".form-box").find(".form_message").html(response);
			}else{
				jQuery(".services_4 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") >= max_val){
							min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
							max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
						}
					}
				});
				jQuery("#btnSlide").focus();
				/*min_val = max_val;
				jQuery(".services_4 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
							min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
						}
					}
				});*/
			}
		});
	}else if(currentSlide == 5){
		var services_5 = [];
		jQuery(".services_5 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				services_5.push(jQuery(this).find("input[type='checkbox']").val());
			}
		});
		var data = {
			'action': 'dgs_contact_form',
			/*'data'  : current_form.currentElements.serializeArray(),*/
			'data'  : services_5,
			'step'  : "services_form_step_5",
			'type'  : 'post',
		};

		jQuery.post(ajaxurl, data, function(response) {
			response = jQuery.parseJSON(response);
			if(response.error == 1){
				jQuery("#services_form_step_5").parents("#carouselExampleControls").siblings(".form-box").find(".form_message").html(response);
			}else{
				jQuery(".services_5 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") >= max_val){
							min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
							max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
						}
					}
				});
				jQuery("#btnSlide").focus();
				/*min_val = max_val;
				jQuery(".services_5 li").each(function(){
					if(jQuery(this).find("input[type='checkbox']").is(':checked')){
						if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
							min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
						}
					}
				});*/
			}
		});
	}
	console.log("actionType "+actionType);
	if(actionType=="1"){
		jQuery(".btnPrevService").hide();
		chart1();
		jQuery(".chartFirst").show();
		jQuery(".chartSecond").hide();
		jQuery(".chartThired").hide();
		jQuery(".chartFourth").hide();
		jQuery(".chartFifth").hide();	
	}
	else if(actionType=="2"){	
		jQuery(".btnPrevService").show();
		jQuery(".chartFirst").hide();
		jQuery(".chartSecond").show();
		chart2();
	}
	else if(actionType=="3"){
		jQuery(".btnPrevService").show();
		jQuery(".chartFirst").hide();
		jQuery(".chartSecond").hide();
		jQuery(".chartThired").show();
		chart3();
	}
	else if(actionType=="4"){
		jQuery(".btnPrevService").show();
		jQuery("#btnSlide").hide();
		jQuery(".SlideDownBtn").show();
		jQuery(".chartFirst").hide();
		jQuery(".chartSecond").hide();
		jQuery(".chartThired").hide();
		jQuery(".chartFourth").show();
		chart4();
	}
	else if(actionType=="5"){
		jQuery(".btnPrevService").show();
		jQuery("#btnSlide").hide();
		jQuery(".SlideDownBtn").show();
		jQuery(".chartFirst").hide();
		jQuery(".chartSecond").hide();
		jQuery(".chartThired").hide();
		jQuery(".chartFourth").hide();
		jQuery(".chartFifth").show();
		chart5();
		//jQuery("#btnSlide").bind();
	}else if(typeof(actionType) == "undefined"){
		if(currentSlide > 0){
			jQuery(".btnPrevService").show();
		}else{
			jQuery(".btnPrevService").hide();
		}
		if(currentSlide == 3){
			jQuery("#btnSlide").hide();
			jQuery(".SlideDownBtn").show();
			jQuery(".chartFirst").hide();
			jQuery(".chartSecond").hide();
			jQuery(".chartThired").hide();
			jQuery(".chartFourth").show();
			chart4();
		}
	}
});

function SectionSlide(){
	jQuery('.includeSpecifics-zone').addClass('contct_sec_disply_blck');
	jQuery('body.page-template-contact-us footer.site-footer').addClass('contct_sec_disply_blck');
	jQuery('html, body').animate({
		scrollTop: jQuery("#InCludeZone").offset().top
	  }, 1500);
}



function Letsgostrat(){

    setTimeout(function(){//Background color slide left to right
    	jQuery("._HeaderSectionForm").addClass("fadeInLeft").css("opacity", "1");
		   
		  setTimeout(function(){
			jQuery(".transparentbgimage-01").addClass("active").css("opacity", "1"); 

	      setTimeout(function(){ // First Heading slide right to left
			jQuery("._SubHeaderFirst").addClass("fadeInRight").css("opacity", "1");

		 setTimeout(function(){  // Second Heading slide right to left
		    jQuery("._SubHeaderSecond").addClass("fadeInRight").css("opacity", "1");

		    setTimeout(function(){ // Text slide bottom to top
				jQuery(".letsgot-startJS").addClass("fadeInUp").css("opacity", "1");

		    }, 500)
		 },300)
	},150)
},100);
}, 50);

	setTimeout(function() {
		jQuery(".bordertop").animate({
			opacity:1,
			width: "87%",
		 }, 500);
		
	}, 500);

	setTimeout(function() {
		jQuery("._itemTopBordar").animate({
			opacity:1,
			width: "100%",
		 }, 1000);
		
	}, 500);

		setTimeout(function(){
			jQuery("ul.get_started_form_identifiers li.flex-item:eq(0)").css("opacity", "1").addClass("animated flipInX");
		},600)

		setTimeout(function(){
			jQuery("ul.get_started_form_identifiers li.flex-item:eq(1)").css("opacity", "1").addClass("animated flipInX");
		},650)

		setTimeout(function(){
			jQuery("ul.get_started_form_identifiers li.flex-item:eq(2)").css("opacity", "1").addClass("animated flipInX");
		},700)

		setTimeout(function(){
			jQuery("ul.get_started_form_identifiers li.flex-item:eq(3)").css("opacity", "1").addClass("animated flipInX");
		},750)

		setTimeout(function(){
			jQuery("ul.get_started_form_identifiers li.flex-item:eq(4)").css("opacity", "1").addClass("animated flipInX");
		},800)

		setTimeout(function(){
			jQuery("#get_started_form_step_1 label").addClass("fadeInUp animated");
		},850)

		setTimeout(function(){
			jQuery("#get_started_form_step_1 small").addClass("fadeInUp animated");
		},900)

		setTimeout(function(){
			jQuery("#get_started_form_step_1 input").addClass("fadeIn animated");
		},950)
	
}

function ServiceIntrested(){

	setTimeout(function(){
		jQuery("#ServiceInterest_ID").addClass("fadeInLeft").css("opacity", "1");

		setTimeout(function(){
			chart1();
			jQuery('.roundChartValue').show();
			jQuery('.animation_value').each(function () {
				var $this = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
				duration: 1000,
				easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
		   });	
		   setTimeout(function(){
			jQuery(".transparentbgimage-02").addClass("active").css("opacity", "1"); 
			setTimeout(function(){
				
				jQuery("._ServiceListItem").animate({opacity:1,	width: "100%", }, 300);
				setTimeout(function(){

						setTimeout(function(){
							jQuery("ul#ServiceList li.flex-item:eq(0)").css("opacity", "1").addClass("animated flipInX");
						},600)
				
						setTimeout(function(){
							jQuery("ul#ServiceList li.flex-item:eq(1)").css("opacity", "1").addClass("animated flipInX");
						},650)
				
						setTimeout(function(){
							jQuery("ul#ServiceList li.flex-item:eq(2)").css("opacity", "1").addClass("animated flipInX");
						},700)
				
						setTimeout(function(){
							jQuery("ul#ServiceList li.flex-item:eq(3)").css("opacity", "1").addClass("animated flipInX");
						},750)
				
						setTimeout(function(){
							jQuery("ul#ServiceList li.flex-item:eq(4)").css("opacity", "1").addClass("animated flipInX");
						},800)

                    setTimeout(function(){						
						jQuery(".carousel-inner-from .carousel-item h3").css("opacity", "1").addClass("animated fadeIn");

					 setTimeout(function(){
                       jQuery(".UL_list").addClass("animate");
					 },250)
					},200)
				},150)
			}, 100)
		 },300)
		}, 500)	    
	}, 300)

}

function IncludeSpecificszone(){

	setTimeout(function() {
		jQuery("#IncludeSpecific_ID").addClass("fadeInRight").css("opacity", "1");
		
	}, 100);

	setTimeout(function(){
		jQuery(".transparentbgimage-03").addClass("active").css("opacity", "1"); 
	},1000)

	setTimeout(function() {
		jQuery("#includeSpecifics-heading").addClass("fadeInUp").css("opacity", "1");
		
	}, 500);

	setTimeout(function() {
		jQuery("#includeSpecifics-text").addClass("fadeInUp").css("opacity", "1");
	}, 1000);
	
	setTimeout(function() {
		jQuery("#SendProjectbtn").addClass("zoomIn").css("opacity", "1");;
	}, 1000);
	
	setTimeout(function() {
		jQuery(".messageDiscriptionArea").addClass("fadeInUp").css("opacity", "1");
	}, 1000);
	
}

//============================================

//Page Scroll Down Animated at Div

//============================================


var waypoint = new Waypoint({
	element: document.getElementById('letgotstartSection_ID'),
	handler: function(direction) {
	  if (direction === 'down') {
		Letsgostrat();
	//    $("#letgotstartSection_ID").animate({opacity: 1, left:'0%'},500, function() {});
	  }
	},
	  offset: '40%'
   });
   
   var waypoint = new Waypoint({
	element: document.getElementById('ServiceZone_ID'),
	handler: function(direction) {
	  if (direction === 'down') {
		ServiceIntrested();
		jQuery('.price_list_crcle_cls').addClass('crcle_animtnadd_cls');
	  }
	},
	  offset: '60%'
   });

   var waypoint = new Waypoint({
	element: document.getElementById('IncludeSpecific_ID'),
	handler: function(direction) {
	  if (direction === 'down') {
		IncludeSpecificszone();
	  }
	},
	  offset: '60%'
   });
   

   
function chart1(){
	var service_1 = 0;
	var service_2 = 0;
	var service_3 = 0;
	var service_4 = 0;
	var service_5 = 0;
	jQuery(".services_1 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_1 = parseInt(service_1 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_2 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_2 = parseInt(service_2 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_3 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_3 = parseInt(service_3 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_4 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_4 = parseInt(service_4 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_5 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_5 = parseInt(service_5 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	var options = {
		chart: {
			height: 500,
			type: 'radialBar',
			toolbar: {
				show: false
			  },
			  
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 360,
				hollow: {
					margin: 20,
					size: '50%',
					background: '#fff',
					image: undefined,
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
						color: '#000',
						}
								
				},
				track: {
					show: true,
					background: '#fff',
				},
				dataLabels: {
					showOn: 'always',
					name: {
						show:false,
						
					},
					value: {
						show: false,
					},
					total: {
						show: true,
						label: '',
						formatter: function (w) {
							
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							return;
						}
					}
				}
			},
			
		},
		states: {
			normal: {
			  filter: {
				type: 'none',
				value: 0
			  }
			},
			hover: {
			  filter: {
				type: 'none',
				value: false,
			  }
			},
			active: {
			  allowMultipleDataPointsSelection: false,
			  filter: {
				type: 'none',
				value: 0.35
			  }
			}
		  },
		
	
	
		colors: ['#55FF33', '#FF9033', '#33C1FF', '#FFFF33', '#864AED'],
		series: [service_1,service_2,service_3,service_4,service_5],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Moto'],
		legend: {
			show: false,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 1,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}],
		  
	}
	
	var chart = new ApexCharts(
		document.querySelector("#chart"),	
		options
	);
	
	chart.render();
}
		

function chart2(){
	var service_1 = 0;
	var service_2 = 0;
	var service_3 = 0;
	var service_4 = 0;
	var service_5 = 0;
	jQuery(".services_1 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_1 = parseInt(service_1 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_2 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_2 = parseInt(service_2 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_3 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_3 = parseInt(service_3 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_4 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_4 = parseInt(service_4 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_5 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_5 = parseInt(service_5 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	var options = {
		chart: {
			height: 500,
			type: 'radialBar',
			toolbar: {
				show: false
			  }
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 360,
				hollow: {
					margin: 20,
					size: '50%',
					background: '#fff',
					image: undefined,
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
						color: '#000',
						}
								
				},
				track: {
					show: true,
					background: '#fff',
				},
				dataLabels: {
					showOn: 'always',
					name: {
						show:false,
						
					},
					value: {
						show: false,
					},
					total: {
						show: true,
						label: '',
						formatter: function (w) {
							
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
//							return 150
return;
						}
					}
				}
			}
		},
		states: {
			normal: {
			  filter: {
				type: 'none',
				value: 0
			  }
			},
			hover: {
			  filter: {
				type: 'none',
				value: false,
			  }
			},
			active: {
			  allowMultipleDataPointsSelection: false,
			  filter: {
				type: 'none',
				value: 0.35
			  }
			}
		  },
		
	
	
		colors: ['#55FF33', '#FF9033', '#33C1FF', '#FFFF33', '#864AED'],
		series: [service_1,service_2,service_3,service_4,service_5],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Moto'],
		legend: {
			show: false,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 1,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}],
		  
	}
	
	var chart = new ApexCharts(
		document.querySelector("#chart2"),	
		options
	);
	
	chart.render();
	
	
	
}

function chart3(){
	var service_1 = 0;
	var service_2 = 0;
	var service_3 = 0;
	var service_4 = 0;
	var service_5 = 0;
	jQuery(".services_1 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_1 = parseInt(service_1 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_2 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_2 = parseInt(service_2 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_3 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_3 = parseInt(service_3 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_4 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_4 = parseInt(service_4 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_5 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_5 = parseInt(service_5 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	var options = {
		chart: {
			height: 500,
			type: 'radialBar',
			toolbar: {
				show: false
			  }
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 360,
				hollow: {
					margin: 20,
					size: '50%',
					background: '#fff',
					image: undefined,
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
						color: '#000',
						}
								
				},
				track: {
					show: true,
					background: '#fff',
				},
				dataLabels: {
					showOn: 'always',
					name: {
						show:false,
						
					},
					value: {
						show: false,
					},
					total: {
						show: true,
						label: '',
						formatter: function (w) {
							
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							//							return 150
return;
						}
					}
				}
			}
		},
		states: {
			normal: {
			  filter: {
				type: 'none',
				value: 0
			  }
			},
			hover: {
			  filter: {
				type: 'none',
				value: false,
			  }
			},
			active: {
			  allowMultipleDataPointsSelection: false,
			  filter: {
				type: 'none',
				value: 0.35
			  }
			}
		  },
		
	
	
		colors: ['#55FF33', '#FF9033', '#33C1FF', '#FFFF33', '#864AED'],
		series: [service_1,service_2,service_3,service_4,service_5],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Moto'],
		legend: {
			show: false,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 1,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}],
		  
	}
	
	var chart = new ApexCharts(
		document.querySelector("#chart3"),	
		options
	);
	
	chart.render();
	
	
	
}

function chart4(){
	var service_1 = 0;
	var service_2 = 0;
	var service_3 = 0;
	var service_4 = 0;
	var service_5 = 0;
	jQuery(".services_1 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_1 = parseInt(service_1 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_2 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_2 = parseInt(service_2 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_3 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_3 = parseInt(service_3 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_4 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_4 = parseInt(service_4 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_5 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_5 = parseInt(service_5 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	var options = {
		chart: {
			height: 500,
			type: 'radialBar',
			toolbar: {
				show: false
			  }
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 360,
				hollow: {
					margin: 20,
					size: '50%',
					background: '#fff',
					image: undefined,
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
						color: '#000',
						}
								
				},
				track: {
					show: true,
					background: '#fff',
				},
				dataLabels: {
					showOn: 'always',
					name: {
						show:false,
						
					},
					value: {
						show: false,
					},
					total: {
						show: true,
						label: '',
						formatter: function (w) {
							
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							//							return 150
return;
						}
					}
				}
			}
		},
		states: {
			normal: {
			  filter: {
				type: 'none',
				value: 0
			  }
			},
			hover: {
			  filter: {
				type: 'none',
				value: false,
			  }
			},
			active: {
			  allowMultipleDataPointsSelection: false,
			  filter: {
				type: 'none',
				value: 0.35
			  }
			}
		  },
		
	
	
		colors: ['#55FF33', '#FF9033', '#33C1FF', '#FFFF33', '#864AED'],
		series: [service_1,service_2,service_3,service_4,service_5],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Moto'],
		legend: {
			show: false,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 1,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}],
		  
	}
	
	var chart = new ApexCharts(
		document.querySelector("#chart4"),	
		options
	);
	
	chart.render();
	
	
	
}

function chart5(){
	var service_1 = 0;
	var service_2 = 0;
	var service_3 = 0;
	var service_4 = 0;
	var service_5 = 0;
	jQuery(".services_1 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_1 = parseInt(service_1 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_2 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_2 = parseInt(service_2 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_3 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_3 = parseInt(service_3 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_4 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_4 = parseInt(service_4 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	jQuery(".services_5 li").each(function(){
		if(jQuery(this).find("input[type='checkbox']").is(':checked')){
			service_5 = parseInt(service_5 + jQuery(this).find("input[type='checkbox']:checked").data("amount"));
		}
	});
	var options = {
		chart: {
			height: 500,
			type: 'radialBar',
			toolbar: {
				show: false
			  }
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 360,
				hollow: {
					margin: 20,
					size: '50%',
					background: '#fff',
					image: undefined,
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
						color: '#000',
						}
								
				},
				track: {
					show: true,
					background: '#fff',
				},
				dataLabels: {
					showOn: 'always',
					name: {
						show:false,
						
					},
					value: {
						show: false,
					},
					total: {
						show: true,
						label: '',
						formatter: function (w) {
							
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							//							return 150
return;
						}
					}
				}
			}
		},
		states: {
			normal: {
			  filter: {
				type: 'none',
				value: 0
			  }
			},
			hover: {
			  filter: {
				type: 'none',
				value: false,
			  }
			},
			active: {
			  allowMultipleDataPointsSelection: false,
			  filter: {
				type: 'none',
				value: 0.35
			  }
			}
		  },
		
	
	
		colors: ['#55FF33', '#FF9033', '#33C1FF', '#FFFF33', '#864AED'],
		series: [service_1,service_2,service_3,service_4,service_5],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Moto'],
		legend: {
			show: false,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 1,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}],
		  
	}
	
	var chart = new ApexCharts(
		document.querySelector("#chart5"),	
		options
	);
	
	chart.render();
	
	
	
}
function chart_ani(){
	jQuery('.apexcharts-datalabel-value').each(function () {
		var $this = jQuery(this);
		jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
		  duration: 1000,
		  easing: 'swing',
		  step: function () {
			$this.text(Math.ceil(this.Counter));
		  }
		});
	  });
}

jQuery(document).ready(function(){
	/* Service selection chart change start */
	jQuery(".services_1 li input[type='checkbox']").on("change", function(){
		var min_val = 0;
		var max_val = 0;
		for(var i=1;i<=1;i++){
			jQuery(".services_"+i+" li").each(function(){
				if(jQuery(this).find("input[type='checkbox']").is(':checked')){
					min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
					max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
					no_of_services++;
				}
			});
		}
		/*min_val = max_val;
		jQuery(".services_1 li").each(function(){
			if(jQuery(this).find("input[type='checkbox']").is(':checked')){
				if(jQuery(this).find("input[type='checkbox']:checked").data("amount") <= min_val ){
					min_val = jQuery(this).find("input[type='checkbox']:checked").data("amount");
				}
			}
		});*/
		
		jQuery(".chartFirst .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFirst .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartSecond .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartSecond .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartThired .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartThired .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery("#chart").hide();
		jQuery(".chartFirst .ani.roundChartValue").hide();
		chart1();
		jQuery("#chart").show();
		setTimeout(function(){
			jQuery(".chartFirst .ani.roundChartValue").show();
		},500);
		
		console.log("min_val @ step1:"+min_val);
		var no_of_services = 0;
		no_of_services = jQuery(".services_1 li input[type='checkbox']:checked").length;
		jQuery('.circle_pink_cls').css('transform', 'scale(1.'+no_of_services+')');
		if(min_val > 0 && max_val > 0){
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text("$"+(min_val/1000)+"k-$"+(max_val/1000)+"k");
		}else{
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text((min_val/1000)+"-"+(max_val/1000));
		}
		jQuery("#btnSlide").focus();
	});
	jQuery(".services_2 li input[type='checkbox']").on("change", function(){
		var min_val = 0;
		var max_val = 0;
		for(var i=1;i<=2;i++){
			jQuery(".services_"+i+" li").each(function(){
				if(jQuery(this).find("input[type='checkbox']").is(':checked')){
					min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
					max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
				}
			});
		}
		
		jQuery(".chartSecond .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartSecond .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartThired .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartThired .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery("#chart2").hide();
		jQuery(".chartSecond .ani.roundChartValue").hide();
		chart2();
		jQuery("#chart2").show();
		setTimeout(function(){
			jQuery(".chartSecond .ani.roundChartValue").show();
		},500);
		console.log("min_val @ step2:"+min_val);
		var no_of_services = 0;
		no_of_services = jQuery(".services_2 li input[type='checkbox']:checked").length;
		jQuery('.circle_light_green_cls').css('transform', 'scale(1.'+no_of_services+')');
		if(min_val > 0 && max_val > 0){
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text("$"+(min_val/1000)+"k-$"+(max_val/1000)+"k");
		}else{
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text((min_val/1000)+"-"+(max_val/1000));
		}
		jQuery("#btnSlide").focus();
	});
	jQuery(".services_3 li input[type='checkbox']").on("change", function(){
		var min_val = 0;
		var max_val = 0;
		for(var i=1;i<=3;i++){
			jQuery(".services_"+i+" li").each(function(){
				if(jQuery(this).find("input[type='checkbox']").is(':checked')){
					min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
					max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
				}
			});
		}
		
		if(!jQuery(".services_3 li").eq(1).find("input[type='checkbox']").is(":checked") && jQuery(".services_3 li").eq(4).find("input[type='checkbox']").is(":checked")){
			min_val = parseInt(min_val + jQuery(".services_3 li").eq(1).find("input[type='checkbox']").data("min-amount"));
			max_val = parseInt(max_val + jQuery(".services_3 li").eq(1).find("input[type='checkbox']").data("max-amount"));
		}
		
		jQuery(".chartThired .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartThired .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery("#chart3").hide();
		jQuery(".chartThired .ani.roundChartValue").hide();
		chart3();
		jQuery("#chart3").show();
		setTimeout(function(){
			jQuery(".chartThired .ani.roundChartValue").show();
		},500);
		
		var no_of_services = 0;
		no_of_services = jQuery(".services_3 li input[type='checkbox']:checked").length;
		jQuery('.circle_blue_cls').css('transform', 'scale(1.'+no_of_services+')');
		if(min_val > 0 && max_val > 0){
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text("$"+(min_val/1000)+"k-$"+(max_val/1000)+"k");
		}else{
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text((min_val/1000)+"-"+(max_val/1000));
		}
		jQuery("#btnSlide").focus();
	});
	jQuery(".services_4 li input[type='checkbox']").on("change", function(){
		var min_val = 0;
		var max_val = 0;
		var seo_min_val = 0;
		var seo_max_val = 0;
		for(var i=1;i<=4;i++){
			jQuery(".services_"+i+" li").each(function(){
				if(jQuery(this).find("input[type='checkbox']").is(':checked')){
					min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
					max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
				}
			});
		}
		/*if(jQuery(".services_4 li").eq(0).find("input[type='checkbox']:checked")){
			min_val = parseInt(min_val + jQuery(".services_4 li").eq(0).find("input[type='checkbox']:checked").data("min-amount"));
			max_val = parseInt(max_val + jQuery(".services_4 li").eq(0).find("input[type='checkbox']:checked").data("max-amount"));
		}*/
		for(var j=0;j<=3;j++){
			if(jQuery(".services_4 li").eq(j).find("input[type='checkbox']").is(":checked")){
				seo_min_val = parseInt(seo_min_val + jQuery(".services_4 li").eq(j).find("input[type='checkbox']:checked").data("min-amount"));
				seo_max_val = parseInt(seo_max_val + jQuery(".services_4 li").eq(j).find("input[type='checkbox']:checked").data("max-amount"));
			}
		}
		min_val = min_val - seo_min_val;
		max_val = max_val - seo_max_val;
		
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFourth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		
		jQuery("#chart4").hide();
		jQuery(".chartFourth .ani.roundChartValue").hide();
		chart4();
		jQuery("#chart4").show();
		setTimeout(function(){
			jQuery(".chartFourth .ani.roundChartValue").show();
		},500);
		
		var no_of_services = 0;
		no_of_services = jQuery(".services_4 li input[type='checkbox']:checked").length;
		jQuery('.circle_orange_cls').css('transform', 'scale(1.'+no_of_services+')');
		if(min_val > 0 && max_val > 0){
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text("$"+(min_val/1000)+"k-$"+(max_val/1000)+"k");
		}else{
			jQuery(".price_list_crcle_cls .price_numbr_cls b").text((min_val/1000)+"-"+(max_val/1000));
		}
		if(seo_min_val > 0 && seo_max_val > 0){
			jQuery(".price_list_crcle_cls .price_numbr_cls span").text("+ HYPE: $"+(seo_min_val/1000)+"k - $"+(seo_max_val/1000)+"k per month");
		}else{
			jQuery(".price_list_crcle_cls .price_numbr_cls span").text("");
		} 
		jQuery(".btn-primary.SlideDownBtn").focus();
	});
	jQuery(".services_5 li input[type='checkbox']").on("change", function(){
		var min_val = 0;
		var max_val = 0;
		for(var i=1;i<=5;i++){
			jQuery(".services_"+i+" li").each(function(){
				if(jQuery(this).find("input[type='checkbox']").is(':checked')){
					min_val = parseInt(min_val + jQuery(this).find("input[type='checkbox']:checked").data("min-amount"));
					max_val = parseInt(max_val + jQuery(this).find("input[type='checkbox']:checked").data("max-amount"));
				}
			});
		}
		
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(0).text(min_val/1000);
		jQuery(".chartFifth .roundChartValue span.animation_value").eq(1).text(max_val/1000);
		jQuery("#chart5").hide();
		jQuery(".chartFifth .ani.roundChartValue").hide();
		chart5();
		jQuery("#chart5").show();
		setTimeout(function(){
			jQuery(".chartFifth .ani.roundChartValue").show();
		},500);
		
		var no_of_services = 0;
		no_of_services = jQuery(".services_5 li input[type='checkbox']:checked").length;
		jQuery('.circle_orange_cls').css('transform', 'scale(1.'+no_of_services+')');
		jQuery(".price_list_crcle_cls .price_numbr_cls b").text("$"+(min_val/1000)+"k-$"+(max_val/1000)+"k");
	});
	/* Service selection chart change end */
	
	/*jQuery.scrollify({
        section: ".contact-classname",
		easing: "easeOutExpo",
		offset : 0,
		scrollbars: false,
		setHeights: false,
		updateHash: false,
        touchScroll: false,
		overflowScroll:false,
        sectionName: "section-name",
        interstitialSection: "",
        scrollSpeed: 1100,
        standardScrollElements: "",
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    })*/
	jQuery(".messageDiscriptionArea").focusout(function() {
		var element = jQuery(this);
		if (!element.text().replace(" ", "").length) {
			element.empty();
		}
	});
	var animationArrwanimData = {
        "v": "5.5.7",
        "fr": 30,
        "ip": 0,
        "op": 106,
        "w": 157,
        "h": 28,
        "nm": "Flecha",
        "ddd": 0,
        "assets": [{
            "id": "image_0",
            "w": 92,
            "h": 24,
            "u": "/wp-content/themes/dgstudio/images/",
            "p": "contactarrow-icon.png",
            "e": 0
        }],
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 2,
            "nm": "58•Flecha PA",
            "refId": "image_0",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [109.642, 14.245, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [45.933, 11.85, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "a",
                "pt": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 25,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [79.147, 9.197],
                                [74.936, 9.197],
                                [74.936, 14.013],
                                [79.147, 14.013]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 26,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [86.147, 9.105],
                                [74.936, 9.197],
                                [74.936, 14.013],
                                [86.147, 13.921]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 45,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [86.147, 9.105],
                                [74.936, 9.197],
                                [74.936, 14.013],
                                [86.147, 13.921]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 46,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [91.897, 9.171],
                                [74.936, 9.197],
                                [74.936, 14.013],
                                [91.897, 13.988]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 60,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [91.897, 9.171],
                                [74.936, 9.197],
                                [74.936, 14.013],
                                [91.897, 13.988]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 61,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [91.897, 9.171],
                                [80.436, 9.105],
                                [80.436, 13.921],
                                [91.897, 13.988]
                            ],
                            "c": true
                        }]
                    }, {
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 91,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [91.897, 9.171],
                                [80.436, 9.105],
                                [80.436, 13.921],
                                [91.897, 13.988]
                            ],
                            "c": true
                        }]
                    }, {
                        "t": 92,
                        "s": [{
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [91.897, 9.171],
                                [85.686, 9.171],
                                [85.686, 13.988],
                                [91.897, 13.988]
                            ],
                            "c": true
                        }]
                    }],
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Máscara 1"
            }],
            "ip": 0,
            "op": 106,
            "st": -200,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 1,
            "nm": "Sólido Azul",
            "td": 1,
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [-721, 286, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [960, 540, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "a",
                "pt": {
                    "a": 0,
                    "k": {
                        "i": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [1755.439, 248.961],
                            [1682.5, 248.961],
                            [1682.5, 284.73],
                            [1755.439, 284.73]
                        ],
                        "c": true
                    },
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Máscara 1"
            }],
            "sw": 1920,
            "sh": 1080,
            "sc": "#007aff",
            "ip": 0,
            "op": 106,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 3,
            "ty": 2,
            "nm": "58•Flecha F1 Nuevas",
            "tt": 1,
            "refId": "image_0",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "s": true,
                    "x": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.293],
                                "y": [1]
                            },
                            "o": {
                                "x": [1],
                                "y": [0]
                            },
                            "t": 46,
                            "s": [106.409]
                        }, {
                            "i": {
                                "x": [0.833],
                                "y": [1]
                            },
                            "o": {
                                "x": [1],
                                "y": [0]
                            },
                            "t": 60,
                            "s": [48.409]
                        }, {
                            "t": 92,
                            "s": [107.709]
                        }],
                        "ix": 3
                    },
                    "y": {
                        "a": 0,
                        "k": 14.245,
                        "ix": 4
                    }
                },
                "a": {
                    "a": 0,
                    "k": [45.933, 11.85, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "n",
                "pt": {
                    "a": 0,
                    "k": {
                        "i": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [11.541, 2.105],
                            [2.041, 11.105],
                            [11.541, 22.105],
                            [11.541, 11.855],
                            [72.041, 11.355]
                        ],
                        "c": false
                    },
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Máscara 1"
            }],
            "ip": 46,
            "op": 92,
            "st": -180,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 4,
            "ty": 2,
            "nm": "58•Flecha F1 Original",
            "refId": "image_0",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [107.409, 14.245, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [45.933, 11.85, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "n",
                "pt": {
                    "a": 0,
                    "k": {
                        "i": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [11.541, 2.105],
                            [2.041, 11.105],
                            [11.541, 22.105],
                            [11.541, 11.855],
                            [72.041, 11.355]
                        ],
                        "c": false
                    },
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Máscara 1"
            }],
            "ef": [{
                "ty": 22,
                "nm": "Stroke",
                "np": 13,
                "mn": "ADBE Stroke",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 10,
                    "nm": "Path",
                    "mn": "ADBE Stroke-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 1
                    }
                }, {
                    "ty": 7,
                    "nm": "All Masks",
                    "mn": "ADBE Stroke-0010",
                    "ix": 2,
                    "v": {
                        "a": 0,
                        "k": 0,
                        "ix": 2
                    }
                }, {
                    "ty": 7,
                    "nm": "Stroke Sequentially",
                    "mn": "ADBE Stroke-0011",
                    "ix": 3,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 3
                    }
                }, {
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Stroke-0002",
                    "ix": 4,
                    "v": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
                        "ix": 4
                    }
                }, {
                    "ty": 0,
                    "nm": "Brush Size",
                    "mn": "ADBE Stroke-0003",
                    "ix": 5,
                    "v": {
                        "a": 0,
                        "k": 3.2,
                        "ix": 5
                    }
                }, {
                    "ty": 0,
                    "nm": "Brush Hardness",
                    "mn": "ADBE Stroke-0004",
                    "ix": 6,
                    "v": {
                        "a": 0,
                        "k": 0.95,
                        "ix": 6
                    }
                }, {
                    "ty": 0,
                    "nm": "Opacity",
                    "mn": "ADBE Stroke-0005",
                    "ix": 7,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 7
                    }
                }, {
                    "ty": 0,
                    "nm": "Start",
                    "mn": "ADBE Stroke-0008",
                    "ix": 8,
                    "v": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.833],
                                "y": [0.833]
                            },
                            "o": {
                                "x": [0.167],
                                "y": [0.167]
                            },
                            "t": 71,
                            "s": [100]
                        }, {
                            "t": 105,
                            "s": [0]
                        }],
                        "ix": 8
                    }
                }, {
                    "ty": 0,
                    "nm": "End",
                    "mn": "ADBE Stroke-0009",
                    "ix": 9,
                    "v": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.833],
                                "y": [0.833]
                            },
                            "o": {
                                "x": [0.167],
                                "y": [0.167]
                            },
                            "t": 46,
                            "s": [100]
                        }, {
                            "t": 81,
                            "s": [0]
                        }],
                        "ix": 9
                    }
                }, {
                    "ty": 7,
                    "nm": "Spacing",
                    "mn": "ADBE Stroke-0006",
                    "ix": 10,
                    "v": {
                        "a": 0,
                        "k": 15,
                        "ix": 10
                    }
                }, {
                    "ty": 7,
                    "nm": "Paint Style",
                    "mn": "ADBE Stroke-0007",
                    "ix": 11,
                    "v": {
                        "a": 0,
                        "k": 3,
                        "ix": 11
                    }
                }]
            }],
            "ip": 92,
            "op": 106,
            "st": -134,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 5,
            "ty": 2,
            "nm": "58•Flecha F1 Nueva",
            "refId": "image_0",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "s": true,
                    "x": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.833],
                                "y": [0.161]
                            },
                            "o": {
                                "x": [0.333],
                                "y": [0]
                            },
                            "t": 0,
                            "s": [112.342]
                        }, {
                            "i": {
                                "x": [0.667],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.167],
                                "y": [0.076]
                            },
                            "t": 15,
                            "s": [106.409]
                        }, {
                            "i": {
                                "x": [0.002],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.333],
                                "y": [0]
                            },
                            "t": 25,
                            "s": [62.542]
                        }, {
                            "t": 46,
                            "s": [106.409]
                        }],
                        "ix": 3
                    },
                    "y": {
                        "a": 0,
                        "k": 14.245,
                        "ix": 4
                    }
                },
                "a": {
                    "a": 0,
                    "k": [45.933, 11.85, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "n",
                "pt": {
                    "a": 0,
                    "k": {
                        "i": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [11.541, 2.105],
                            [2.041, 11.105],
                            [11.541, 22.105],
                            [11.541, 11.855],
                            [72.041, 11.355]
                        ],
                        "c": false
                    },
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Máscara 1"
            }],
            "ef": [{
                "ty": 22,
                "nm": "Stroke",
                "np": 13,
                "mn": "ADBE Stroke",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 10,
                    "nm": "Path",
                    "mn": "ADBE Stroke-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 1
                    }
                }, {
                    "ty": 7,
                    "nm": "All Masks",
                    "mn": "ADBE Stroke-0010",
                    "ix": 2,
                    "v": {
                        "a": 0,
                        "k": 0,
                        "ix": 2
                    }
                }, {
                    "ty": 7,
                    "nm": "Stroke Sequentially",
                    "mn": "ADBE Stroke-0011",
                    "ix": 3,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 3
                    }
                }, {
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Stroke-0002",
                    "ix": 4,
                    "v": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
                        "ix": 4
                    }
                }, {
                    "ty": 0,
                    "nm": "Brush Size",
                    "mn": "ADBE Stroke-0003",
                    "ix": 5,
                    "v": {
                        "a": 0,
                        "k": 3.2,
                        "ix": 5
                    }
                }, {
                    "ty": 0,
                    "nm": "Brush Hardness",
                    "mn": "ADBE Stroke-0004",
                    "ix": 6,
                    "v": {
                        "a": 0,
                        "k": 0.95,
                        "ix": 6
                    }
                }, {
                    "ty": 0,
                    "nm": "Opacity",
                    "mn": "ADBE Stroke-0005",
                    "ix": 7,
                    "v": {
                        "a": 0,
                        "k": 1,
                        "ix": 7
                    }
                }, {
                    "ty": 0,
                    "nm": "Start",
                    "mn": "ADBE Stroke-0008",
                    "ix": 8,
                    "v": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.667],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.167],
                                "y": [0.167]
                            },
                            "t": 25,
                            "s": [100]
                        }, {
                            "t": 46,
                            "s": [38.235]
                        }],
                        "ix": 8
                    }
                }, {
                    "ty": 0,
                    "nm": "End",
                    "mn": "ADBE Stroke-0009",
                    "ix": 9,
                    "v": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.833],
                                "y": [0.833]
                            },
                            "o": {
                                "x": [0.167],
                                "y": [0.167]
                            },
                            "t": 0,
                            "s": [100]
                        }, {
                            "t": 35,
                            "s": [0]
                        }],
                        "ix": 9
                    }
                }, {
                    "ty": 7,
                    "nm": "Spacing",
                    "mn": "ADBE Stroke-0006",
                    "ix": 10,
                    "v": {
                        "a": 0,
                        "k": 15,
                        "ix": 10
                    }
                }, {
                    "ty": 7,
                    "nm": "Paint Style",
                    "mn": "ADBE Stroke-0007",
                    "ix": 11,
                    "v": {
                        "a": 0,
                        "k": 3,
                        "ix": 11
                    }
                }]
            }],
            "ip": 0,
            "op": 46,
            "st": -180,
            "bm": 0
        }],
        "markers": []
    };

    var paramsArrwanim = {
        container: document.getElementById('arrwanimIConFirst'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationArrwanimData
    };
    var animArrwanim;
    animArrwanim = lottie.loadAnimation(paramsArrwanim);

    var paramsArrwanim = {
        container: document.getElementById('arrwanimIConSecond'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationArrwanimData
    };
    var animArrwanim;
    animArrwanim = lottie.loadAnimation(paramsArrwanim);
});

