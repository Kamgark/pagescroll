import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'

class App extends Component {
  componentDidMount(){
    $("#button").click(function() {
      $('html, body').animate({
          scrollTop: $("#div-4").offset().top
      }, 2000);
  });
  $("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#div-1").offset().top
    }, 2000);
});
  }
  render() {
    return (
      <div className="wrapper">
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

    </nav>
    <div id="content">
      <div className="container">
        <div className="row margins" id="div-1">
          <div className="col-sm-12">
            <h1>Lorem Ipsum</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue a dui ullamcorper pharetra ut nec ipsum. Suspendisse id velit mattis, cursus metus ac, tempor ante. Praesent diam leo, ultrices aliquam tincidunt et, ultricies a eros. Ut eget finibus justo. Ut auctor mauris pretium cursus vehicula. Quisque ultrices ac neque vitae vehicula. Phasellus augue libero, ultrices vitae gravida eu, luctus quis elit. Duis vel dolor diam. Nullam fringilla, est at tempor facilisis, sapien augue consectetur lectus, a auctor odio erat at justo. Duis quis nisl cursus, eleifend massa non, efficitur sem. Phasellus in venenatis nibh, eu posuere magna. Ut molestie arcu eu ante tincidunt, non tempus dolor venenatis. Nullam nibh lorem, eleifend id nisi a, auctor placerat dui. Cras non sapien lectus. Proin molestie tempor nunc et sollicitudin. Vestibulum imperdiet sapien in ultricies consequat.
            </p>
            <button type="button" className="skew-button" id="button"><span>Scroll To Bottom</span></button>
          </div>
        </div>
        <div className="row margins" id="div-2">
          <div className="col-sm-12">
            <h1>Lorem Ipsum</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue a dui ullamcorper pharetra ut nec ipsum. Suspendisse id velit mattis, cursus metus ac, tempor ante. Praesent diam leo, ultrices aliquam tincidunt et, ultricies a eros. Ut eget finibus justo. Ut auctor mauris pretium cursus vehicula. Quisque ultrices ac neque vitae vehicula. Phasellus augue libero, ultrices vitae gravida eu, luctus quis elit. Duis vel dolor diam. Nullam fringilla, est at tempor facilisis, sapien augue consectetur lectus, a auctor odio erat at justo. Duis quis nisl cursus, eleifend massa non, efficitur sem. Phasellus in venenatis nibh, eu posuere magna. Ut molestie arcu eu ante tincidunt, non tempus dolor venenatis. Nullam nibh lorem, eleifend id nisi a, auctor placerat dui. Cras non sapien lectus. Proin molestie tempor nunc et sollicitudin. Vestibulum imperdiet sapien in ultricies consequat.
            </p>
          </div>
        </div>
        <div className="row margins" id="div-3">
          <div className="col-sm-12">
            <h1>Lorem Ipsum</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue a dui ullamcorper pharetra ut nec ipsum. Suspendisse id velit mattis, cursus metus ac, tempor ante. Praesent diam leo, ultrices aliquam tincidunt et, ultricies a eros. Ut eget finibus justo. Ut auctor mauris pretium cursus vehicula. Quisque ultrices ac neque vitae vehicula. Phasellus augue libero, ultrices vitae gravida eu, luctus quis elit. Duis vel dolor diam. Nullam fringilla, est at tempor facilisis, sapien augue consectetur lectus, a auctor odio erat at justo. Duis quis nisl cursus, eleifend massa non, efficitur sem. Phasellus in venenatis nibh, eu posuere magna. Ut molestie arcu eu ante tincidunt, non tempus dolor venenatis. Nullam nibh lorem, eleifend id nisi a, auctor placerat dui. Cras non sapien lectus. Proin molestie tempor nunc et sollicitudin. Vestibulum imperdiet sapien in ultricies consequat.
            </p>
          </div>
        </div>
        <div className="row margins" id="div-4">
          <div className="col-sm-12">
            <h1>Lorem Ipsum</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue a dui ullamcorper pharetra ut nec ipsum. Suspendisse id velit mattis, cursus metus ac, tempor ante. Praesent diam leo, ultrices aliquam tincidunt et, ultricies a eros. Ut eget finibus justo. Ut auctor mauris pretium cursus vehicula. Quisque ultrices ac neque vitae vehicula. Phasellus augue libero, ultrices vitae gravida eu, luctus quis elit. Duis vel dolor diam. Nullam fringilla, est at tempor facilisis, sapien augue consectetur lectus, a auctor odio erat at justo. Duis quis nisl cursus, eleifend massa non, efficitur sem. Phasellus in venenatis nibh, eu posuere magna. Ut molestie arcu eu ante tincidunt, non tempus dolor venenatis. Nullam nibh lorem, eleifend id nisi a, auctor placerat dui. Cras non sapien lectus. Proin molestie tempor nunc et sollicitudin. Vestibulum imperdiet sapien in ultricies consequat.
            </p>
            <button type="button" className="skew-button" id="button1"><span>Scroll To Top</span></button>
          </div>
        </div>
      </div>
    </div>
</div> 
    );
  }
}

export default App;
