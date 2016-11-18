const React = require('react')
const { BrowserRouter, Match } = require('react-router')

const ResourceForm = require('./pages/resources/form')
const Resources = require('./pages/resources/index')
const ShowResource = require('./pages/resources/show')

const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                  
                    <h1>Gnosis 1</h1>
                    <Match exactly pattern="/" component={Resources} />
                    <Match pattern="/new" component={ResourceForm} />
                    <Match pattern="/:id/show" component={ShowResource} />
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
