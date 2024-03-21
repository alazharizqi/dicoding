import React from 'react';

function FirstElement() {
  const heading = React.createElement('h1', null, 'React');
  const strong = React.createElement('strong', null, 'best tool');
  const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
  return React.createElement('div', { className: 'container' }, [heading, paragraph]);
}

export default FirstElement;