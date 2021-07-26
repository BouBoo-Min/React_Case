import React, {Component} from 'react';
/*// 引入Count UI组件
import CountUI from '../Component/Count'*/
//引入action
import {
    increment,
    decrement,
    incrementAsync
} from '../redux/actions/Count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//定义UI组件
class Count extends Component {
    increment = () => {
        const {value} = this.selectNum
        this.props.increment(value*1)
    }
    decrement = () => {
        const {value} = this.selectNum
        this.props.decrement(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNum
        if(this.props.count % 2 !== 0) {
            this.props.increment(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum
        /* setTimeout(() => {
             store.dispatch(createIncrementAction(value*1))
         },500)*/
        this.props.incrementAsync(value*1,500)
    }
    render() {
        return (
            <div>
                <h2>我是Count组件,下方组件总人数为:{this.props.personCount}</h2>
                <h1>当前求和为：{this.props.count}</h1>
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

/*// mapStateToProps用于传递状态
const mapStateToProps = (state) => {
    return {count:state}
}
// mapDispatchToProps用于传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}*/

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
   /* mapStateToProps,
    mapDispatchToProps*/
   state => ({
       count:state.counts,
       personCount: state.persons.length
   }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)