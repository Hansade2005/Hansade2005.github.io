import React, { useState, useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import CartScreen from './screens/CartScreen';
import ContactScreen from './screens/ContactScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import IroningServiceScreen from './screens/IroningServiceScreen';
import LoginScreen from './screens/LoginScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentScreen from './screens/PaymentScreen';
import PickUpScreen from './screens/PickUpScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServicesScreen from './screens/ServicesScreen';
import TopupScreen from './screens/TopupScreen';
import WalkthroughScreen from './screens/WalkthroughScreen';
import WalletScreen from './screens/WalletScreen';
import ItemScreen from './screens/itemScreen'; 
import StandardService from './screens/StandardServiceScreen'; // Add this line at the top of your file
import MediumService from './screens/MediumServiceScreen'; // Add this line at the top of your file
import PremiumService from './screens/PremiumServiceScreen'; // Add this line at the top of your file
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const WalkthroughStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Laundry-Box" component={ItemScreen} options={{ headerShown: true }} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: true }} />
      <Stack.Screen name="PickUp" component={PickUpScreen} options={{ headerShown: true }} />
      <Stack.Screen name="IroningService" component={IroningServiceScreen} options={{ headerShown: true }} />

      <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Topup" component={TopupScreen} options={{ headerShown: true }} />
   
      <Stack.Screen name="Wallet" component={WalletScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Standard" component={StandardService} options={{ headerShown: true }} />
      <Stack.Screen name="Medium" component={MediumService} options={{ headerShown: true }} />
      <Stack.Screen name="Premium" component={PremiumService} options={{ headerShown: true }} />
 </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#088F8F",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Services"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: true }} />
            {/* Add more screens here */}
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};
const MainNavigation = () => {
 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <>
          <Stack.Screen name="Walkthrough" component={WalkthroughStack} />
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={MainStack} options={{ gestureEnabled: false }} />
        </>
      
    </Stack.Navigator>
  );
};

export default MainNavigation;