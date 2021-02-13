import React, { Component } from 'react';

//import { Route, Link } from 'react-router-dom'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
//import Post from '../../components/Post/Post';
//import FullPost from '../../components/FullPost/FullPost';
//import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

//import post from '../../components/Post/Post';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent'
//import NewPost from './NewPost/NewPost'
//import FullPost from './FullPost/FullPost'

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {

  state = {
    auth: true
  }

  render () {
    return (
      <div className="Blog">
          <header>
            <nav>
              <ul>
                <li><NavLink 
                  to="/posts/" 
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}>Posts</NavLink></li>
                <li><NavLink to={{
                  //pathname: this.props.match.url + '/new-post',
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
              </ul>
            </nav>
          </header>
          
          
          {/*<Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/" render={() => <h1>Home2</h1>} />*/}
          
          <Switch>
            
            { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
            <Route path="/posts" component={Posts} />
            <Route render={() => <h1>Not found</h1>} />
            {/*<Redirect from="/" to="/posts"/>
            {/*<Redirect from="/" to="/posts"/>*/}
            {/*<Route path="/" component={Posts} />*/}
            {/*<Route path="/:id" component={FullPost} />*/}
          </Switch>
          
          {/*
          <section>
            <FullPost id={this.state.selectedPostId} />
          </section>
          <section>
            <NewPost />
          </section>
          */}
      </div>
    );
  }
}

export default Blog;