import React, {Component} from 'react'; 
import Layout from '../components/Layout'

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="container contactContainer">
            <h4>Let's connect!</h4>
            <h5>Leave me an email at ado@wisc.edu</h5>
            {/* <div className="container topContainer">
              <div className="form">
                <div className="form-group" controlid="formBasicName">
                  <label>Name</label>
                  <input className="form-control" type="text" placeholder="Enter name"/>
                </div>
                <div className="form-group" controlId="formBasicEmail">
                  <label>Email Address</label>
                  <input className="form-control" type="emaul" placeholder="name@example.com"/>
                </div>
                <div className="form-group"p controlid="formBasicSubject">
                  <label>Subject</label>
                  <input className="form-control" type="name" placeholder="Enter subject"/>
                </div>
                <div className="form-group" controlid="formBasicMessage">
                  <label>Message</label>
                  <input className="form-control" as="textarea" placeholder="..."/>
                </div>
              </div>
            </div> */}
        </div>
        <style jsx>{`
          .contactContainer {
            height: 90vh;
            padding: 100px;
          }
          
          .topContainer {
            max-width: 500px;
          }
          
        `}</style>
      </Layout>
    );
  }
}
