import React from 'react';

export default class Splash extends React.Component {
  renderHeroArticle() {
    return (
      <div className="splash-hero-container">
        <article className="splash-hero-pitch max-width">
          <h1>{"Welcome to <RecruiterRouter/>"}</h1>
          <h2>We put the closing tag on your job search with beautiful, easy to build portfolio websites.</h2>
          <p>RecruiterRouter allows you to manage custom portfolios and target them to different job applications, just like you would tailor a cover letter.</p>
        </article>
      </div>
    );
  }

  renderAbout() {
    return (
      <section className="splash-about-module">
        <div className="max-width splash-about-inner">
          <h1>{"<RecruiterRouter/> allows you to route job recruiters to customized portfolios and track their engagement."}</h1>
          <div className="fixed-width flex-content splash-about-container">
            <div className="sequence-box col-1-3">
              <div className="sequence-box-headers">
                <h2>1. Craft Targeted Portfolios.</h2>
              </div>
              <i className="fa fa-pencil-square-o fa-4x" aria-hidden="true"></i>
              <p>Create differentiated portfolios that focus on different target job roles by managing content with portfolio tags.</p>
            </div>
            <div className="sequence-box col-1-3">
              <div className="sequence-box-headers">
                <h2>2. Embed Custom Links in your Resume.</h2>
              </div>
              <i className="fa fa-link fa-4x" aria-hidden="true"></i>
              <p>Distribute portfolio links in your job application to target companies. Recruiters will see content tailored for your application.</p>
            </div>
            <div className="sequence-box col-1-3">
              <div className="sequence-box-headers">
                <h2>3. Track Success with Analytics.</h2>
              </div>
              <i className="fa fa-line-chart fa-4x" aria-hidden="true"></i>
              <p>Check analytics to view engagement from different companies and improve your application strategies.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className="splash-content">
        {this.renderHeroArticle()}
        {this.renderAbout()}
      </div>
    );
  }
}
