import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
           <View style = {styles.container}>
           <SafeAreaView style = {styles.droidSafeArea}></SafeAreaView>
           <View style = {styles.appTitle}>
           <View style = {styles.appIcon}>
               <Image
               source = {require("../assets/logo.png")}
               style = {styles.iconImage} 
               ></Image>
           </View>
           <View style = {styles.appTitleTextContainer}>
               <Text style = {styles.appTitleText} > New Post </Text>
           </View>
           </View>
           <View style = {styles.feildsContainer}>
               <ScrollView>
                   <Image
                         source = {preview_images[this.state.previewImage]}
                         style = {styles.previewImage}
                         ></Image>
             <View style = {{height : 
                            RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                             items={[
                                    { label : 'Image 1' , value : 'image_1' },
                                    { label : 'Image 2' , value : 'image_2' },
                                    { label : 'Image 3' , value : 'image_3' },
                                    { label : 'Image 4' , value : 'image_4' },
                                    { label : 'Image 5' , value : 'image_5' },
                                    { label : 'Image 6' , value : 'image_6' },
                                    { label : 'Image 7' , value : 'image_7' },  
                                                     ]}
                                                     defaultValue = {this.state.previewImage}
                                                     containerStyle = {{
                                                         height: 40,
                                                         borderRadius: 20,
                                                         marginBottom: 10
                                                     }}
                                                     onOpen = {() => {
                                                         this.setState ({ dropDownHeight: 170 });
                                                         }}
                                                     onClose = {() => {
                                                         this.setState ({ dropDownHeight: 40 });
                                                         }}
                                                     style = {{ backgroundColor: "transparent" }}
                                                     itemStyle = {{
                                                         justifyContent : "flex-start"
                                                     }}
                                                     dropDownStyle = {{backGroundColor: "#2a2a2a"
                                                     labelStyle = {{
                                                         color: "white"
                                                     }}
                                                     onChangeItem = {item => this.setState({
                                                         previewImage : item.value
                                                     })}
                                                    }/>
                                                    </View>
                                                    <TextInput
                                                    style = {styles.InputFont}
                                                    onChangeText = {caption => this.setState({caption})}
                                                    palceholder = {"caption"}
                                                    placeholderTextColor=  "white"/>

                                                 
               </ScrollView>
               </View>
               <View style = {{ flex: 0.08}} />
           </View>


        )
    }
}            