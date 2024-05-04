$(function() {
    // Attach a change event handler to all checkbox inputs
	let amenityIDs = {};
    $('input[type="checkbox"]').change(function() {
        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Checkbox is checked, do something
			const amenityID = $(this).data("id");
			amenityIDs[amenityID] = true;
        } else {
            // Checkbox is unchecked, do something else
            delete amenityIDs[amenityID];
        }
    });
});
