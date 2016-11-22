import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openArticleId: null
    }

    render() {
        return <Component {...this.props} {...this.state} openAccordion = {this.openAccordion}/>
    }


    openAccordion = id => ev => {
        this.setState({
            openArticleId: (this.state.openArticleId == id) ? null : id
        })
    }




}