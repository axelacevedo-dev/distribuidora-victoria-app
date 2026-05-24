
import { CatalogIcon, DesignerIcon, HomeIcon, ProfileIcon } from '@/components/icons/Icons';
import { Colors } from '@/constants/colors';
import { Tabs } from 'expo-router';


export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.tabInactive,
                tabBarStyle: {
                    backgroundColor: Colors.background
                }
            }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <HomeIcon color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="catalog"
                options={{
                    title: "Catalogo",
                    tabBarIcon: ({ color }) => (
                        <CatalogIcon color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='designer'
                options={{
                    title: "Diseñar",
                    tabBarIcon: ({ color }) => (
                        < DesignerIcon color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <ProfileIcon color={color} />
                    )
                }}
            />
        </Tabs>
    )
}