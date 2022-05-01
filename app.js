const interval = 100
class Timer extends React.Component {
    state = {value: 0}
    componentDidMount() {
        this.timerID = setInterval(this.increment, 1000 / interval)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    increment = () => {
        this.setState(({value}) => ({value: ++value}))
    }
    render() {
        const {value} = this.state
        return (
            <div>
                <p>Таймер:</p>
                <p>
                    <span>{Math.round(value / interval / 60 / 60)} : </span>
                    <span>{Math.round(value / interval / 60)} : </span>
                    <span>{Math.round(value / interval)} . </span>
                    <span>{value % interval}</span>
                </p>
            </div>
        )
    }
}
ReactDOM.render(<Timer />, document.getElementById('root'))