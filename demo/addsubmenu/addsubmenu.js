$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});

	// Expand to Mobile Phones where we will add two
	// additional menu items with sub-menus
	$( '#menu' ).multilevelpushmenu( 'expand' , $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first() );

	// Add submenu after click to menu element
	$( '.add-submenu' ).click(function(){
		menuID = $(this).data('id');
		var $addTo = $( '#menu' ).multilevelpushmenu( 'finditemsbydataattribute' , 'id', menuID ).first();
		console.log(addItems[menuID-1]);
		$( '#menu' ).multilevelpushmenu( 'addsubmenuitems' , addItems[menuID-1] , $addTo , 0 );
	});

});

var addItems = [
	[{
		name: 'Super Smart Phone',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'Super Smart Phone',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'iPhone 4',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'iPhone 5',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'iPhone 6',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'iPhone 6 Plus',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	}],
	[{
		name: 'Thin Magic Mobile',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'Thin Magic Mobile',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'Samsung Galaxy S II',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S III',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S IV',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	}],
	[{
		name: 'Performance Crusher',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'Performance Crusher',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'Samsung Galaxy S II',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S III',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S IV',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	}],
	[{
		name: 'Futuristic Experience',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'Futuristic Experience',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'Samsung Galaxy S II',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S III',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S IV',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	}]
];