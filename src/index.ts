// Add your scripts here
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons);

import './assets/scss/main.scss'

import { getUsers } from './user.app'

getUsers();