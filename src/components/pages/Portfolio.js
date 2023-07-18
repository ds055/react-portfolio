import React from 'react';
import Project from '../Project'

// Project images
import jsImg from '../../images/js-quiz.png'
import coolectibles from '../../images/coolectibles.png'
import marvelDex from '../../images/marvel-dex.png'
import passwordGen from '../../images/password-generator.png'
import pwaTextEditor from '../../images/pwa-text-editor.png'
import weather from '../../images/weather-dashboard.png'

// Arr containing each project's info: image location, url of repo, name, alt for image, 
// live url, and stack used
const projectArr = [
  { id: 0,
    imgLoc: jsImg,
    projectUrl: 'https://github.com/ds055/js-quiz',
    projectName: 'JavaScript Quiz',
    alt: 'Image of JavaScript Quiz: a man in a pub--an intro before a fantasy quiz',
    deployedUrl: 'https://ds055.github.io/js-quiz/',
    stack: 'JavaScript & HTML'
  },
  { id: 1,
    imgLoc: coolectibles,
    projectUrl: 'https://github.com/ds055/collectible-database',
    projectName: 'Coolectibles',
    alt: 'Image of Coolectibles website: a site to keep track of ones collectibles',
    deployedUrl: 'https://blooming-retreat-76948.herokuapp.com/',
    stack: 'Sequelize, Express, Handlebars, Node'
  },
  { id: 2,
    imgLoc: marvelDex,
    projectUrl: 'https://github.com/ds055/marvel-dex',
    projectName: 'Marvel-Dex',
    alt: 'Image of Marvel-Dex Project: Magneto is in the background with description',
    deployedUrl: 'https://dylanstormjohnson.github.io/marvel-dex/',
    stack: 'JavaScript & HTML'
  },
  { id: 5,
    imgLoc: weather,
    projectUrl: 'https://github.com/ds055/weather-dashboard',
    projectName: 'Weather Dashboard',
    alt: 'Image of a website dashboard showing the forecast for 5 days',
    deployedUrl: 'https://ds055.github.io/weather-dashboard/',
    stack: 'JavaScript & HTML'
  },
  { id: 4,
    imgLoc: pwaTextEditor,
    projectUrl: 'https://github.com/ds055/pwa-text-editor',
    projectName: 'PWA Text Editor',
    alt: 'Image of a simple PWA Text Editor--like the command line interface',
    deployedUrl: 'https://afternoon-river-10125-70400daa5ffb.herokuapp.com/',
    stack: 'IndexDB, Express, Webpack, Node'
  },
  { id: 3,
    imgLoc: passwordGen,
    projectUrl: 'https://github.com/ds055/password_generator',
    projectName: 'Password Generator',
    alt: 'Image of a site that generates a random password',
    deployedUrl: 'https://ds055.github.io/password_generator/',
    stack: 'JavaScript & HTML'
  },
]

// Use project component to populate portfolio page
export default function Portfolio() {
  return (
    <div>
      <Project projects={projectArr}/>
    </div>
  );
}

