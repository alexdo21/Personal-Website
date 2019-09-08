import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Repos from '../components/Repos'

const client_id = "Iv1.2c365fafec9c1f5e"
const client_secret = "f6a828421d0ff5882433ca1e2f4c69f5036884a7 "


class Software extends Component {
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

    return {data}
  }

  componentWillMount() {
    this.setState({repos: this.props.data})
  }
  
  render() {
    return (
      <Layout>
        
        <div className="landing">
          <div className="container-fluid title">
            <h1>Software</h1>
          </div>
          <div className="container centerLanding">
            <div className="card-deck">
              {this.state.repos.map(repo => 
                <div className="card" key={repo.id}>
                  <div className="card-body">
                    <h5 className="card-title"><a href={repo.link}>{repo.name}</a></h5>
                    <p className="card-text">{repo.des}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        
        <style jsx>{`
          .card {
            width: 18rem;
          }
          .title {
            padding: 100px;
          }
          .landing {
            height: 100vh;
            position: relative;
          }
          
          .centerLanding {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
         `}</style>
      </Layout> 
    );
  }
}


export default Software;
