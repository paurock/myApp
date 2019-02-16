
onClick = (title, id, level, parentItem) => {	
	let { menu } = this.state
	menu = menu.map( item => 
	
	(item.level == (level-1) && item.parentItem == title) ? 
	{...item, "show": true} : 
	{...item, "show": false}
	
	
	)
	
	onClick = (title, id, level, parentItem) => {	
		let { menu } = this.state
		menu = menu.map( item => {
			if (item.level > limitLevel) { 
				return if (item.level <= level && item.parentItem == title) {	
					return {...item, "show": true, "hello":"it's me"} 
					} else {
					return	{...item, "show": false, "hello":"Not Me!"} 
				}
				
				} else {
				return if (item.level == (level-1) && item.parentItem == title) {				
					return {...item, "show": true}
					} else {
					return {...item, "show": false} 
				}
			}
		}
	)	
	
	
onClick = (title, id, level, parentItem) => {	
		let { menu } = this.state
		
		menu = menu.map( item => checkLimitLevel(checkShowing(item), checkShowingLevelDwn(item)))		
				
		const checkShowing = (item) => (item.level == level-1 && item.parentItem == title) ? {...item, "show": true, "hello":"it's me"} :
		{...item, "show": false, "hello":"Not me"} 
		
		const  checkShowingLevelDwn = (item) => (item.level == level && item.parentItem == title) ? {...item, "show": true, "hello":"it's me 2"} :
		{...item, "show": false, "hello":"Not me 2"} 	
		
		const checkLimitLevel = (checkShowing, checkShowingLevelDwn) => (item.level == limitLevel) ? checkShowing : checkShowingLevelDwn
			 		
		
	this.setState({menu})
	console.log(menu, level, parentItem,  title )	
	}	
		