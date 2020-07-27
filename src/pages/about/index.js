import React,{ Component } from 'react'
import * as XLSX from 'xlsx'

export default class About extends Component {
	state = {
		
	}
	download = (json, fileName) =>{
		const type = 'xlsx'  //定义导出的文件格式
		var tmpDown;    //导出的内容
		var tmpdata = json[0];
		json.unshift({});
		var keyMap = [];   //获取key
		for(let k in tmpdata){
			keyMap.push(k)
			json[0][k] = k;
		}
		var tmpdata = [];   //用来保存转换好的json
		json.map((v,i)=> keyMap.map((k,j)=> Object.assign({},{
			v:v[k],
			position: (j > 25 ? getCharCol(j) )
		})))
	}
	
	render(){
		return (
			
		)
	}
}