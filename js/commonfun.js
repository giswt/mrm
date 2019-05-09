
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
	var row={id:id,b11332:'32.80', b333:'22.94',b2334:'0',b11332xs:'1', b333xs:'0.7',b2334xs:'1',yjkz:'9.58',lskz:'0',sxyk:'0',cqhcl:'0.85',fjykzhcl:'1',clbyxs:'1.5'};
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


function autoaddcolumns(columns)
{
	var dynamicHeader = [];
	var dyheaderone=[];
	var dyheadertwo=[];
	
	
	dyheaderone.push(
	{
		title: '选择',
		//field: 'idcheck',
		field : 'checked',
		checkbox: true,
		align: 'center',
		valign: 'middle',
		colspan: 1,
		rowspan: 2,
		clickToSelect:true
	});
	
	
	for (var i = 0; i<columns.length; i++) 
	{


        var column=[
			{title:'&nbsp;&nbsp;销&nbsp;&nbsp;量&nbsp;&nbsp;',field:'xl',align: 'center',valign: 'middle',
				editable: 
					{	type: 'text',
						mode: 'inline',
						validate: function (v) {
							if (!v)
								return '不能为空';

							}
					}
			},
			{title:'&nbsp;&nbsp;单&nbsp;&nbsp;价&nbsp;&nbsp;',field:'price',align: 'center',valign: 'middle',
				editable: 
					{	type: 'text',
						mode: 'inline',
						validate: function (v) {
							if (!v)
								return '不能为空';

							}
					}			
			}
			]


		
        dyheaderone.push(
		{
            "title": columns[i],
            
			"field": '',
			align: 'center',
			valign: 'middle',
			colspan: 2,
			rowspan: 1
        }
		);
		var columntemp=[];
		columntemp=column.concat();
		columntemp[0].field=columns[i]+"-xl";
		//column[0].width=100; //调整宽度
		columntemp[1].field=columns[i]+"-price";
		//column[1].class='col-md-6';
		dyheadertwo.push(columntemp[0]);
		dyheadertwo.push(columntemp[1]);
	}
	dynamicHeader.push(dyheaderone);
	dynamicHeader.push(dyheadertwo);
	
	return dynamicHeader;

}

function xiaoshourow(id,fields)
{
	var row={id:id};
	for(j=0;j<fields.length;j++)
	{
		row[fields[j].field]=260;//价格 和销量  测试时都设置为260，方便
	}
	return row;
};

function xiaoshoumeitable(data)
{
	var xl=[];
	var price=[];

	var tempbool=true;
	for(i=0;i<data.length;i++)
	{
		var tempxl=[];
		var tempprice=[];
		
		for(var j in data[i]) {
			if(j!="checked" && j!="id")
			{
				if(tempbool==true)
				{
					tempprice.push(eval(data[i][j]));
					tempbool=false;
				}
				else
				{
					tempxl.push(eval(data[i][j]));
					tempbool=true;
				}
			}
		}
		xl.push(tempxl);
		price.push(tempprice);
		
		
		
	}
	return [xl,price];
}

function resultFormat(table,data,head,zxxs,ckqyxs)
{
	var indexi=1;
	
	zxxs=zxxs*100;
	ckqyxs=ckqyxs*100;
	
	var xmmclist=['销售收入','折现系数('+zxxs+'%)','销售收入现值','销售收入现值累计','采矿权权益系数','采矿权评估价值'];
	
	xsehj=0;
	for(var j=0;j<data[0].length;j++)
		xsehj=xsehj+data[0][j];
	
	var totalxz=0;
	var totalxzlist=[];
	var cqxyxslist=[];
	
	for(var j=0;j<data[2].length;j++)
	{
		totalxz=totalxz+data[2][j];
		totalxzlist.push(totalxz);
		cqxyxslist.push(ckqyxs+'%');
	}
	
	data.splice(3,0,totalxzlist);
	data.splice(4,0,cqxyxslist);
	
	
	for(var i=1;i<7;i++)
	{
		var rowresult={};
		rowresult.xh=i;
		rowresult.xmmc=xmmclist[i-1]
		
		for (var j=0;j<head.length;j++)
		{
			rowresult[head[j]]=data[i-1][j]
			
			
		}
		if(i==1)
			rowresult.hj=xsehj;
		if(i==3)
			rowresult.hj=totalxz;
		if(i==6)
			rowresult.hj=data[i-1][head.length-1]
		
		table.bootstrapTable('insertRow', {index: i, row: rowresult});
	}
	
	
	
}




function test()
{
}