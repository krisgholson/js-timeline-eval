$(document).ready (function(){
	
	var container = $('#timeline')[0];

	var timeline;
	var data = [
        {
            'start': new Date(2010,7,23),
            'content': 'Conversation',
			'group' : 'Type A'
        },
        {
            'start': new Date(2010,7,23,23,0,0),
            'content': 'Mail from boss',
			'group' : 'Type A'
        },
        {
            'start': new Date(2010,7,24,16,0,0),
            'content': 'Report',
			'group' : 'Type A'
        },
        {
            'start': new Date(2010,7,26),
            'end': new Date(2010,8,2),
            'content': 'Traject A',
			'group' : 'Type B'
        },
        {
            'start': new Date(2010,7,28),
            'content': 'Memo',
			'group' : 'Type B'
        },
        {
            'start': new Date(2010,7,29),
            'content': 'Phone call',
			'group' : 'Type C'
        },
        {
            'start': new Date(2010,7,31),
            'end': new Date(2010,8,3),
            'content': 'Traject B',
			'group' : 'Type C'
        },
        {
            'start': new Date(2010,8,4,12,0,0),
            'content': 'Report',
			'group' : 'Type C'
        }
    ];
	
    // specify options
    var options = {
        'width':  '100%',
        'height': '300px',
        'editable': true,   // enable dragging and editing events
        'style': 'box'
    };
	
	var timeline = new links.Timeline(container);
	
    function onRangeChanged(properties) {
        console.info ('rangechanged');
    }

    // attach an event listener using the links events handler
    links.events.addListener(timeline, 'rangechanged', onRangeChanged);

    // Draw our timeline with the created data and options
    timeline.draw(data, options);

});