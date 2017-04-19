/*
 * Created by Thomas Hartmann
 * This is the applications routing configuration.
 * It takes all the main components and renders them
 * at the specified path.
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// components TODO: consider adding a top level componentExporter
import MasterLayout from '../components/masterLayout/MasterLayout'
import Home from '../components/home/HomeMap'
import OmVisitt from '../components/omVisitt/OmVisitt'
import HjelpOgKontakt from '../components/hjelpOgKontakt/HjelpOgKontakt'
import Boligvelger from '../components/boligvelger/Boligvelger'
import BoligAnnonse from '../components/boligAnnonse/components/BoligAnnonse'
import Error404 from '../components/error404/Error404'

const history = createHistory()

export default () => (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <MasterLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/om-visitt' component={OmVisitt} />
        <Route path='/hjelp-og-kontakt' component={HjelpOgKontakt} />
        <Route path='/boligvelger' component={Boligvelger} />
        <Route path='/annonse/:id' component={BoligAnnonse} />
        <Route path='*' component={Error404} />
      </Switch>
    </MasterLayout>
  </Router>
)
