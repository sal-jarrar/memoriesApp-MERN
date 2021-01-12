import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles'
import memories from './images/memories.png'
import { getPosts } from './redux/actions/postActions'

const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
    setPosts(getPosts())
  }, [currentId, dispatch, setPosts])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt='icon' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
            className={classes.mainContainer}
          >
            {posts.length === 0 ? (
              <h2>You dont have a memories create one</h2>
            ) : (
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
            )}

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
