import { Image, IImageProps, HStack, View, useTheme } from 'native-base';
import { PencilSimpleLine } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type ImageProps = IImageProps & {
	size: number;
	sendPhotoAvatar?: boolean;
};

export function UserPhoto({
	size,
	sendPhotoAvatar = false,
	...rest
}: ImageProps) {
	const { colors } = useTheme();

	return (
		<HStack position="relative">
			<Image
				w={size}
				h={size}
				rounded="full"
				borderWidth={2}
				borderColor="blue.300"
				{...rest}
			/>

			{sendPhotoAvatar ? (
				<View position="absolute" right={0} bottom={0} h="10" w="10">
					<TouchableOpacity
						style={{
							width: 40,
							height: 40,
							borderRadius: 30,
							backgroundColor: colors.blue[300],
							alignItems: 'center',
							justifyContent: 'center',
						}}
						activeOpacity={0.6}
					>
						<PencilSimpleLine size={20} color={colors.white} />
					</TouchableOpacity>
				</View>
			) : null}
		</HStack>
	);
}
