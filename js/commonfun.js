
//
function jsontoarray(jsonArray) {
	uaff=[];
	u=[];
	a=[];
	xsf=[];
	xsf2=[];
	for(i=0;i<jsonArray.length;i++)
	{
		temp1=jsonArray[i];
		u.push(eval(temp1.gcl));
		a.push(eval(temp1.dwys));
		xsf.push(eval(temp1.tzxs));
		xsf2.push(eval(temp1.dqtzxs));
		
	}
	uaff.push(u);
	uaff.push(a);
	uaff.push(xsf);
	uaff.push(xsf2);
	return uaff;
};