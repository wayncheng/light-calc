import React from 'react';
import Form from '../components/Form';

const HomePage = props => {
    return (
      <div className="page-root">
        <header>
          <h1>Light Calculator</h1>
        </header>
		<main>
			<Form/>
		</main>
      </div>
    );
}

export default HomePage;
