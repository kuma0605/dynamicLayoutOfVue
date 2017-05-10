export function limitRange(range){
	if(range[0]){
		let startDate=range[0].getTime();
		let maxDate=startDate+29*24*60*60*1000;
		let endDate=range[1].getTime();
		if(endDate>maxDate){
			endDate=maxDate;
		}
		range=[new Date(startDate),new Date(endDate)];
	}
	return range;
}

export function initDateRange(endDate = new Date(), diff, endDayDiff){
	//默认为今天
	endDate.setHours(0);
	endDate.setMinutes(0);
	endDate.setSeconds(0);

	if(endDayDiff){
		endDate=new Date(endDate.getTime() - endDayDiff*24*60*60*1000)
	}

	let startDate= new Date(endDate.getTime() - diff*24*60*60*1000);

	return [startDate, endDate];
}
