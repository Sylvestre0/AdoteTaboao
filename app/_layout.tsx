import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ac18d1',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Configurações',
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
