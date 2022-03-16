import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default function App() {
  let [anoNasc, setanoNasc] = useState('');
  let [anoAtual, setanoAtual] = useState('');
  let [idade, setIdade] = useState ('');

    function qualidade(){

      let vidade = parseInt(anoAtual) - parseInt(anoNasc);

      setIdade(vidade);

      alert("Sua idade é :" + idade);
    } 

  return (
    <View style={styles.container}> 
		<Text style={styles.titulo}>App Age</Text> 
		
    <TextInput style={styles.campo} placeholder= "Ano de Nascimento" keyboardType="numeric" 		
    onChangeText={ setanoNasc } /> 

    <TextInput style={styles.campo} placeholder= "Ano Atual" keyboardType="numeric" 		
    onChangeText={ setanoAtual } /> 
	
		<TouchableOpacity style={styles.botao} 
		onPress={qualidade}> 
		<Text style={styles.textoBotao}>Sua Idade</Text> 
		</TouchableOpacity> </View> ); } 
	
			const styles = StyleSheet.create({ 
			container: { 
			flex: 1, 
			backgroundColor: "red" 
			}, 
			titulo:{ 
			textAlign: 'center', 
			marginTop: 40,
			marginBottom: 40,
			fontSize: 30,
			color: "#FFF" 
    
			}, 
			campo:{ 
			textAlign: 'center',
			backgroundColor: "#FFB6C1",
			borderRadius: 20,
			margin: 15,
 			padding: 5,
 			fontSize: 15, 
			}, 
			botao:{ 
			justifyContent: 'center', 
			alignItems: 'center', 
			margin: 15, 
			backgroundColor: "#FFB6C1", 
			padding: 5, 
			borderRadius: 20, 
			}, 
			textoBotao: { 
			fontSize: 20 
			},
	});