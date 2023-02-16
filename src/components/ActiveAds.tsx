import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
	HStack,
	Heading,
	VStack,
	Text,
	Icon,
	useTheme,
	Button as GhostButton,
} from 'native-base';

export function ActiveAds() {
	const { colors } = useTheme();

	return (
		<VStack>
			<Text color="gray.500" fontSize="md">
				Seus produtos anunciados para venda
			</Text>

			<VStack
				py={4}
				px={3}
				mt={4}
				bg="#DFE1EA"
				borderRadius="6"
				flexDirection="row"
				justifyContent="space-between"
			>
				<HStack alignItems="center">
					<MaterialCommunityIcons
						name="tag-outline"
						size={24}
						color={colors.blue[500]}
					/>
					<VStack ml={3}>
						<Heading color="gray.700" fontSize="lg" fontFamily="heading">
							4
						</Heading>
						<Text>anúncios ativos</Text>
					</VStack>
				</HStack>
				<GhostButton
					size="md"
					variant="ghost"
					_text={{
						color: 'blue.500',
						fontFamily: 'heading',
					}}
					_pressed={{
						bgColor: 'blue.200',
					}}
					rightIcon={
						<Icon
							as={<AntDesign name="arrowright" size={24} color="black" />}
							size={5}
							color="blue.500"
						/>
					}
				>
					Meus anúncios
				</GhostButton>
			</VStack>
		</VStack>
	);
}
