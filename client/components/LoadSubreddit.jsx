import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = ({dispatch}) => (
  <div>
    <button
      onClick={() => dispatch(fetchPosts('newzealand'))}
      >Fetch Posts for New Zealand</button>

      <button
        onClick={() => dispatch(fetchPosts('gameofthrones'))}
        >Fetch Posts for Game of Thrones</button>
  </div>
)

export default connect()(LoadSubreddit)
