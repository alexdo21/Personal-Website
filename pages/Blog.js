import React, {Component} from 'react';
import Layout from '../components/Layout'

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogposts: []
        }
    }
    
    
  
    render() {
        return (
            <Layout>
                <div className="blogContainer">
                    <div className="bLanding">
                    <div className="bCenterLanding">
                        <h1>Blog</h1>
                    </div>
                    <div className="container">

                    </div>
                    </div>
                </div>
                <style>{`
                    .bLanding {
                        height: 100vh;
                        position: relative;
                    }
                    
                    .bCenterLanding {
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