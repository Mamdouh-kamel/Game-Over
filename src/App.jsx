import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import All from './Components/All/All';
import Action from './Components/CaAction/Action';
import ActionRbj from './Components/CaActionRbj/ActionRbj';
import Battle from './Components/CaBattle/Battle';
import Fantasy from './Components/CaFantasy/Fantasy';
import Flight from './Components/CaFlight/Flight';
import OpenWorld from './Components/CaOpenWorld/OpenWorld';
import Racing from './Components/CaRicing/Ricing';
import Shooter from './Components/CaShooter/Shooter';
import Social from './Components/CaSocial/Social';
import Sports from './Components/CaSports/Sports';
import Zombie from './Components/CaZombie/Zombie';
import Home from './Components/Home/Home';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import NotFound from './Components/NotFound/NotFound';
import Platforms from './Components/Platforms/Platforms';
import PlatformsB from './Components/PlatformsBrowser/PlatformsB';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import SortAlphapetical from './Components/SortAlphapetical/SortAlphapetical';
import SortPopularity from './Components/SortPopularity/SortPopularity';
import SortReleaseDate from './Components/SortReleaseDate/SortReleaseDate';
import SortRelevance from './Components/SortRelevance/SortRelevance';
import AuthLayout from './Layouts/AuthLayout';
import SystemLayout from './Layouts/SystemLayout';

function App() {

let routes = createBrowserRouter([
  {
    path: '/', element: <SystemLayout />, children: [
      { index: true, element: <ProtectedRoutes ><Home /></ProtectedRoutes>},
      { path: 'Game-Over', element: <ProtectedRoutes ><Home /></ProtectedRoutes> },
      { path: 'all', element: <ProtectedRoutes ><All /></ProtectedRoutes> },
      { path: 'platforms/pc', element: <ProtectedRoutes ><Platforms /></ProtectedRoutes> },
      { path: 'platforms/browser', element: <ProtectedRoutes ><PlatformsB /></ProtectedRoutes> },
      { path: 'sortby/alphapet', element: <ProtectedRoutes ><SortAlphapetical /></ProtectedRoutes> },
      { path: 'sortby/releaseData', element: <ProtectedRoutes ><SortReleaseDate /></ProtectedRoutes> },
      { path: 'sortby/popularity', element: <ProtectedRoutes ><SortPopularity /></ProtectedRoutes> },
      { path: 'sortby/relevance', element: <ProtectedRoutes ><SortRelevance /></ProtectedRoutes> },
      { path: 'categories/racing', element: <ProtectedRoutes ><Racing /></ProtectedRoutes> },
      { path: 'categories/action', element: <ProtectedRoutes ><Action /></ProtectedRoutes> },
      { path: 'categories/action-rpg', element: <ProtectedRoutes ><ActionRbj /></ProtectedRoutes> },
      { path: 'categories/battle-royale', element: <ProtectedRoutes ><Battle /></ProtectedRoutes> },
      { path: 'categories/fantasy', element: <ProtectedRoutes ><Fantasy /></ProtectedRoutes> },
      { path: 'categories/flight', element: <ProtectedRoutes ><Flight /></ProtectedRoutes> },
      { path: 'categories/open-world', element: <ProtectedRoutes ><OpenWorld /></ProtectedRoutes> },
      { path: 'categories/shooter', element: <ProtectedRoutes ><Shooter /></ProtectedRoutes> },
      { path: 'categories/social', element: <ProtectedRoutes ><Social /></ProtectedRoutes> },
      { path: 'categories/sports', element: <ProtectedRoutes ><Sports /></ProtectedRoutes> },
      { path: 'categories/zombie', element: <ProtectedRoutes ><Zombie /></ProtectedRoutes> },
      { path: 'details/:id', element: <ProtectedRoutes ><ItemDetails /></ProtectedRoutes> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/', element: <AuthLayout />, children: [
      { index: true, element: <Signin /> },
      { path: 'signin', element: <Signin /> },
      { path: 'signup', element: <Signup /> }
    ]
  }
])




  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
