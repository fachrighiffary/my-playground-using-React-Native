import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

const ShowImage = ({route}) => {
    console.log('INi adlaah route',route.params.uri);
    console.log('INi adlaah route',route);
    let img = route.params.uri
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>INi adalah show Image</Text>
            <View style={{marginTop: 100,height: 200, width:290, transform: [{ rotate: '0deg' }], justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 15 }}>
                <Image source={{uri: img}} style={{height: 480, width: 600,marginLeft: 70,marginBottom: 15 }} />
            </View>
                
        </View>
    )
}

export default ShowImage

const styles = StyleSheet.create({})
