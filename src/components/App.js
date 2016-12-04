import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import SelectFilter from './SelectFilter'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const options = [].map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <SelectFilter />
            </div>
        )
    }
}

export default App