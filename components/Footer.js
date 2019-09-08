import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';


class Footer extends Component {
  render() {
    return (
        <div className="footerContainer">

            <p>Check out my social media</p>
            <ul>
                <li className="inline-link"><SocialIcon url="https://www.linkedin.com/in/alex-do-30021113b/"></SocialIcon></li>
                <li className="inline-link"><SocialIcon url="https://github.com/alexdo21"></SocialIcon></li>
            </ul>
            <p>Connect with me at ado@wisc.edu</p>
            <style jsx>{`
                .footerText {
                    color: white;
                  }
                  
                  .inline-link {
                    display: inline-block!important;
                    color: white;
                  }
                  
                  .footerContainer{
                    color: white;
                    position: relative;
                    top: 0; right: 0; bottom: 0; left: 0;
                    border: 15px solid black;
                    background-color: black;
                    justify-content: center;
                  }
            `}</style>
        </div>
        
    
    );
  }
}


export default Footer;
