import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HStack, Heading, VStack, Text, Icon, useTheme } from 'native-base';

import { UserPhoto } from './UserPhoto';
import { Button } from './Button';

export function HomeHeader() {
	return (
		<HStack pt={16} pb={5} px={6} alignItems="center">
			<UserPhoto
				source={{
					uri: 'https://avatars.githubusercontent.com/u/37512922?v=4',
				}}
				size={16}
				alt="Imagem do usuário"
				mr={4}
			/>
			<VStack flex={1}>
				<Text color="gray.700" fontSize="md">
					Boas vindas,
				</Text>

				<Heading color="gray.700" fontSize="lg" fontFamily="heading">
					Clerton!
				</Heading>
			</VStack>

			<Button
				w="139"
				title="Criar anúncio"
				bgColor="gray.700"
				onPress={() => {}}
				_pressed={{
					bgColor: 'gray.500',
				}}
				leftIcon={
					<Icon as={<MaterialIcons name="add" />} size={5} color="white" />
				}
				// isLoading={isLoading}
			/>
		</HStack>
	);
}
