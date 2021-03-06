import React from 'react';
import Form from '../components/Form';
import StatsPanel from '../components/StatsPanel';

const HomePage = props => {
    return (
      <div className="page-root">
        <header>
          <h1>Light Calculator</h1>
        </header>
				<main>
					<Form/>
				</main>
				<StatsPanel/>
      </div>
    );
}

export default HomePage;
