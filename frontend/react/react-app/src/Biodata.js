import React from 'react';
import { createRoot } from 'react-dom/client';

function Biodata() {

    const heading = React.createElement('h1', null, 'Biodata Perusahaan');
    // console.log(heading);
    const listItem1 = React.createElement('li', null, 'Nama Perusahaan: Dicoding');
    const listItem2 = React.createElement('li', null, 'Bidang: Education');
    const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas Discover Potential');
    const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
    const container = React.createElement('div', null, [heading, unorderedList]);

    const root = createRoot(document.getElementById('root'));
    return root.render(container);

}

export default Biodata;