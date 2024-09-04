import { Button, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import DiceOne from './assets/dice-six-faces-one.png'
import DiceTwo from './assets/dice-six-faces-two.png'
import DiceThree from './assets/dice-six-faces-three.png'
import DiceFour from './assets/dice-six-faces-four.png'
import DiceFive from './assets/dice-six-faces-five.png'
import DiceSix from './assets/dice-six-faces-six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
<Image style={styles.diceImage} source={imageUrl} />
  )
}

const App = ():JSX.Element =>  {
const[diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne) // TODO

const rollDiceOnTap = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1 ;

const diceNumber = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix]

setDiceImage(diceNumber[randomNumber -1])
// switch (randomNumber) {
//   case 1: 
//   setDiceImage(DiceOne)
//   break;
//   case 2:
//     setDiceImage(DiceTwo)
//   break;
//   case 3:
//     setDiceImage(DiceThree)
//   break;
//   case 4:
//     setDiceImage(DiceFour)
//   break;
//   case 5:
//     setDiceImage(DiceFive)
//   break;
//   case 6:
//     setDiceImage(DiceSix)
//   break;

//   default:
//     setDiceImage(DiceOne)
//     break;
// }
}

  return (
    <View style ={styles.container}>
     <Dice imageUrl={diceImage} />
     <Pressable onPress={() => rollDiceOnTap()}>
     <Text style={styles.rollDiceBtnText}> Roll the dice</Text>
     </Pressable>
     
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
    
  },
 diceImage: {
   width: 200,
   height: 200,
  },
  rollDiceBtnText: {
  paddingHorizontal: 40,
  paddingVertical: 10,
  borderWidth: 2,
  borderRadius: 8,
  borderColor: '#9ffcba',
  fontSize: 16,
  color: '#34eb67',
  fontWeight: '700',
  textTransform: 'uppercase'
  }
})
export default App