import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import SubScreen from '../screens/Subscriptions';
import AboutScreen from '../screens/About';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#9aacb4',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#339dff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
      backBehavior='initialRoute'
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          title: 'RSS Notifier',
          drawerItemStyle: {height: 0}
        }}
      />
      <Drawer.Screen 
        name="Subscriptions" 
        component={SubScreen}
        options={{
          drawerLabel: 'View Subscriptions',
          title: 'Subscriptions',
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen}
        options={{
          drawerLabel: 'About',
          title: 'About',
        }}
      />
    </Drawer.Navigator>
  )
}