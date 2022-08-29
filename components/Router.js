import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UniversityComponent from "./UniversityComponent";
import UniversityListComponent from "./UniversityListComponent";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UniversityListComponent"
          component={UniversityListComponent}
        />
        <Stack.Screen
          name="UniversityComponent"
          component={UniversityComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
