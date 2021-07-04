import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './src/Screens/Dashboard';
import VirtualShop from './src/Screens/VirtualShop';
import Coupons from './src/Screens/Coupons';
import NewCustomer from './src/Screens/NewCustomer';
import NewCustomer2 from './src/Screens/NewCustomer2';
import Payment from './src/Screens/Payment';
import CustomSidebarMenu from './src/Component/CustomSidebarMenu'


import BOUNCED from './src/Screens/DropdownScreens/BOUNCED';
import DELIVERED from './src/Screens/DropdownScreens/DELIVERED';
import OPEN from './src/Screens/DropdownScreens/OPEN';
import SENT from './src/Screens/DropdownScreens/SENT';
import UNDELIVERED from './src/Screens/DropdownScreens/UNDELIVERED';
import FAILED from './src/Screens/DropdownScreens/FAILED';
import Bizbud from './src/Screens/Bizbud';
import NewJob from './src/Screens/NewJob';
import NewEvent from './src/Screens/newEvent';
// import login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import AppLoading from 'expo-app-loading';
// import { useFonts, Montserrat } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import Login from './src/Screens/Login';
import PhoneVerification from './src/Screens/PhoneVerification';
import OrderConfirmation from './src/Screens/OrderConfirmation';
import Employees from './src/Screens/Employees';
import Chat from './src/Screens/Chat';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerStack({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Bizbud"
        options={{ drawerLabel: 'First page Option' }}
        component={Bizbud}
      />
      {/* <Drawer.Screen
              name="SecondPage"
              options={{ drawerLabel: 'Second page Option' }}
              component={secondScreenStack}
            /> */}
    </Drawer.Navigator>
  )
}

function App() {
  let [fontsLoaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Thin.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Thin.ttf'),
    Quicksand: require('./assets/fonts/Quicksand-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{ headerShown: false }} />


          <Stack.Screen name="Bizbud" component={DrawerStack} options={{ headerShown: false }} />

          <Stack.Screen name="Employees" component={Employees} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />

          <Stack.Screen name="BOUNCED" component={BOUNCED} options={{ headerShown: false }} />
          <Stack.Screen name="SENT" component={SENT} options={{ headerShown: false }} />
          <Stack.Screen name="OPEN" component={OPEN} options={{ headerShown: false }} />
          <Stack.Screen name="DELIVERED" component={DELIVERED} options={{ headerShown: false }} />
          <Stack.Screen name="UNDELIVERED" component={UNDELIVERED} options={{ headerShown: false }} />
          <Stack.Screen name="FAILED" component={FAILED} options={{ headerShown: false }} />

          <Stack.Screen name="VirtualShop" component={VirtualShop} options={{ headerShown: false }} />
          <Stack.Screen name="Coupons" component={Coupons} options={{ headerShown: false }} />
          <Stack.Screen name="NewCustomer" component={NewCustomer} options={{ headerShown: false }} />
          <Stack.Screen name="NewCustomer2" component={NewCustomer2} options={{ headerShown: false }} />
          <Stack.Screen name="NewJob" component={NewJob} options={{ headerShown: false }} />
          <Stack.Screen name="NewEvent" component={NewEvent} options={{ headerShown: false }} />
          <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{ headerShown: false }} />

          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;