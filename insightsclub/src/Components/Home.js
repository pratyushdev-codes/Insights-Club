import React from 'react';

function Home() {
    return (
      <div style={{ position: 'relative' }}>
        <img src="./images/Home.jpg" style={{ width: '100%', height: '100%' }} alt="Background" />
        <div
          id="cardCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{
            position: 'absolute',
            top: '70%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <div className="card" style={{ borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img src="./images/i.png" className="card-img-top" alt="Card 1" />
                    <div className="card-body">
                      <h5 className="card-title">Insights Club Newsletter</h5>
  
                      <p className="card-text">Special Edition News letter!</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img src="./images/2.png" className="card-img-top" alt="Card 2" />
                    <div className="card-body">
                      <h5 className="card-title">Sampurna</h5>
                      <p className="card-text">Technical Event </p>
                      <a href="#" className="btn btn-primary">Register Here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="card" style={{ borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img src="./images/3.png" className="card-img-top" alt="Card 3" />
                    <div className="card-body">
                      <h5 className="card-title">Card 3</h5>
                      <p className="card-text">This is the description of Card 3.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img src="./images/4.png" className="card-img-top" alt="Card 4" />
                    <div className="card-body">
                      <h5 className="card-title">Card 4</h5>
                      <p className="card-text">This is the description of Card 4.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    );
  }
  
  export default Home;
