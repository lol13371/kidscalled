var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function () {
	$(".lazy").lazy();
	//$('#connectModal').modal('show');
	function uncheck() {
		$(".card-list li .card-checkbox").filter(":checkbox").prop("checked", false);
		$(".card-list li .card-checkbox").filter(":checkbox").prop("disabled", false);
	}
	$("#random").click(function () {});
	/*
    $('.btn-mint').click(function () {
        $('#loadingModal').modal('show');
        setTimeout(function () {
            $(window).attr('location','./mint-success.html')
        }, 2000)
    });
*/

	// $('.card-list .card').click(function () {
	//     var checkbox = $(this).siblings('.card-checkbox');
	//     if (!$(checkbox).is(':checked')) {
	//         var value = $(checkbox).attr('value');
	//         $(".progress-bar").css('width', value + '%');
	//     }
	//
	//     // var check = $($("input[type='checkbox']:checked")).length;
	//     // if (check > 2) {
	//     //     $(this).find("input[type='checkbox']").not(":checked").attr("disabled", true);
	//     // }
	// });

	$(".card-checkbox").change(function () {
		$($(".card-list.attributes").find("input[type='checkbox']")).each(function () {
			$(this).attr("disabled", false);
		});
		var check = $($(".card-list.attributes").find("input[type='checkbox']:checked")).length;
		if (check > 2) {
			$(".card-list.attributes").find("input[type='checkbox']").not(":checked").attr("disabled", true);
		}

		// var checkbox = $('.card').siblings('.card-checkbox');
		var value = $(this).attr("value");
		if ($(this).is(":checked")) {
			//$(".progress-bar").css('width', value + '%');
			//console.log(value)
		}
	});

	/*
    $('.connect-wallet').click(function () {
        $('#connectModal').modal('hide');
        $('#connectWalletModal').modal('show');
    });*/
	AOS.init();
});


}
/*
     FILE ARCHIVED ON 19:47:46 Jan 15, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:48 Jan 29, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 114.742
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.061
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 84.587 (3)
  PetaboxLoader3.datanode: 51.249 (5)
  CDXLines.iter: 13.904 (3)
  PetaboxLoader3.resolve: 55.624 (2)
  load_resource: 62.344
  loaddict: 15.977
*/