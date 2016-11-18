const React = require('react')
const { Link } = require('react-router')

const Db = require('../../components/db')


const ShowResource = React.createClass({
  getInitialState: function () {
    return {
      title: '',
      reference: ''
    }
  },
  componentDidMount () {
    this.props.db.get(this.props.params.id, (err, res) => {
      console.log(res)
      if (err) return console.log(err.message)
      this.setState(res)
    })
  },
    render() {
      {console.log(this.props)}
        return (
            <div>
                <h3>Show Resource</h3>
                <h4>{this.state.title}</h4>
                <iframe src={this.state.reference} />
                <button>Delete Resource</button>
                <Link to="/">
                    Return to List
                </Link>
            </div>
        )
    }
})

module.exports = Db(ShowResource)
