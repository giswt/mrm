
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


function chuliangmeirow(id)
{
	var row={id:id,b11332:'0', b333:'0',b2334:'0',b11332xs:'1', b333xs:'1',b2334xs:'1',yjkz:'0',lskz:'0',sxyk:'0',cqhcl:'0',fjykzhcl:'1',clbyxs:'1'};
	return row;
};

function chuliangmeitable(data)
{
	
	//BYCL,KXDXS,SSSJ,CBXS
	total=[];
	bycl=[];
	kxdxs=[];
	sssj=[];
	cbxs=[];
	for(i=0;i<data.length;i++)
	{
		temp1=data[i];
		
		for ( j in temp1)
		{
			//alert(i);//属性名称
			temp1[j]=eval(temp1[j])	;//属性值
		}
		
		temparray1=[];
		temparray1.push(temp1.b11332);temparray1.push(temp1.b333);temparray1.push(temp1.b2334);
		bycl.push(temparray1);
		
		temparray2=[];
		temparray2.push(temp1.b11332xs);temparray2.push(temp1.b333xs);temparray2.push(temp1.b2334xs);
		kxdxs.push(temparray2);
		
		temparray3=[];
		temparray3.push(temp1.yjkz);temparray3.push(temp1.lskz);temparray3.push(temp1.sxyk);temparray3.push(temp1.cqhcl);temparray3.push(temp1.fjykzhcl);
		sssj.push(temparray3);
		
		
		cbxs.push(temp1.clbyxs)
		
		//for(var i in json_data)
			//result.push([i, json_data [i]]);
		
	}
	total.push(bycl);
	total.push(kxdxs);
	total.push(sssj);
	total.push(cbxs);
	return total;
	
}