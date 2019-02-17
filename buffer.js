
	onClick = (title, id, level, parentItem) => {	
		let { menu } = this.state
		let item	
		
		
			
		const checkShowing = (item, level) => (item.level >= level-1 && item.parentItem == title) ? {...item, "show": true, "hello":"it's me"} :
		{...item, "show": false, "hello":"Not me"} 		
		
		(level <= limitLevel) ? menu = menu.map( item => checkShowing(item, level) ) : ()=>console.log("no way")
	
	this.setState({menu})
	
	console.log(menu, level, limitLevel)
	} 	
