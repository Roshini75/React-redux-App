import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux';
import {
    fetchPosts
} from '../actions/postActions';
class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    //  constructor(props){
    //    super(props);
    //    this.state={
    //        posts:[]
    //    }
    //  }
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>this.setState({posts : data }));
    // }
    render() {
        const postItems = this.props.posts.map(post => ( <
            div key = {
                post.id
            } >
            <
            h3 > {
                post.title
            } < /h3> <
            p > {
                post.body
            } < /p> <
            /div>
        ));
        return ( <
            div >
            <
            h1 > posts < /h1> {
                postItems
            } <
            /div> );
        }
    }

    const mapStateToProps = state => ({
        posts: state.posts.items
    });
    export default connect(mapStateToProps, {
        fetchPosts
    })(Posts);
