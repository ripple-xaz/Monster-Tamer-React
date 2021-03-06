import React, { Component } from 'react';

import './assets/styles/components/layout_componet.scss';
import './assets/styles/pages/page.scss';
import {head as Head} from './components/head'
import {mainLayout as MainLayout} from './components/main_layout'
import {Foot} from './components/foot'


import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
const pathToRegexp = require('path-to-regexp')
let contractAddress = window.contractAddress
let call = window.call
let pay = window.pay
let receipt = window.receipt
let callArgs = new Array()

let $ = window.$
// import { Button } from 'element-react';
// import 'element-theme-default';


const navs = [
	{
		name:'market',
		icon:'B',
		path:'/',
		// img:require('./assets/images/earth.png'),
		// hoverImg:require('./assets/images/earth02.png'),
		width:'33px'
	},
	{
		name:'my-assets',
		icon:'A',
		path:'/my-assets',
		// img:require('./assets/images/crocodile.png'),
		// hoverImg:require('./assets/images/crocodile02.png'),
		width:'32px'
	},
	{
		name:'attack',
		icon:'C',
		path:'/attack',
		// img:require('./assets/images/arms.png'),
		// hoverImg:require('./assets/images/arms02.png'),
		width:''
	},
	{
		name:'hatch',
		icon:'D',
		path:'/hatch',
		// img:require('./assets/images/egg.png'),
		// hoverImg:require('./assets/images/egg02.png'),
		width:''
	},
	{
		name:'top',
		icon:'E',
		path:'/top',
		// img:require('./assets/images/An_crown.png'),
		// hoverImg:require('./assets/images/An_crown02.png'),
		width:''
	}
]


class App extends Component {
  	constructor(props) {
	    super(props);
	    this.state={
	    }
	}


	componentWillMount() {
			
			
		call(contractAddress,0,'allInOne',callArgs,(data)=>{
			let result = JSON.parse(data.result)

			window.bkctime = result.now*1000
			window.interal = result.interal
			window.freeCnt = result.free_cnt
			window.userAddress = result.me

			if(result.free_cnt == 1){
				$('#hach-free-egg').addClass('disable')
			}
			document.getElementById('head-integral').innerHTML= result.interal
			document.getElementById('nick-name').innerHTML = result.me
		})
	}
	render() {
	    return (
	      <div className="App">
	        <Head pathName={this.state.pathName} navs={navs}></Head>
	        <MainLayout ></MainLayout>
	        <Foot />
	      </div>
	    );
	}
}

export default App;
