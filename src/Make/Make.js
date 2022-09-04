/**
 * 评论
 * **/
import React, {Component} from 'react';
class Make extends Component {
    constructor() {
        super()
        this.state = {
            txt: '',
            content: '',
            contents: []
        }
    }

    /**
     * 通过条件渲染评论列表
     * **/
    renderList() {
        /*return this.state.contents.length === 0
            ?
            (<div>暂无评论，快去评论吧</div>)
            :
            (<ul>
                {
                    this.state.contents.map(item =>
                        <li key={item.id}>
                            <h3>评论人： {item.name}</h3>
                            <p>评论内容： {item.content}</p>
                        </li>
                    )
                }
            </ul>)*/
        if (this.state.contents.length === 0) {
            return <div>暂无评论，快去评论吧</div>
        }
        return (<ul>
            {
                this.state.contents.map(item =>
                    <li key={item.id}>
                        <h3>评论人： {item.name}</h3>
                        <p>评论内容： {item.content}</p>
                    </li>
                )
            }
        </ul>)

    }

    /*处理表单元素值*/
    handleForm = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    /*发表评论*/
    addForm = () => {
        const {txt, content, contents} = this.state
        //非空校验
        if(txt.trim() ==='' || content.trim() === ''){
            alert('请输入评论人和评论内容')
            return
        }
        const newcontents = [
            {
                id: Math.random(),
                name: txt,
                content: content
            },
            ...contents
        ]
        this.setState({
            txt:'',
            content:'',
            contents: newcontents
        })
    }

    render() {
        const {txt, content} = this.state
        return (
            <div>
                <div>
                    <input name='txt' placeholder='请输入评论人' type="text" value={txt}
                           onChange={this.handleForm}/>
                    <br/>
                    <textarea name='content' value={content} onChange={this.handleForm}
                              placeholder={'请输入评论内容'} clos={30} rows={10}></textarea>
                    <br/>
                    <button onClick={this.addForm}>发表意见</button>
                </div>
                {/* 通过条件渲染显示 */}
                {
                    this.renderList()
                }


            </div>
        )
    }
}

export default Make
