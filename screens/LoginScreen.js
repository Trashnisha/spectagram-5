loginWithEmailAndPassword()
login = async (email, password) =>{
 firebase 
 .auth()
 . loginWithEmailAndPassword(email, password)
 .then(() =>{
   this.props.navigation.replace("Dashboard");
 })
 .catch(erroe =>{
   Alert.alert(error.message);
 });
}
