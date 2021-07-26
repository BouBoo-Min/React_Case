import React, {Component} from 'react';
//引入store，用于获取redux中保存状态
import store from '../redux/store'
import {createIncrementAction, createDecrementAction} from '../redux/action'

class Count extends Component {
    increment = () => {
        const {value} = this.selectNum
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value} = this.selectNum
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNum
        const count = store.getState()
        if(count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum
       /* setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        },500)*/
        store.dispatch(createIncrementAction(value*1,500))
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;