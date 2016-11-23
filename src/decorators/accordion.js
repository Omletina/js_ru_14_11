import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
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
