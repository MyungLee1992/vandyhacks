$( ()=> {

	$('.toast').toast({delay: 30000}).toast('show');

	$('#profile-div').click( ()=> {
		$('#account-modal').modal('show');
	});

	$('#update-btn').click( ()=>{
		let name = $('#name-input').val();
		let status = $('#status-select').val();
		let emoji = $('#emoji-select').val();
		let availability = $('#availability-select').children('option:selected').html();
		updateStatus(name, status, emoji, availability);
	});

	$('#add-status-btn').click( ()=> {
		$('#add-status-modal').modal('show');
	});
	$('#add-status-modal').on('shown.bs.modal', ()=> {
		$('#add-status-input').focus().select();
	});

	// ----------------

	const AVAIL_COLOR_CLASSES = {
		avail: 'green',
		kinda: 'yellow',
		busy: 'red',
		away: 'purple'
	};

	$('#availability-select').change( ()=> {
		let val = $('#availability-select').val();
		$('.user-dot.dot').removeClass('red yellow green purple').addClass(AVAIL_COLOR_CLASSES[val]);

		let txt = $('#availability-select').children('option:selected').html();
		console.log(txt);
		$('.user-availability-text').html(txt);
	});
});

function populateSelect(selectName, optionNames) {
	$(`#${selectName}`).html(optionNames.map( str => `<option>${str}</option>`) );
}