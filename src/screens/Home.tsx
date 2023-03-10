import React, { useCallback, useMemo, useRef } from 'react';
import { ActiveAds } from '@components/ActiveAds';
import { HomeHeader } from '@components/HomeHeader';
import { Input } from '@components/Input';
import { Center, Divider, FlatList, Icon, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Announcement } from '@components/Announcement';

export function Home() {
	const infoList = [
		{
			id: '1',
			title: 'Tênis vermelho',
			price: 'R$ 120,00',
			stateOfUse: 'new',
		},
		{
			id: '2',
			title: 'Tênis vermelho',
			price: 'R$ 120,00',
			stateOfUse: 'used',
		},
		{
			id: '3',
			title: 'Tênis vermelho',
			price: 'R$ 120,00',
			stateOfUse: 'used',
		},
		{
			id: '4',
			title: 'Tênis vermelho',
			price: 'R$ 120,00',
			stateOfUse: 'new',
		},
		{
			id: '5',
			title: 'Tênis vermelho',
			price: 'R$ 120,00',
			stateOfUse: 'new',
		},
	];

	return (
		<VStack flex={1}>
			<HomeHeader />
			<VStack flex={1} px={6} mt={4}>
				<ActiveAds />

				<Text mt={8} mb={4} color="gray.500" fontSize="sm">
					Compre produtos variados
				</Text>

				<Input
					placeholder="Buscar anúncio"
					InputRightElement={
						<>
							<TouchableOpacity onPress={() => {}}>
								<Icon
									as={<AntDesign name="search1" size={24} />}
									size={5}
									color="gray.700"
								/>
							</TouchableOpacity>

							<Divider orientation="vertical" mr="3" mx="3" h={5} />
							<TouchableOpacity onPress={() => {}}>
								<Icon
									as={<AntDesign name="bars" size={24} />}
									size={5}
									mr="3"
									color="gray.700"
								/>
							</TouchableOpacity>
						</>
					}
					mb={2}
				/>

				<VStack flex={1}>
					<FlatList
						data={infoList}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Announcement
								onPress={() => {}}
								stateOfUse="new"
								title={item.title}
								price={item.price}
							/>
						)}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						_contentContainerStyle={{
							alignItems: 'center',
						}}
					/>
				</VStack>
			</VStack>
		</VStack>
	);
}
