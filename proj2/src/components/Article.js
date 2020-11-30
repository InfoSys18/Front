import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        //console.log('---', 'mounting')
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //console.log('---', 'component will update')
        
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        //console.log('---', this.props)
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width: '75%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        <div className="float-right">clicked {this.state.count}</div>
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        current date: {new Date(article.date).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article