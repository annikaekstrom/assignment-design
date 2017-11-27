import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

          <div className="nav">
            <ul>
              <li><a href="#top">Creativty</a></li>
              <li><a href="#top">Entrepreneurship</a></li>
              <li><a href="#top">Self</a></li>
              <li><a href="#top">Culture</a></li>
              <li><a href="#top">Digital Design</a></li>
              <li><a href="#top">Popular on Medium</a></li>
              <li><a href="top">Politics</a></li>
              <li><a href="top">More</a></li>
              <li><button>Get started</button></li>
            </ul>
          </div>
      <div className="content">
        <header>
          <div className="text">
              <h1>Interesting ideas that set your mind in motion</h1>
              <p>Hear directly from the pople who know it best. From tech to politics to creativity and more - whateveryour interest, weve got you covered.</p>
              <button id="getstarted">Get started</button>
              <button id="learnmore">Learn more</button>
            </div>
          <div className="bild">
            <img src="/images/medium-image.png"/>
          </div>
        </header>

          <div className="boxar">
            <div className="box 1">
              <div className="boxbild">
                <img src="/images/medium-image-puff-1.jpeg"/>
              </div>
              <div className="bildtext">
                <h4>The Boy Who Tamed the Sea</h4>
                <p className="textruta">At 5.30 am, on any morning I can handle it, Ill slip out of the dark mouth of my covers and creap through the silver lig...</p>
                <div className="writer">
                  <div classname="picture">
                    <img src="/images/writer-1.png"/>
                  </div>
                  <div className="name">
                  Carl More<br/>
                  Oct
                  </div>
                </div>
              </div>
            </div>

          <div className="box 2">
              <div className="boxbild">
                <img src="/images/medium-image-puff-2.png"/>
              </div>
              <div className="bildtext">
                <h4>The Role of Human Emotions<br/>
                in the Future of Transport</h4>
                <p className="textruta">Getting from A to B is about to feel very different</p>
                <div className="writer">
                  <div classname="picture">
                    <img src="/images/writer-2.jpeg"/>
                  </div>
                  <div className="name">
                  <strong>Ben Bland</strong><br/>
                  Oct 27 8 min read
                  </div>
                </div>
              </div>
            </div>


            <div className="box 3">
              <div className="boxbild">
                <img src="/images/medium-image-puff-3.png"/>
            </div>
            <div className="bildtext">
              <h4>The March of the Loosers</h4>
              <p className="textruta">Around the world, the victims are becoming the abusers, and Donald Trump is their king</p>
              <div className="writer">
                <div classname="picture">
                  <img src="/images/writer-3.jpeg"/>
                </div>
                <div className="name">
                <strong>Henry Wismayer</strong><br/>
                Nov 1 7 min read
                </div>
              </div>
            </div>
          </div>

            <div className="box 4">
              <div className="boxbild">
                <img src="/images/medium-image-puff-4.jpeg"/>
              </div>
              <div className="bildtext">
                <h4>The Burning Season</h4>
                <p className="textruta">You cannot save everything when the fires come to Northern California</p>
                <div className="writer">
                  <div classname="picture">
                    <img src="/images/writer-4.jpeg"/>
                  </div>
                  <div className="name">
                    <strong>Lindsey Smith</strong><br/>
                      Nov 9 31 min read
                  </div>
              </div>
            </div></div>
          </div>

        </div>
      </div>

    )
  }

}

export default App
