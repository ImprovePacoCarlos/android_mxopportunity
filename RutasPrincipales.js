import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import HomePage from './components/Layouts/HomePage';
import DetailPage from './components/Layouts/DetailPage';
import DrawerNavigation from './components/drawer/DrawerNavigation';


const RutasPrincipales = createDrawerNavigator({
  Home: {
    screen: HomePage,
  },

  Detalle: {
    screen: DetailPage,
    navigationOptions: () => ({
      header: null,
    }),
  },

},

{
  contentComponent: DrawerNavigation,
  contentOptions: {
    activeTintColor: '#393251',
    activeBackgroundColor: '#393251',

    itemsContainerStyle: {
      opacity: 1,
      borderColor: '#1d2323',
    },
    labelStyle: {
      opacity: 1,
      borderColor: 'rgb(57, 50, 81)',
      letterSpacing: 2,
      fontWeight: '300',
      fontSize: 14,
      fontFamily: 'Helvetica',
    },
  },
  drawerWidth: Dimensions.get('window').width - 180,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRote: 'DrawerToggle',
});


export { RutasPrincipales };
