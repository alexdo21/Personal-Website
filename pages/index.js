import React, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

//import Me from '../static/images/IMG_0709.jpg'

const client_id = "Iv1.2c365fafec9c1f5e"
const client_secret = "f6a828421d0ff5882433ca1e2f4c69f5036884a7"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }
  
  static async getInitialProps() {
    const res = await fetch(`https://api.github.com/users/alexdo21/repos?client_id=${client_id}&client_secret=${client_secret}`);
    const repos = await res.json();
    const data = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      link: repo.html_url,
      des: repo.description
    }))

    data.sort()

    return {data}
  }

  componentWillMount() {
    this.setState({repos: this.props.data})
  }
  render() {
    return (
        <Layout>
          <div>
            <div className="container about">
              <h1>Hi, my name is Alex Do!</h1>
              <p>I'm a Senior at UW-Madison studying Electrical Engineering and Computer Sciences. I'm an engineer at heart 
                seeking to expand and grow in tech professionally.</p>
            </div>
            <div className="container projects">
              <h3>Here are some of the projects I've been working on.</h3>
              <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.repos.map(repo => 
                    <tr key={repo.id}>
                      <td><a href={repo.link}>{repo.name}</a></td>
                      <td>{repo.des}</td>
                    </tr>
                  )}
                </tbody>
                </table>
            </div>
            <div className="container skills">
              <h3>Skills</h3>
              <div className="container">
                <div className="row">
                  <div className="col"><h5>Programming</h5></div>
                  <div className="col">Python</div>
                  <div className="col">Java</div>
                  <div className="col">C</div>
                  <div className="col">JavaScript</div>
                  <div className="col">Unix/Linux</div>
                  <div className="col">MatLab</div>
                </div>

              </div>
            </div>
            <style jsx>{`
                .about {
                    padding-top: 120px;
                    padding-bottom: 60px;
                    border: 50px;
                  }
                
                .projects {
                  padding-bottom: 60px;
                }
                  
                  // .centerLanding {
                  //   color: white;
                  //   position: absolute;
                  //   top: 50%;
                  //   left: 50%;
                  //   transform: translateX(-50%) translateY(-50%);
                  
                  // }
                  
                  // .aboutMe {
                  //   position: relative;
                  //   margin-top: 30px;
                  //   margin-bottom: 30px;
                  // }
                  
                  // .portrait {
                  //   background-image: url(../static/images/IMG_0709.jpg);
                  //   background-size: cover;
                  //   background-position: center center;
                  //   background-repeat: no-repeat;
                  //   border-radius: 50%;
                  //   height: 325px;
                  //   width: 75%;
                  
                  // }
                  
                  // .row {
                  //   padding: 50px;
                  // }
                  
                  // .hello .col #js {
                  //   margin: 0;
                  //   margin-right: 0;
                  //   background-color: yellow;
                  // }
                  
                  // .js {
                  //   background-color: yellow;
                  // }
            `}</style>
          </div>
        </Layout>
    );
  }
}

export default Home;
