// -----------------------------------------------------------------------
//	audio.js
//
//					Dec/26/2018
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** audio.js ***")

//	var file_text = "txt/sounds.txt"
	var file_text = "/static/tag_audio/txt/sounds.txt"

	jQuery.get (file_text,function (data_received)
		{
		jQuery("#contents").html (data_received)
		})

	jQuery ("button").click (function ()
	{
	const title = this.id
	jQuery("#outarea_bb").text (title + " *** clicked ***")

	file_text = "txt/" + title + ".txt"
	file_text = "/static/tag_audio/txt/" + title + ".txt"
	jQuery("#outarea_cc").text (file_text)

	jQuery.get (file_text,function (data_received)
		{
		jQuery("#contents").html (data_received)
		})

	})

	jQuery("#outarea_hh").text ("*** end *** audio.js ***")
})

// -----------------------------------------------------------------------
