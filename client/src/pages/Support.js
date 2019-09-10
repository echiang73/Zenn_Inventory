import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Summary from "../components/Summary";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";

class Support extends Component {
  state = {
    items: [],
    title: "",
    author: "",
    synopsis: "",
    search: "",
    results: []
  };

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav>
        </Nav>
        <Col size="md-12 sm-12" className="noPadding">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h1>Support</h1>
              </Jumbotron>
              <div className="row">
                <Col size="md-12 sm-12">
                  <Summary>
                    <h3>Contact</h3>
                      <p>Email us directly at support@zenninventory.com or submit the form below:</p>
                        <section data-aos="fade-up" data-aos-offset="800" data-aos-easing="ease-in-sine" data-aos-anchor="#projects"
                          data-aos-anchor-placement="bottom-bottom">
                          <div style={{justifyContent: 'center', textAlign: 'left'}} class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                              <form id="contact-form" method="post" action="" role="form">
                                <div class="messages"></div>
                                <div class="controls">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <label for="form_name">Name</label>
                                        <input id="form_name" type="text" name="name" class="form-control"
                                          placeholder="Please enter your name" required="required"
                                          data-error="Name is required." />
                                        <div class="help-block with-errors"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <label for="form_email">Email</label>
                                        <input id="form_email" type="email" name="email" class="form-control"
                                          placeholder="Please enter your Email" required="required"
                                          data-error="Valid Email is required." />
                                        <div class="help-block with-errors"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <label for="form_message">Message</label>
                                        <textarea id="form_message" name="message" class="form-control"
                                          placeholder="Enter your message" rows="4" required
                                          data-error="Enter your message"></textarea>
                                        <div class="help-block with-errors"></div>
                                      </div>
                                    </div>
                                    <div style={{textAlign: 'right'}} class="col-md-12">
                                      <input type="submit" class="btn btn-primary btn-send" value="Submit" />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                  </Summary>

                </Col>
              </div>
            </Col>
          </div>
        </Col>
        {/* </Container > */}
      </div>
    );
  }
}

export default Support;
