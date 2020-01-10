import React from "react";
import logo from "./logo.svg";
import "./App.css";
import transacorop from "./images/transcorp-1.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="nav-scroller  mb-2 p-5">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">
              HOME
            </a>
            <a className="p-2 text-muted" href="#">
              ABOUT US
            </a>
            <a className="p-2 text-muted" href="#">
              OUR ROOMS
            </a>
            <a className="text-muted" href="#">
              <img src={transacorop} alt="" />
            </a>
            <a className="p-2 text-muted" href="#">
              RESERVATION
            </a>
            <a className="p-2 text-muted" href="#">
              BLOG
            </a>
            <a className="p-2 text-muted" href="#">
              CONTACT
            </a>
          </nav>
        </div>
      </div>

      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark dkmkds">
        <div className="col-md-6 px-0 easy">
          <h1 className="display-4 font-italic"></h1>
          <p className="lead my-3"></p>
          <p className="lead mb-0">
            <a href="#" className="text-white font-weight-bold"></a>
          </p>
        </div>
      </div>

      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm jo-soapy">


        <ul class="list-group esdslkkdm list-group-horizontal-md">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item xoxo">Cras justo odio</li>
        </ul>
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="blog-main">
            <h1 className="pb-4 mb-4">
           <span className="text-center d-block"> A best place to enjoy</span> <br/> <span className="d-block text-center">your life</span>
            </h1>

            <div className="blog-post">
              <p className="blog-post-meta">
              Transcorp Hilton Hotel is situated in the heart of Nigeria’s Federal Capital Territory, a 40-minute drive from the Nnamdi Azikiwe International Airport in Abuja. It is a 670–room, 5-star hotel that provides luxury accommodation, exotic cuisine, and fully equipped meeting rooms and to business travellers and tourists from all over the world
              </p>

            </div>


          </div>

        </div>
      </main>

      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm jo-soapy-2">

      </div>

      <section className="zoc">
        <p>
          Blog template built for{" "}
          <a href="https://twitter.com/mdo">@Hakeem</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </section>

      

      <footer className="blog-footer">
        <p>
     
          <a href="">@Hakeem Balogun</a>.
        </p>
        <p>
   
        </p>
      </footer>
    </>
  );
}

export default App;
