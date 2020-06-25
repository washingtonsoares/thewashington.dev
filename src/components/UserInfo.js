import React, { Component } from 'react'
import me from '../../content/images/profile.jpeg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={me} alt="Washington Soares" />
            </div>
            <div>
              <p>
                I’m Washington Soares. I document everything I learn and help thousands of people start
                coding careers.{' '}
                <strong>
                  My site has no ads, sponsors, or bullshit. If you enjoy my content, please
                  consider supporting what I do.
                </strong>
              </p>

              <div className="flex">
                <a
                  className="patreon-button"
                  // eslint-disable-next-line no-script-url
                  href="javascript: void(0)"
                  rel="noopener noreferrer"
                  style={{ height: '50px' }}
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
