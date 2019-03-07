
var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://www.sklepmartes.pl/46509-large_default/pilka-zine-cdamdjayn3f-huari.jpg'
},
{
    id: 2,
    title: '22Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://www.decathlon.pl/media/835/8351330/big_695930.jpg'
},
{
    id: 3,
    title: '33Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://ecsmedia.pl/c/intex-pilka-plazowa-w-iext35221918.jpg'
}
];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesc, { description: this.props.movie.desc }),
                React.createElement(MovieImg, {
                    img: this.props.movie.img
                })
            )
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title)
    }
})

var MovieDesc = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('p', {}, this.props.description)
    }
})

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('img', { src: this.props.img })
    }
})

var moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, { movie: movie, key: movie.id });
})

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Filmów'),
        React.createElement('ul', {}, moviesElements)
    );



ReactDOM.render(element, document.getElementById('app'));