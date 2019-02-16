
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
	
	
	const checkLimitLevel = (level, checkShowing, checkShowingLevelDwn) => (item.level > limitLevel) ? checkShowing() : checkShowingLevelDwn()
	
	const checkShowing = (title, level, parentItem) => (item.level <= level && item.parentItem == title) ? {...item, "show": true, "hello":"it's me"} :
		{...item, "show": false, "hello":"Not Me!"} 
	
	const  checkShowingLevelDwn = (title, level, parentItem) => (item.level == (level-1) && item.parentItem == title) ? {...item, "show": true} :
		{...item, "show": false} 
		