import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    onInputChange = (event) => {//这个方法已经绑定了this，不像function (){}这种要this.functionName = this.functionName.bind(this)
        this.setState({
            newToDo: event.target.value
        });
    }

    onInputSubmit = (event) => {//item表示原来事项的内容，done表示是否划掉
        event.preventDefault();
        this.setState((previousState) => ({
            list: [...previousState.list, { item: previousState.newToDo, done: false }],
            newToDo: ''
        }));
    }

    //点击方法来实现是否划掉事项
    onListItemClick = (i) => { //i为事项的index
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i), //sclice返回一个新的数组，并没有改变原来的数组
                Object.assign({}, previousState.list[i], { done: !previousState.list[i].done }), //object.assign是ES6的一个新特性，它基于第一个参数（在本例中为空对象）创建新对象，其他对象可以传入，并将被添加到第一个队形中，而不需要修改
                ...previousState.list.slice(i + 1) //获取传入索引之后的所有内容那个并将其添加到数组
            ]
        }))
    };

    //删除事项
    deleteListItem = (i) => {
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i),
                ...previousState.list.slice(i + 1)
            ]
        }))
    }
    componentWillMount() {
        this.setState({
            list: [{ item: "thing1", done: false }, { item: "thing2", done: false }, { item: "thing3", done: false }],
            newToDo: 'test'
        })

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h1>My To Do App</h1>
                                <hr />
                                <Input onChange={this.onInputChange} value={this.state.newToDo} onInputSubmit={this.onInputSubmit} />
                                <div>List goes here</div>
                                <List listItems={this.state.list} onClick={this.onListItemClick} deleteListItem={this.deleteListItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoApp;
