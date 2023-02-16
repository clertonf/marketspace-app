import { Platform } from 'react-native';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';

import { Home } from '@screens/Home';

import { House, SignOut, Tag } from 'phosphor-react-native';

type AppRoutesProps = {
	home: undefined;
	myAds: undefined;
	exit: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

export function AppRoutes() {
	const { sizes, colors } = useTheme();

	const iconSize = sizes[7];

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.gray[600],
				tabBarInactiveTintColor: colors.gray[400],
				tabBarStyle: {
					backgroundColor: colors.gray[100],
					borderTopWidth: 0,
					height: Platform.OS === 'android' ? 'auto' : 96,
					paddingBottom: sizes[10],
					paddingTop: sizes[6],
				},
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
				}}
			/>
			<Screen
				name="myAds"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
				}}
			/>
			<Screen
				name="exit"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<SignOut color={colors.red[500]} size={iconSize} />
					),
				}}
			/>

			{/* <Screen
				name="exercise"
				component={Exercise}
				options={{
					tabBarButton: () => null,
				}}
			/> */}
		</Navigator>
	);
}
