import React,{Component} from 'react'
import {Text,View,} from 'react-native'

export default class CreatePost extends Component{
    render() 
    { return ( <View style={styles.container}> 
    <View style={styles.cardContainer}>
         <View style={styles.authorContainer}> 
         <View style={styles.authorImageContainer}>
            <Image source={require("../assets/profile_img.png")} style={styles.profileImage} ></Image> 
            </View> <View style={styles.authorNameContainer}> 
            <Text style={styles.authorNameText}>{this.props.post.author} </View>
             </View> <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
              <View style={styles.captionContainer}> <Text style={styles.captionText}>
                 {this.props.post.caption} </Text>
                 }
                 }
}
