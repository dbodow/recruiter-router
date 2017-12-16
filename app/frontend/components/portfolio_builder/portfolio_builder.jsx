import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioEditingTools from './portfolio_editing_tools';
import PortfolioBuilderContent from './portfolio_builder_content';

export default class PortfolioBuilder extends React.Component {
  render() {
    return (
      <main className="main flex-start">
        <aside className="editing-tools-container">
          <PortfolioEditingTools/>
        </aside>
        <div className="editing-tools-flex-buffer">{' '}</div>
        <article className="portfolio-builder-container">
          <PortfolioBuilderContent />
        </article>
      </main>
    );
  }
}
