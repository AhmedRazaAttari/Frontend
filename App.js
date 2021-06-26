import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/Screens/Dashboard';
import VirtualShop from './src/Screens/VirtualShop';
import Coupons from './src/Screens/Coupons';
import NewCustomer from './src/Screens/NewCustomer';
import NewCustomer2 from './src/Screens/NewCustomer2';
import Payment from './src/Screens/Payment';


import BOUNCED from './src/Screens/DropdownScreens/BOUNCED';
import DELIVERED from './src/Screens/DropdownScreens/DELIVERED';
import OPEN from './src/Screens/DropdownScreens/OPEN';
import SENT from './src/Screens/DropdownScreens/SENT';
import UNDELIVERED from './src/Screens/DropdownScreens/UNDELIVERED';
import FAILED from './src/Screens/DropdownScreens/FAILED';
import Bizbud from './src/Screens/Bizbud';
import NewJob from './src/Screens/NewJob';
import NewEvent from './src/Screens/newEvent';
import login from './src/Screens/Login';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bizbud" component={Bizbud} options={{ headerShown: false }} />
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

        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;