jQuery(document).ready(function($){
	/*jQuery.scrollify({
        section: ".about-classname",
		easing: "easeOutExpo",
		offset : 0,
		scrollbars: false,
		setHeights: false,
		updateHash: false,
        touchScroll: false,
		 overflowScroll: false,
		 scrollSpeed: 1200,
		 interstitialSection:".site-footer",
        sectionName: "section-name",
        interstitialSection: "",
        scrollSpeed: 1100,
        standardScrollElements: "",
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });*/
	
	jQuery('#media').carousel({
		pause: true,
		interval: false,
	});
	
	var bBox = jQuery('.blueB'),
		BannerTitleBg = jQuery('.bannerGrayB'),
		bannerCoverB = jQuery('.bannerCoverB'),
		coverW = jQuery('.bannerCoverW'),
		logo = jQuery('.logoDG');

	var dgGlobe = jQuery('.dgGlobe'),
		bgImage = jQuery('.grayGlobeCover'),
		whiteBG = jQuery('.dgGRight'),
		textAgen = jQuery('.dgGRightInner');

	var graySqu = jQuery('.whiteB'),
		whiteL = jQuery('.whiteLine'),
		whiteC = jQuery('.whiteCir');

	var mdImage = jQuery('.mdIma img'),
		rotateT = jQuery('.rotateTxt'),
		mdTxt = jQuery('.ctmPadMD'),
		lgrayB = jQuery('.lgrayB');

	var dgDCover = jQuery('.dgDetailCover'),
		blueICover = jQuery('.blueImgCover'),
		whiteL2 = jQuery('.whiteLine2'),
		whiteC2 = jQuery('.whiteCir2'),
		whiteIS = jQuery('.whiteISqu'),
		cImg = jQuery('.circleImg'),
		cImg2 = jQuery('.circleImg2'),
		cImg3 = jQuery('.circleImg3');

	var ourOff = jQuery('.dgOfficeS .container'),
		containerWth = ourOff.width(),
		aniBG = jQuery('.animBG'),
		officeIC = jQuery('.officeImaBCover'),
		officeIC2 = jQuery('.officeImaBCover2'),
		officeIC3 = jQuery('.officeImaBCover3'),
		officeIT = jQuery('.officeP'),
		officeIT2 = jQuery('.officeP2'),
		officeIT3 = jQuery('.officeP3'),
		whitwLHoriz = jQuery('.whitwLHoriz'),
		offSqu = jQuery('.offSqu'),
		offCir = jQuery('.offCir');

	var contCover = jQuery('.containerCover'),
		ctmBGb = jQuery('.ctmBGb'),
		ctmBGlb = jQuery('.ctmBGlb'),
		ctmBGgr = jQuery('.ctmBGgr'),
		ctmBGgr2 = jQuery('.ctmBGgr2');

	var txtCover = jQuery('.txtCover'),
		txtCover2 = jQuery('.txtCover2'),
		txtCover3 = jQuery('.txtCover3'),
		txtCover4 = jQuery('.txtCover4'),
		txtCover5 = jQuery('.txtCover5');
	var dgProductIcon = jQuery('.dgProductIcon'),
		dgProductIcon2 = jQuery('.dgProductIcon2'),
		dgProductIcon3 = jQuery('.dgProductIcon3'),
		dgProductIcon4 = jQuery('.dgProductIcon4'),
		dgProductIcon5 = jQuery('.dgProductIcon5');

	var opaceSolu = jQuery('.opaceSolu'),
		solutionImgB = jQuery('.solutionImgB'),
		solutionImgB2 = jQuery('.solutionImgB2');

	var whiteAni = jQuery('.whiteAnim.firstt');
	var whiteAni2 = jQuery('.whiteAnim2.second');
	var whiteAni3 = jQuery('.whiteAnim3.thired');
	var multiDots = jQuery('.multiDots'),
		multiDots2 = jQuery('.multiDots2'),
		multiDots3 = jQuery('.multiDots3'),
		multiDots4 = jQuery('.multiDots4'),
		multiDots5 = jQuery('.multiDots5');
	var wHeight = jQuery(window).height();
	var posB = (30 / 100) * wHeight;
	var totalV = posB - 30;

	/*=======================================
		 Bannner Animation JS
	========================================*/


//Right Side Bar humberger menu animation
setTimeout(function(){
	jQuery('.sml_dg_logo_cls').removeClass('sml_dg_logo_ani_cls');
}, 100);
setTimeout(function(){
	jQuery('.sml_dg_logo_cls img').addClass('sml_dg_logo_ani_cls_img');
}, 300);
setTimeout(function(){
	jQuery('.side_menu_cls').removeClass('side_menu_onloadanim_cls');
	jQuery('.side_blue_br_cls').addClass('side_blue_br_ani_cls');
}, 500);
setTimeout(function(){
	jQuery('.humburger_menu').addClass('humburger_menu_ani');
	jQuery('.menu_rght_arrw').css('opacity', '1');
}, 600);
setTimeout(function(){
	jQuery('.side_blue_br_cls').addClass('side_blue_br_ani_cls');
}, 800);
//Right Side Bar humberger menu animation

	// bBox.animate({top: "32%",opacity: "1"}, 1000);
	jQuery(".blueB").animate({
		top: jQuery(".bannerGrayB").offset().top - 70,
		opacity: "1"
	}, 1000);
	BannerTitleBg.animate({
		width: "40%"
	}, 800);
	jQuery(".bannerCoverW").animate({
		width: "0%"
	}, 1200);
	//	jQuery(".bannerAbtB").animate({width: "50%"}, 1200);
	//	jQuery(".bannerCoverB").animate({width: "50%"}, 1200);

	//coverW.animate({right: "50%"}, 1000);
	// jQuery('._BannerTitle').animate({
	//     opacity: "1",

	// },1000)
	//jQuery('._BannerTitle').delay(1000).css("opacity", "1").addClass('heding_anim_onscrn_cls');

	jQuery(".heding_anim_cls").removeClass("heding_anim_onscrn_cls");
	setTimeout(() => {
		jQuery('._BannerTitle').css("opacity", "1").addClass('heding_anim_onscrn_cls');
	}, 1000);

	//jQuery("._BannerTitle ").addClass(" animated fadeInLeft");
	logo.fadeIn(1000);
	jQuery("._AboutUsTileTop").addClass("animated fadeInUp delay-2s");
	jQuery(".threeDima").css("opacity", "1");
	multiDots.delay(4000).animate({
		opacity: "0.6"
	}, 100);

	if(jQuery("#dgGlobe").length){
		/*=========================================================
			Global Agency(Second Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgGlobe'),
			handler: function(direction) {
				if (direction === 'down') {
					bgImage.animate({
						width: "8%"
					}, 1000, function() {
						jQuery(this).fadeOut(100);
					});
					whiteBG.animate({
						height: "62%",
						width: "50%"
					}, 1000, function() {
						textAgen.fadeIn(500);
						// jQuery(".globeTxtB").fadeIn(500);
					});
					graySqu.delay(800).animate({
						bottom: "-9%",
						opacity: "1"
					}, 1000);
					whiteL.animate({
						width: "35%"
					}, 1000);
					whiteC.animate({
						left: "35%"
					}, 1000);
					multiDots2.delay(500).animate({
						opacity: "0.6"
					}, 500);
					/*console.log('down scroll');*/
				}
			},
			offset: '60%'
		});
	}
	
	if(jQuery("#dgMDdetail").length){
		/*=========================================================
			Founder Section (thired Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgMDdetail'),
			handler: function(direction) {
				if (direction === 'down') {

					jQuery('._middleTitle').css("opacity", "1").addClass('heding_anim_onscrn_cls');
					jQuery(".mdIma img").delay(1000).addClass("animate");
					jQuery("._USAAddress").animate({
						top: "0px",
						opacity: "1"
					}, 500);
					jQuery("._ContactDetail").animate({
						top: "0px",
						opacity: "1"
					}, 800);
					// mdImage.animate({width: "100%", height: "100%"}, 10000);
					rotateT.animate({
						top: "35%",
						opacity: "1"
					}, 500);
					mdTxt.animate({
						top: "0",
						opacity: "1"
					}, 500);
					lgrayB.animate({
						left: "250"
					}, 500);
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}
	
	if(jQuery("#dgOurTeam").length){
		/*=========================================================
			Our Team (Fourth Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgOurTeam'),
			handler: function(direction) {
				if (direction === 'down') {

					jQuery('._ourteam').css("opacity", "1").addClass('heding_anim_onscrn_cls');

					// jQuery('.whiteAnim').animate({height: "0"}, 600, function() {
					//   // jQuery(this).fadeOut(100);
					// });
					jQuery('.whiteAnim.firstt').animate({
						height: "0"
					}, 700, function() {
						// jQuery(this).fadeOut(100);
					});
					jQuery('.whiteAnim.second').animate({
						height: "0"
					}, 750, function() {
						// jQuery(this).fadeOut(100);
					});
					jQuery('.whiteAnim.thired').animate({
						height: "0"
					}, 950, function() {
						// jQuery(this).fadeOut(100);
					});

					jQuery(".dgOurTeam p").each(function() {
						var $this = jQuery(this);
						var dutime = 700;
						$this.animate({
							top: "0",
							opacity: "1"
						}, dutime, function() {
							// jQuery(this).fadeOut(100);
						});
					});
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}
	
	if(jQuery("#dgDetailS").length){
		/*=========================================================
				 Our Clients (Fivth Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgDetailS'),
			handler: function(direction) {
				if (direction === 'down') {

					dgDCover.animate({
						width: "40%"
					}, 500, function() {
						jQuery(this).fadeOut(100);
					});

					// setTimeout(function(){
					//     jQuery(".carouselSection1").removeClass("animationDiv"); 
					//   setTimeout(function(){
					//      jQuery(".carouselSection2").removeClass("animationDiv");
					//   setTimeout(function(){
					//      jQuery(".carouselSection3").removeClass("animationDiv");            
					//   },2200);            
					//  },2100);           
					// },2000);

					jQuery(".dgDetailS p").delay(150).animate({
						opacity: "1"
					}, 1000, function() {
						jQuery(this).fadeIn();
					});

					jQuery("._SlideBoxSection").delay(200).animate({
						opacity: "1"
					}, 1000, function() {
						jQuery(this).fadeIn();
					});

					jQuery(".blue-borderbottom").delay(100).animate({
						width: "76%",
						opacity: "1"
					}, 1000, function() {
						jQuery(this).fadeIn();
					});

					jQuery(".whiteISqu").delay(100).animate({
						left: "300px",
						opacity: "1"
					}, 1000, function() {
						jQuery(this).fadeIn();
					});

					jQuery(".blueImg").delay(1000).animate({
						width: "50%",
						opacity: "1"
					}, 1000, function() {
						jQuery(this).fadeIn();
					});

					// blueICover.animate({width: "0"}, 500, function() {
					//     jQuery(this).fadeOut(100);
					// });
					// whiteL2.animate({width: "35%"}, 500);
					// whiteC2.animate({left: "35%"}, 500);
					// whiteIS.animate({left: "300"}, 500);
					// multiDots3.delay(500).animate({opacity: "0.6"}, 500);
					// cImg.animate({left: "0", opacity: "1"}, 500, function() {
					//     jQuery(this).animate({width: "130", height: "130"});
					// });
					// cImg2.delay(400).animate({left: "0", opacity: "1"}, 500, function() {
					//     jQuery(this).animate({width: "130", height: "130"});
					// });
					// cImg3.delay(800).animate({left: "0", opacity: "1"}, 500, function() {
					//     jQuery(this).animate({width: "130", height: "130"});
					// });
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}
	
	if(jQuery("#dgOfficeS").length){
		/*=========================================================
				 Our Offices (Six Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgOfficeS'),
			handler: function(direction) {
				if (direction === 'down') {
					aniBG.animate({
						width: containerWth,
						height: "246",
						top: "0",
						left: "15"
					}, 500);

					jQuery('._ourofficetitle').css("opacity", "1").addClass('heding_anim_onscrn_cls');

					whitwLHoriz.delay(500).animate({
						width: "43%"
					}, 500);
					jQuery(".whiteLVert").delay(600).animate({
						height: "81px",
						opacity: "1"
					}, 500);
					offCir.delay(700).animate({
						top: "50",
						opacity: "1"
					}, 500);
					offSqu.delay(1000).animate({
						right: "8%",
						opacity: "1"
					}, 500);

					setTimeout(() => {
						jQuery(".ImgCoverFirst").delay(1).animate({
							height: "100%",
							opacity: "1"
						}, 500, function() {
							jQuery(".ImgCoverFirst").hide();
							jQuery(".officeImaB img").css("opacity", "1");
							jQuery(".officeImaBCover, .officeImaBCover2, .officeImaBCover3").css("opacity", "1");
							officeIC.delay(100).animate({
								height: "0"
							}, 800, function() {
								jQuery(this).fadeOut(100);
							});
						});

					}, 500);

					setTimeout(() => {
						jQuery(".ImgCoverSecond").delay(50).animate({
							height: "100%",
							opacity: "1"
						}, 500, function() {
							jQuery(".ImgCoverSecond").hide();
							jQuery(".officeImaB img").css("opacity", "1");
							jQuery(".officeImaBCover, .officeImaBCover2, .officeImaBCover3").css("opacity", "1");
							officeIC2.delay(150).animate({
								height: "0"
							}, 800, function() {
								jQuery(this).fadeOut(100);
							});
						});

					}, 500);


					setTimeout(() => {
						jQuery(".ImgCoverThired").delay(90).animate({
							height: "100%",
							opacity: "1"
						}, 500, function() {
							jQuery(".ImgCoverThired").hide();
							jQuery(".officeImaB img").css("opacity", "1");
							jQuery(".officeImaBCover, .officeImaBCover2, .officeImaBCover3").css("opacity", "1");
							officeIC3.delay(200).animate({
								height: "0"
							}, 800, function() {
								jQuery(this).fadeOut(100);
							});
						});

					}, 500);

					// officeIC.delay(2000).animate({height: "0"}, 800, function() {
					//     jQuery(this).fadeOut(100);
					// });
					// officeIC2.delay(2200).animate({height: "0"}, 800, function() {
					//     jQuery(this).fadeOut(100);
					// });
					// officeIC3.delay(2300).animate({height: "0"}, 800, function() {
					//     jQuery(this).fadeOut(100);
					// });

					setTimeout(() => {
						jQuery("._officeAddressUSA").addClass("fadeIn")
						setTimeout(() => {

							jQuery("._officeAddressUSA ._CountryName").delay(100).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressUSA  ._OfcAddress").delay(200).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressUSA  ._OfcConatctNum").delay(300).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressUSA  ._OfcEmilID").delay(400).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});


						}, 1000);

					}, 1200);


					setTimeout(() => {
						jQuery("._officeAddressMAXICO").addClass("fadeIn")
						setTimeout(() => {

							jQuery("._officeAddressMAXICO ._CountryName").delay(100).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressMAXICO ._OfcAddress").delay(200).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressMAXICO ._OfcConatctNum").delay(300).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressMAXICO ._OfcEmilID").delay(400).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});


						}, 1000);

					}, 1500);

					setTimeout(() => {
						jQuery("._officeAddressINDIA").addClass("fadeIn")
						setTimeout(() => {

							jQuery("._officeAddressINDIA ._CountryName").delay(100).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressINDIA ._OfcAddress").delay(200).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressINDIA ._OfcConatctNum").delay(300).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});
							jQuery("._officeAddressINDIA ._OfcEmilID").delay(400).animate({
								top: "0px",
								opacity: "1"
							}, 1000, function() {
								// jQuery(this).fadeIn();
							});


						}, 1000);

					}, 1800);

					//  officeIT.animate({opacity: "1"}, 500);
					// officeIT2.delay(500).animate({opacity: "1"}, 500);
					// officeIT3.delay(1000).animate({opacity: "1"}, 500);
					// multiDots4.delay(500).animate({opacity: "0.6"}, 500);
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}
	
	if(jQuery("#dgFolloUsS").length){
		/*=========================================================
				 Our Follows (Seven Section) Animation JS
		============================================================*/
		var waypoint = new Waypoint({
			element: document.getElementById('dgFolloUsS'),
			handler: function(direction) {
				if (direction === 'down') {

					jQuery(".dgFolloUsSanimationDiv").animate({
						height: "0%",
						opacity: "0"
					}, 1000, function() {
						jQuery(".dgFolloUsSanimationDiv").hide();
					})

					jQuery('._FOLLOWUS').css("opacity", "1").addClass('heding_anim_onscrn_cls');

					jQuery(".FollowUpTitle ._borderLeftSide").delay(100).show().animate({
						width: "50%",
						opacity: "1"
					}, 1000, function() {
						// jQuery(this).fadeIn();
					});
					jQuery(".FollowUpTitle ._borderBottomSide").delay(100).show().animate({
						height: "200px",
						opacity: "1"
					}, 1000, function() {
						// jQuery(this).fadeIn();
					});

					contCover.animate({
						// height: "500",
						height: "132",
						top: "160"
					}, 1000, function() {
						jQuery(this).animate({
							width: "1110",
							left: "15"
						});
						jQuery('.followRow').animate({
							opacity: "1"
						});
					});
					ctmBGb.delay(1500).animate({
						width: "100%"
					}, 500);
					ctmBGlb.delay(1500).animate({
						width: "100%"
					}, 500);
					ctmBGgr.delay(1500).animate({
						height: "100%"
					}, 500);
					multiDots5.delay(500).animate({
						opacity: "1"
					}, 500);
					ctmBGgr2.delay(1500).animate({
						height: "100%"
					}, 500, function() {
						jQuery(this).fadeOut(100);
						jQuery('.dgGift').animate({
							opacity: "1"
						});
					});
					/*console.log('FOllows Scroll Area');*/
				}
			},
			offset: '20%'
		});
	}
	
	if(jQuery("#dgProductsS").length){
		/*=========================================================
				 Our Product (Eight Section) Animation JS
		============================================================*/
		var ourSecCover = jQuery('.ourSecCover'),
			ourSecH = jQuery('.our-sec h6');
		var waypoint = new Waypoint({
			element: document.getElementById('dgProductsS'),
			handler: function(direction) {
				if (direction === 'down') {
					var ourPro = jQuery('.ourProducts');
					var proCover = jQuery('.proLiCover');
					var allPro = ourPro.children('li');
					var nomOP = allPro.length;
					var nomOC = proCover.length;
					var appearD = 500;
					var y = 0;
					ourSecCover.animate({
						height: "100%"
					}, 500);
					ourSecH.animate({
						opacity: "1"
					}, 500, function() {
						for (y = 0; y < nomOP; y++) {
							allPro.eq(y).delay(appearD).animate({
								opacity: "1"
							}, 500);
							proCover.eq(y).delay(appearD).animate({
								width: "0"
							}, 1000);
							appearD += 500;
						}
					});
					setTimeout(run_delayed, 1000);
					setTimeout(run_delayed2, 1500);
					setTimeout(loadSVGAnimation, 1500);
					setTimeout(run_delayed3, 2000);
					setTimeout(run_delayed4, 2500);
					setTimeout(run_delayed5, 3000);
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}
	
	if(jQuery("#soluSCoverID").length){
		/*=========================================================
				 Suites Section (Nine Section) Animation JS
		============================================================*/
		var blueBtn2 = jQuery('.suites-sec-textbox .text-center .btn'),
			suitSbtn = jQuery('.suites-sec-textbox h6'),
			soluSCover = jQuery('.soluSCover'),
			ctmPRS = jQuery('.ctmPRS img'),
			ctmPRS2 = jQuery('.ctmPRS2 img');
		var waypoint = new Waypoint({
			element: document.getElementById('soluSCoverID'),
			handler: function(direction) {
				if (direction === 'down') {
					soluSCover.animate({
						height: "100%"
					}, 500);
					suitSbtn.delay(300).animate({
						opacity: "1"
					}, 500)

					setTimeout(() => {
						blueBtn2.css("opacity", "1").addClass("animated zoomIn faster");
					}, 350);

					setTimeout(() => {
						jQuery("._ImgboxBounce1").css("opacity", "1").addClass("animated bounce slower");
						setTimeout(() => {
							jQuery("._ImgboxBounce2").css("opacity", "1").addClass("animated bounce slower");
						}, 600);
					}, 500);
					/*console.log('down scroll');*/
				}
			},
			offset: '40%'
		});
	}

	function run_delayed() {
		new Dganimic('dgElements', {
			type: 'delayed',
			start: 'autostart',
			delay: 10,
			duration: 50
		});
	}

	function run_delayed2() {
		new Dganimic('dgElements2', {
			type: 'delayed',
			start: 'autostart',
			delay: 10,
			duration: 50
		});
	}

	function run_delayed3() {
		new Dganimic('dgElements3', {
			type: 'delayed',
			start: 'autostart',
			delay: 10,
			duration: 50
		});
	}

	function run_delayed4() {
		new Dganimic('dgElements4', {
			type: 'delayed',
			start: 'autostart',
			delay: 10,
			duration: 50
		});
	}

	function run_delayed5() {
		new Dganimic('dgElements5', {
			type: 'delayed',
			start: 'autostart',
			delay: 10,
			duration: 50
		});
	}

	function loadSVGAnimation() {
		var svg = document.getElementById("dgElements");
		var atime = 500;
		var s = Snap(svg);
		var smallRec = Snap.select('#smallRec');
		var bigRec = Snap.select('#bigRec');
		var dgeSmall1 = Snap.select('#dgeSmall1');
		var dgeBig1 = Snap.select('#dgeBig1');
		var dgeSmall2 = Snap.select('#dgeSmall2');
		var dgeBig2 = Snap.select('#dgeBig2');
		var dgeSmall3 = Snap.select('#dgeSmall3');
		var dgeBig3 = Snap.select('#dgeBig3');
		var smallRecPoints = smallRec.node.getAttribute('d');
		var bigRecPoints = bigRec.node.getAttribute('d');
		var smallDGE1 = dgeSmall1.node.getAttribute('d');
		var bigDGE1 = dgeBig1.node.getAttribute('d');
		var smallDGE2 = dgeSmall2.node.getAttribute('d');
		var bigDGE2 = dgeBig2.node.getAttribute('d');
		var smallDGE3 = dgeSmall3.node.getAttribute('d');
		var bigDGE3 = dgeBig3.node.getAttribute('d');
		toBig();
	}
	
	function toBig() {
		smallRec.animate({
			opacity: "1"
		}, 100, function() {
			smallRec.animate({
				d: bigRecPoints
			}, atime);
		});
		dgeSmall1.animate({
			opacity: "1"
		}, 100, function() {
			dgeSmall1.animate({
				d: bigDGE1
			}, atime);
		});
		dgeSmall2.animate({
			opacity: "1"
		}, 150, function() {
			dgeSmall2.animate({
				d: bigDGE2
			}, atime);
		});
		dgeSmall3.animate({
			opacity: "1"
		}, 200, function() {
			dgeSmall3.animate({
				d: bigDGE3
			}, atime);
		});
	}
});