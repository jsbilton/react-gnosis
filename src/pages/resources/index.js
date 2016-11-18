const React = require('react')
const { Link } = require('react-router')
const Db = require('../../components/db')
// const dbUrl = process.env.REACT_APP_DB
// const PouchDB = require('pouchdb-http')
// const db = PouchDB(dbUrl)

const Resources = React.createClass({
    getInitialState() {
        return {resources: []}
    },
    componentDidMount() {
        this.props.db.allDocs({
            include_docs: true
        }, (err, result) => {
            if (err)
                return this.setState({error: err.message})
            const resources = result.rows.map(o => o.doc)
            this.setState({resources})
        })
    },
    render() {
        const resourceItem = doc =>
          <li key={doc._id}>
              <Link to={"/" + doc._id + "/show"}>
                  {doc.title}
              </Link>
          </li>

        return (
            <div>
                <h3>Resources</h3>
                <Link to="/new">
                  New Resource
                </Link>
                <ul>
                    {this.state.resources.map(resourceItem)}
                </ul>
            </div>
        )
    }
})

module.exports = Db(Resources)
