import { Center, Heading, HStack, Image, Text, VStack } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { UserPhoto } from './UserPhoto';

type AnnouncementProps = TouchableOpacityProps & {
	stateOfUse: 'new' | 'used';
	onPress: () => void;
	title: string;
	price: string;
};

export function Announcement({
	stateOfUse,
	onPress,
	title,
	price,
	...rest
}: AnnouncementProps) {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7} {...rest}>
			<VStack w={40} mb={6} mr={2} ml={2}>
				<VStack top={0} left={0} zIndex={1}>
					<Image
						alt="Imagem do sapato"
						source={{
							uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcC5QB2-9FIb_VENruroA49iZG8SvIXGTQg&usqp=CAU',
						}}
						w={40}
						h={24}
						rounded="md"
					/>
					<Text mt={2} fontSize="sm">
						{title}
					</Text>
					<Heading fontSize="md" fontFamily="heading">
						{price}
					</Heading>
				</VStack>

				<HStack
					justifyContent="space-between"
					position="absolute"
					px={1}
					w={40}
					zIndex={1}
					mt={1}
				>
					<UserPhoto
						source={{
							uri: 'https://avatars.githubusercontent.com/u/37512922?v=4',
						}}
						size={8}
						alt="Imagem do usuário"
						mr={4}
						style={{ borderColor: 'white', borderWidth: 1 }}
					/>

					<Center
						bg={stateOfUse === 'new' ? 'blue.500' : 'gray.600'}
						px={3}
						borderRadius={20}
					>
						<Text color="white" fontFamily="heading" fontSize="10">
							{stateOfUse === 'new' ? 'NOVO' : 'USADO'}
						</Text>
					</Center>
				</HStack>
			</VStack>
		</TouchableOpacity>
	);
}
