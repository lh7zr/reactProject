import React, {Component} from "react";
import Make from "./Make/Make";
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/*评论模块*/}
                <Make/>
                <div>评论内容</div>
            </div>
        )
    }
}

export default App
