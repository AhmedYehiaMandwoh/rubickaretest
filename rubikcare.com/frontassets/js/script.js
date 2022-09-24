(function($){"use strict";$.fn.toggleText=function(t1,t2){if(this.html()==t1)this.html(t2);else this.html(t1);return this;};if($("#user-sidebar-card").length){$(document.body).addClass('patient-search');$('#filteration-button').click(function(){$("#user-sidebar-card #filteration-sidebar").toggleClass("filteration-shown");});}
if($("#search-filter-wrapper #filteration-button").length){$('#filteration-button').click(function(){$(this).toggleText('Open Filter <i class="fas fa-filter"></i>','Close Filter <i class="fas fa-times"></i>');$("#filteration-sidebar").toggleClass("filteration-shown");$(this).toggleClass("open-filteration close-filteration");});}
if($(".js-range-slider").length){$(".js-range-slider").ionRangeSlider({onFinish:function(data){$("#min_fees").val(data.from);$("#max_fees").val(data.to);debugger;Search(1);},});}
$("input[id^=star]").click(function(){var sim=$("input[id^=star]:checked").val();if(sim<3){$(this).parents(".stars-wrapper").find('.myratings').css('color','red');}else{$(this).parents(".stars-wrapper").find('.myratings').css('color','green');}});if($(window).width()>767){if($('.theiaStickySidebar').length>0){$('.theiaStickySidebar').theiaStickySidebar({additionalMarginTop:30});}}
if($(window).width()<=991){var Sidemenu=function(){this.$menuItem=$('.main-nav a');};}
var maxLength=100;$('#review_desc').on('keyup change',function(){var length=$(this).val().length;length=maxLength-length;$('#chars').text(length);});if($('.select').length>0){$('.select').select2({minimumResultsForSearch:-1,width:'100%'});}
if($('.datetimepicker').length>0){$('.datetimepicker').datetimepicker({format:'DD/MM/YYYY',icons:{up:"fas fa-chevron-up",down:"fas fa-chevron-down",next:'fas fa-chevron-right',previous:'fas fa-chevron-left'}});}
if($('.floating').length>0){$('.floating').on('focus blur',function(e){$(this).parents('.form-focus').toggleClass('focused',(e.type==='focus'||this.value.length>0));}).trigger('blur');}
$('body').append('<div class="sidebar-overlay"></div>');$(document).on('click','#mobile-icon',function(){$('main-wrapper').toggleClass('slide-nav');$('.sidebar-overlay').toggleClass('opened');$('html').addClass('menu-opened');return false;});$(document).on('click','.sidebar-overlay',function(){$('html').removeClass('menu-opened');$(this).removeClass('opened');$('main-wrapper').removeClass('slide-nav');});$(document).on('click','#menu_close',function(){$('html').removeClass('menu-opened');$('.sidebar-overlay').removeClass('opened');$('main-wrapper').removeClass('slide-nav');});if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip();}
$(".hours-info").on('click','.trash',function(){$(this).closest('.hours-cont').remove();return false;});$(".add-hours").on('click',function(){var hourscontent='<div class="row form-row hours-cont">'+
'<div class="col-12 col-md-10">'+
'<div class="row form-row">'+
'<div class="col-12 col-md-6">'+
'<div class="form-group">'+
'<label>Start Time</label>'+
'<select class="form-control">'+
'<option>-</option>'+
'<option>12.00 am</option>'+
'<option>12.30 am</option>'+
'<option>1.00 am</option>'+
'<option>1.30 am</option>'+
'</select>'+
'</div>'+
'</div>'+
'<div class="col-12 col-md-6">'+
'<div class="form-group">'+
'<label>End Time</label>'+
'<select class="form-control">'+
'<option>-</option>'+
'<option>12.00 am</option>'+
'<option>12.30 am</option>'+
'<option>1.00 am</option>'+
'<option>1.30 am</option>'+
'</select>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>'+
'</div>';$(".hours-info").append(hourscontent);return false;});function resizeInnerDiv(){var height=$(window).height();var header_height=$(".header").height();var footer_height=$(".footer").height();var setheight=height-header_height;var trueheight=setheight-footer_height;$(".content").css("min-height",trueheight);}
if($('.content').length>0){resizeInnerDiv();}
$(window).resize(function(){if($('.content').length>0){resizeInnerDiv();}});if($('.specialities-slider').length>0){$('.specialities-slider').slick({dots:false,autoplay:false,infinite:false,variableWidth:true,prevArrow:false,nextArrow:false,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]});}
if($('.posts-slider').length>0){$('.posts-slider').slick({dots:false,autoplay:false,infinite:true,slidesToShow:2,variableWidth:false,});}
if($('.doctor-slider').length>0){$('.doctor-slider').slick({dots:false,autoplay:false,infinite:true,variableWidth:true,});}
if($('.bookingrange').length>0){var start=moment().subtract(6,'days');var end=moment();function booking_range(start,end){$('.bookingrange span').html(start.format('MMMM D, YYYY')+' - '+end.format('MMMM D, YYYY'));}
$('.bookingrange').daterangepicker({startDate:start,endDate:end,ranges:{'Today':[moment(),moment()],'Yesterday':[moment().subtract(1,'days'),moment().subtract(1,'days')],'Last 7 Days':[moment().subtract(6,'days'),moment()],'Last 30 Days':[moment().subtract(29,'days'),moment()],'This Month':[moment().startOf('month'),moment().endOf('month')],'Last Month':[moment().subtract(1,'month').startOf('month'),moment().subtract(1,'month').endOf('month')]}},booking_range);booking_range(start,end);}
var chatAppTarget=$('.chat-window');(function(){if($(window).width()>991)
chatAppTarget.removeClass('chat-slide');$(document).on("click",".chat-window .chat-users-list a.media",function(){if($(window).width()<=991){chatAppTarget.addClass('chat-slide');}
return false;});$(document).on("click","#back_user_list",function(){if($(window).width()<=991){chatAppTarget.removeClass('chat-slide');}
return false;});})();function animateElements(){$('.circle-bar1').each(function(){var elementPos=$(this).offset().top;var topOfWindow=$(window).scrollTop();var percent=$(this).find('.circle-graph1').attr('data-percent');var animate=$(this).data('animate');if(elementPos<topOfWindow+$(window).height()-30&&!animate){$(this).data('animate',true);$(this).find('.circle-graph1').circleProgress({value:percent/100,size:400,thickness:30,fill:{color:'#da3f81'}});}});$('.circle-bar2').each(function(){var elementPos=$(this).offset().top;var topOfWindow=$(window).scrollTop();var percent=$(this).find('.circle-graph2').attr('data-percent');var animate=$(this).data('animate');if(elementPos<topOfWindow+$(window).height()-30&&!animate){$(this).data('animate',true);$(this).find('.circle-graph2').circleProgress({value:percent/100,size:400,thickness:30,fill:{color:'#68dda9'}});}});$('.circle-bar3').each(function(){var elementPos=$(this).offset().top;var topOfWindow=$(window).scrollTop();var percent=$(this).find('.circle-graph3').attr('data-percent');var animate=$(this).data('animate');if(elementPos<topOfWindow+$(window).height()-30&&!animate){$(this).data('animate',true);$(this).find('.circle-graph3').circleProgress({value:percent/100,size:400,thickness:30,fill:{color:'#1b5a90'}});}});}
if($('.circle-bar').length>0){animateElements();}
$(window).scroll(animateElements);$(window).on('load',function(){if($('#loader').length>0){$('#loader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow':'visible'});}})})(jQuery);