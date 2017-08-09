import React, { Component } from 'react'
import axios from 'axios'
import Fail from './Fail'

export default class Delete extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      done: false,
      wasError: false,
      display: null,
      badge: (
        <div className='uk-card-badge uk-label uk-label-danger'>No!</div>
      )
    }
  }

  doOpts () {
    axios({
      method: 'Delete',
      baseURL: window.Replay_Test.api,
      url: '/httpTest',
      data: {
        Replicants: 'Quite an experience to live in fear, isn\'t it? That\'s what it is to be a slave.'
      }
    }).then(response => {
      let fail = false
      if (response.data !== '{"Rick Deckard":"Replicants are like any other machine, are either a benefit or a hazard. If they\'re a benefit it\'s not my problem."}') {
        fail = true
      }
      let display = (
        <div>
          <ul className='uk-list uk-list-bullet uk-overflow-auto'>
            {Array.from(Object.entries(response.headers)).map(([k, v]) => {
              if (k === 'content-length' && v !== '139') {
                fail = true
              }
              if (k === 'content-type' && v !== 'application/json; charset=utf-8') {
                fail = true
              }
              return (
                <li key={`${k}: ${v}`}>{k}: {v}</li>
              )
            })}
          </ul>
          <p>{response.data}</p>
          {fail && <Fail/>}
        </div>
      )
      this.setState({
        done: true,
        wasError: false,
        display,
        badge: (
          <div className='uk-card-badge uk-label'>HTTP {response.status} {response.statusText}</div>
        )
      })
    }).catch(error => {
      console.error(error)
      if (error.response) {
        let display = (
          <div className='uk-overflow-auto'>
            <ul className='uk-list uk-list-bullet'>
              {Array.from(Object.entries(error.response.headers)).map(([k, v]) => (
                <li key={`${k}: ${v}`}>{k}: {v}</li>
              ))}
            </ul>
            <p>{error.response.data}</p>
            <Fail/>
          </div>
        )
        this.setState({
          done: true,
          wasError: true,
          display,
          badge: (
            <div className='uk-card-badge uk-label uk-label-danger'>
              HTTP {error.response.status} {error.response.statusText}</div>
          )
        })
      } else if (error.request) {
        let display = (<div><p>No Response</p><Fail/></div>)
        this.setState({
          done: true,
          wasError: true,
          display,
          badge: (
            <div className='uk-card-badge uk-label uk-label-danger'>Fail!</div>
          )
        })
      } else {
        let display = (<div><p className='uk-text-break'>${error}</p><Fail/></div>)
        this.setState({
          done: true,
          wasError: true,
          display,
          badge: (
            <div className='uk-card-badge uk-label uk-label-danger'>Fail!</div>
          )
        })
      }
    })
  }

  render () {
    if (!this.state.done) {
      this.doOpts()
    }
    return (
      <div className='uk-card uk-card-default uk-box-shadow-xlarge'>
        <div className='uk-card-body'>
          {this.state.badge}
          <h3 className='uk-card-title'>DELETE</h3>
          <p>Can I Make An HTTP Delete Request?</p>
          {!this.state.done && <p>Working On It!</p>}
          {this.state.done && this.state.display}
        </div>
      </div>
    )
  }
}
