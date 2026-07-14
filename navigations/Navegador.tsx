import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EditarScreen from "../screens/EditarScreen"
import EliminarScreen from "../screens/EliminarScreen"
import GuardarScreen from "../screens/GuardarScreen"
import LeerScreen from "../screens/LeerScreen"

const Drawer = createDrawerNavigator()

//DRAWER
function MyDrawer(){
    return(
        <Drawer.Navigator 
            screenOptions={{headerTintColor: "#57c9c9"}}
        >
            <Drawer.Screen name='Editar' component={EditarScreen}/>
            <Drawer.Screen name='Eliminar' component={EliminarScreen}/>
            <Drawer.Screen name='Guardar' component={GuardarScreen}/>
            <Drawer.Screen name='Leer' component={LeerScreen}/>
        </Drawer.Navigator>
    )
}

export function Navegador(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}