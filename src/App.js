import React,{Component,Fragment} from "react";
import './style.css'
import MenuItem from "./MenuItem";
class App extends Component{
    constructor(props) {
        super(props)//调用父类的构造函数，固定写法
        this.state={
            inputValue:'', //input中的值
            list:['林思意','鞠婧祎','陆婷']
        }
    }
    render() {
        return (
            <Fragment>
                <MenuItem />
                <div>
                    <label htmlFor="addserve">加入服务：</label>
                    <input id='addserve' className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}> 选择人物 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li
                                    key={index+item}
                                    onClick={this.deleteItem.bind(this)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    /**
     * 输入框onchange事件
     * **/
    inputChange(e){
       this.setState(
           {inputValue: e.target.value}
       )
    }
    /**添加**/
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    /**删除**/
    deleteItem(index){
        console.log(index,'index')
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export  default App
