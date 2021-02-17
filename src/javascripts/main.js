// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';

import '../styles/main.scss';
import printBody from './components/bodyHtml';
import showForm from './components/showForm';
import domEvents from './components/domEvents';

const init = () => {
  printBody();
  domEvents();
  showForm();
};

init();
