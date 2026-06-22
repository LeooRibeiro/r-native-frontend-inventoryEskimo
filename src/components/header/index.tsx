import { View, Text, Pressable } from 'react-native'
import { Ionicons, Feather} from '@expo/vector-icons'
import React from 'react'

export function Header() {
  return (
    <View className='w-full h-40 bg-blue-600 p-4'>
        <Text className='text-white font-bold text-2xl'>
            DISTRIBUIDORA ANDROMEDA
        </Text>
        <Text className='text-white font-medium text-lg mt-10'>
            Loja: Jardim Satelite
        </Text>
        <Text className='text-white font-light'>
            Avenida Andromeda, 3940, Jd. Satelite
        </Text>
        {/* <Pressable>
            <Ionicons name='menu' size={20} color="#121212"></Ionicons>
        </Pressable> */}
    </View>
  )
}

