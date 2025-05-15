import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RouterLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ac18d1',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? '#ac18d1' : 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Notícias',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} size={24} color={focused ? '#ac18d1' : 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="donation" 
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={24} color={focused ? '#ac18d1' : 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={24} color={focused ? '#ac18d1' : 'black'} />
          ),
        }}
      />
    </Tabs>
  );
}