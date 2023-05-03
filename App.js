import React, {useState} from 'react';
import { Button, Linking, StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput,Icon } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import myPic from './assets/FriendSphereLogo.png';
import hisPic from './assets/favicon.png';
import Logo from './assets/FriendSphereLogo.png'

const screen = 13;

const DisplayScreen = () => {
  return(
    <View style={DisplayScreenStyles.container}>
      <Header/>
      <Screens/>
      <Footer/>
    </View>
  );
}

const DisplayScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


const Screens = () => {
  if(screen==0){
    return(
      <>
        <WelcomeScreen/>
      </>
    );
  }else if(screen==1){
    return(
      <>
        <LoginScreen/>
      </>
    );
  }else if(screen==2){
    return(
      <>
        <SignUpScreen/>
      </>
    );
  }else if(screen==3){
    return(
      <>
        <ForgotPasswordScreen/>
      </>
    );
  }else if(screen==4){
    return(
      <>
        <CreateProfileScreen/>
      </>
    );
  }else if(screen==5){
    return(
      <>
        <CreateProfileScreen1/>
      </>
    );
  }else if(screen==6){
    return(
      <>
        <CreateProfileScreen2/>
      </>
    );
  }else if(screen==7){
    return(
      <>
        <CreateProfileScreen3/>
      </>
    );
  }else if(screen==8){
    return(
      <>
        <CreateProfileScreen4/>
      </>
    );
  }else if(screen==9){
    return(
      <>
        <CreateProfileScreen5/>
      </>
    );
  }else if(screen==10){
    return(
      <>
        <SwippingScreen/>
      </>
    );
  }else if(screen==11){
    return(
      <>
        <FriendList/>
      </>
    );
  }else if(screen==12){
    return(
      <>
        <MessagingScreen/>
      </>
    );
  }else if(screen==13){
    return(
      <>
        <ViewProfileScreen/>
      </>
    );
  }
  
}

const Header= () => {
  if(screen==4){
    return(
      <>
        <View style={CreateProfileScreenStyles.header}>
          <Text style={CreateProfileScreenStyles.headerText}>Fill Your Profile</Text>
        </View>
      </>
    );
  }else if(screen==5){
    return(
      <>
        <View style={CreateProfileScreen1Styles.header}>
          <Text style={CreateProfileScreen1Styles.headerText}>Select Your Preference</Text>
        </View>
      </>
    );
  }else if(screen==6){
    return(
      <>
        <View style={CreateProfileScreen3Styles.header}>
          <Text style={CreateProfileScreen3Styles.headerText}>Select Your Country</Text>
        </View>
      </>
    );
  }else if(screen==7){
    return(
      <>
        <View style={CreateProfileScreen3Styles.header}>
          <Text style={CreateProfileScreen3Styles.headerText}>Select Your Country</Text>
        </View>
      </>
    );
  }else if(screen==8){
    return(
      <>
        <View style={CreateProfileScreen4Styles.header}>
          <Text style={CreateProfileScreen4Styles.headerText}>Select Your Interests</Text>
        </View>
      </>
    );
  }else if(screen==9){
    return(
      <>
        <View style={CreateProfileScreen5Styles.header}>
          <Text style={CreateProfileScreen5Styles.headerText}>Select Your Avatar</Text>
        </View>
      </>
    );
  }else if(screen==11){
    return(
      <>
        <View style={FriendListStyles.header}>
          <Text style={FriendListStyles.headerText}>My Friends</Text>
        </View>
      </>
    );
  }else if(screen==12){
    return(
      <>
        <View style={MessagingScreenStyles.header}>
          <Text style={MessagingScreenStyles.headerText}>Julian</Text>
        </View>
      </>
    ); 
  }else if(screen==13){
    return(
      <>
        <View style={ViewProfileStyles.header}>
          <Text style={ViewProfileStyles.headerText}>My Profile</Text>
        </View>
      </>
    ); 
  }
  
}

const Footer= () => {
  if(screen==4 || screen==5 || screen==6 || screen==7 || screen==8 || screen==9){
    return(
      <>
        <View style={CreateProfileScreenStyles.footer}>
          <button style={CreateProfileScreenStyles.nextPageButton}>Welcome</button>
        </View>
      </>
    );
  }else if(screen==11 || screen==12 || screen==13){
    return(
      <>
        <View style={MessagingScreenStyles.footer}>
          <button style={MessagingScreenStyles.nextPageButton}>chatting</button>
          <button style={MessagingScreenStyles.nextPageButton}>swiping</button>
          <button style={MessagingScreenStyles.nextPageButton}>profile</button>
        </View>
      </>
    );
  }
  
}

//WelcomeScreen 0
const WelcomeScreen= () => {
  return (
    <View style={WelcomeScreenStyles.container}>
      <img src={Logo} style={WelcomeScreenStyles.logo}/>
      <button style={WelcomeScreenStyles.nextPageButton}>Welcome</button>
      <a href='./createProfile.js' style={WelcomeScreenStyles.nextPageLink}>Get Started</a>
      <StatusBar style="auto" />
    </View>
  );
}
const WelcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: '20px',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',
    // paddingTop: '20px',
    // paddingBottom: '20px',
    // paddingLeft: '80px',
    // paddingRight: '80px',

    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    marginTop: '10%',
    width: '90%',
  },
  nextPageLink: {
    color: '#808080',
    textDecoration: 'underline',
    paddingTop: '20px',
  }
});

//LoginScreen 1
const LoginScreen= () => {
  return (
    <View style={LoginScreenStyles.body}>
      <img src={Logo} style={LoginScreenStyles.logo}/>
      <View style={LoginScreenStyles.cards}>
        <Text><TextInput style={LoginScreenStyles.input} placeholder='Email'/></Text>
      </View>
      <View style={LoginScreenStyles.cards}>
        <Text><TextInput style={LoginScreenStyles.input} placeholder='Password' secureTextEntry/></Text>
      </View>
      <View style={LoginScreenStyles.Buttons}>
        <button style={LoginScreenStyles.nextPageButton}>Login</button>
        <button style={LoginScreenStyles.nextPageButton}>Sign Up</button>
      </View>
      <a href='./createProfile.js' style={LoginScreenStyles.nextPageLink}>Forgot Password</a>
    </View>
  );
}
const LoginScreenStyles = StyleSheet.create({
  body: {
    backgroundColor: '#rgb(221, 250, 254)',
    width: '100%',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '10px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '200px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
    width: '90%',
  },
  nextPageLink: {
    color: '#808080',
    textDecoration: 'underline',
    paddingTop: '20px',
    textAlign: 'center',
  },
});

//SignUpScreen 2
const SignUpScreen= () => {
  return (
    <View style={SignUpScreenStyles.body}>
      <img src={Logo} style={SignUpScreenStyles.logo}/>
      <View style={SignUpScreenStyles.cards}>
        <Text><TextInput style={SignUpScreenStyles.input} placeholder='Username'/></Text>
      </View>
      <View style={SignUpScreenStyles.cards}>
        <Text><TextInput style={SignUpScreenStyles.input} placeholder='Email'/></Text>
      </View>
      <View style={SignUpScreenStyles.cards}>
        <Text><TextInput style={SignUpScreenStyles.input} placeholder='Password' secureTextEntry/></Text>
      </View>
      <View style={SignUpScreenStyles.Buttons}>
        <button style={SignUpScreenStyles.nextPageButton}>Sign Up</button>
      </View>
      <a href='./createProfile.js' style={SignUpScreenStyles.nextPageLink}>Login</a>
    </View>
  );
}
const SignUpScreenStyles = StyleSheet.create({
  body: {
    backgroundColor: '#rgb(221, 250, 254)',
    width: '100%',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '10px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '200px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
    width: '90%',
  },
  nextPageLink: {
    color: '#808080',
    textDecoration: 'underline',
    paddingTop: '20px',
    textAlign: 'center',
  },
});

//ForgotPasswordScreen 3
const ForgotPasswordScreen= () => {
  return (
    <View style={ForgotPasswordScreenStyles.body}>
      <img src={Logo} style={ForgotPasswordScreenStyles.logo}/>
      <View style={ForgotPasswordScreenStyles.cards}>
        <Text><TextInput style={ForgotPasswordScreenStyles.input} placeholder='Email'/></Text>
      </View>
      <View style={ForgotPasswordScreenStyles.cards}>
        <Text><TextInput style={ForgotPasswordScreenStyles.input} placeholder='New Password' secureTextEntry/></Text>
      </View>
      <View style={ForgotPasswordScreenStyles.cards}>
        <Text><TextInput style={ForgotPasswordScreenStyles.input} placeholder='Confirm Password' secureTextEntry/></Text>
      </View>
      <View style={ForgotPasswordScreenStyles.Buttons}>
        <button style={ForgotPasswordScreenStyles.nextPageButton}>Continue</button>
      </View>
    </View>
  );
}
const ForgotPasswordScreenStyles = StyleSheet.create({
  body: {
    backgroundColor: '#rgb(221, 250, 254)',
    width: '100%',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '10px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '200px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
    width: '90%',
  },
  nextPageLink: {
    color: '#808080',
    textDecoration: 'underline',
    paddingTop: '20px',
    textAlign: 'center',
  },
});

//CreateProfileScreen 4
const CreateProfileScreen= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Name: ',        placeHolder: 'Enter Name', maxChar: 10,},
    { key: 2, item: 'Birthday: ',    placeHolder: 'Enter Birthday', maxChar: 8,},
    { key: 3, item: 'Country: ',     placeHolder: 'Enter Country', maxChar: 12,},
    { key: 4, item: 'Occupation: ',  placeHolder: 'Enter Occupation', maxChar: 10,},
    { key: 5, item: 'Email: ',       placeHolder: 'Enter Email', maxChar: 20,},
    { key: 6, item: 'Personality: ', placeHolder: 'Enter Personality', maxChar: 4,},
  ]);
  return (
    <View style={CreateProfileScreenStyles.body}>
      <Header/>
      <View style={CreateProfileScreenStyles.cards}>
        <TextInput style={CreateProfileScreenStyles.input} placeholder='Enter Name'/>
      </View>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View style={CreateProfileScreenStyles.cards} key={object.item}>
                <Text>{object.item}<TextInput style={CreateProfileScreenStyles.input} placeholder={object.placeHolder} maxLength={object.maxChar}/></Text>
              </View>
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const CreateProfileScreenStyles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '20px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//CreateProfileScreen1 5
const CreateProfileScreen1= () => {
  return (
    <View style={CreateProfileScreen1Styles.body}>
      <Header/>
      <View style={CreateProfileScreen1Styles.middle}>

        <View style={CreateProfileScreen1Styles.cards}>
          <TextInput style={CreateProfileScreen1Styles.input} placeholder='Recommended Distance'/>
        </View>
        <View style={CreateProfileScreen1Styles.cards}>
          <Text><TextInput style={CreateProfileScreen1Styles.input} placeholder='Recommended Age'/></Text>
        </View>
        <View>
          <Text style={CreateProfileScreen1Styles.publicPrivate}>Do you want to set your location to private or public?</Text>
        </View>
        <View style={CreateProfileScreen1Styles.buttons}>
          <button style={CreateProfileScreen1Styles.nextPageButton}>Private</button>
          <button style={CreateProfileScreen1Styles.nextPageButton}>Public</button>
        </View>
        <View>
          <Text style={CreateProfileScreen1Styles.changeNote}>This can be changed later</Text>
        </View>
      </View>
      <Footer/>
    </View>
  );
}
const CreateProfileScreen1Styles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  middle: {
    marginTop: '10%',
  },
  publicPrivate: {
    textAlign: 'center',
    fontSize: '20px',
  },
  buttons: {
    marginTop: '10px',
    alignItems: 'center',
  },
  changeNote: {
    marginTop: '20px',
    color: 'grey',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '10px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//createProfile2 6
const CreateProfileScreen2= () => {
  return (
    <View style={CreateProfileScreen2Styles.body}>
      <View style={CreateProfileScreen2Styles.header}>
        <Text style={CreateProfileScreen2Styles.headerText}>Add Your Photos</Text>
      </View>
      <View style={CreateProfileScreen2Styles.middle}>
        <View>
          <Text style={CreateProfileScreen2Styles.topNote}>Add photos to get more friend matches</Text>
        </View>
        <View style={CreateProfileScreen2Styles.cards}></View>
        <View style={CreateProfileScreen2Styles.cards}></View>
      </View>
      <Footer/>
    </View>
  );
}
const CreateProfileScreen2Styles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topNote: {
    textAlign: 'center',
    fontSize: '20px',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',


    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    
    marginTop: '10px',
    marginBottom: '40px',

    width: '80%',
    height: '400px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '3px',
    borderStyle: 'dashed',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//CreateProfile3 7
const CreateProfileScreen3= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Afganistan', newMessage: 'Hi',},
    { key: 2, item: 'Amarica', newMessage: 'Where are you?',},
    { key: 3, item: 'Pakistan', newMessage: 'Ok',},
    { key: 4, item: 'India', newMessage: 'Unemployed',},
    { key: 5, item: 'China', newMessage: 'Hello',},
    { key: 6, item: 'Canada', newMessage: 'Thanks',},
    { key: 7, item: 'France', newMessage: 'Hi',},
  ]);

  return (
    <View style={CreateProfileScreen3Styles.body}>
      <Header/>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View style={CreateProfileScreen3Styles.friendBox} key={object.item}>
                <img style={CreateProfileScreen3Styles.flag} src={Logo}/>
                <View style={CreateProfileScreen3Styles.nameMessage}>
                  <Text style={CreateProfileScreen3Styles.friendName}>{object.item}</Text>
                  
                </View>
                <View style={CreateProfileScreen3Styles.radioButton}><input type='radio'></input></View>
              </View>
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const CreateProfileScreen3Styles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    justifyContent: 'center',
    width: '40px',
    marginRight: '10px',
    borderRadius: '10px',
  },
  friendBox: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderWidth: '1px',
    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '20px',
    marginBottom: '40px',

    width: '90%',
    flexDirection: 'row',
  
  },
  friendName: {
    color: '#rgb(0, 32, 73)',
    fontSize: '20px',
    textAlign: 'center',
  },
  nameMessage: {
    flexDirection: 'column',
    flex: 1,
  },
  radioButton: {
    marginRight: '10px',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//createProfile4 8
const CreateProfileScreen4= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Nature',},
    { key: 2, item: 'Reading',},
    { key: 3, item: 'Horse Riding',},
    { key: 4, item: 'Movies',},
    { key: 5, item: 'Volley Ball',},
    { key: 6, item: 'Art',},
    { key: 7, item: 'Writing',},
    { key: 8, item: 'Football',},
    { key: 9, item: 'Chess',},
    { key: 10, item: 'Gaming',},
    { key: 11, item: 'Badminton',},
    { key: 12, item: 'Gym',},
    { key: 13, item: 'Archery',},
    { key: 14, item: 'Dancing & Singing',},
    { key: 15, item: 'Traveling',},
    { key: 16, item: 'Swimming',},
    { key: 17, item: 'Cricket',},
    { key: 18, item: 'Rock Climbing',},
    { key: 19, item: 'Cooking',},
    { key: 20, item: 'Cycling',},
    { key: 21, item: 'Minecraft',},
    { key: 1, item: 'Nature',},
    { key: 2, item: 'Reading',},
    { key: 3, item: 'Horse Riding',},
    { key: 4, item: 'Movies',},
    { key: 5, item: 'Volley Ball',},
    { key: 6, item: 'Art',},
    { key: 7, item: 'Writing',},
    { key: 8, item: 'Football',},
    { key: 9, item: 'Chess',},
    { key: 10, item: 'Gaming',},
    { key: 11, item: 'Badminton',},
    { key: 12, item: 'Gym',},
    { key: 13, item: 'Archery',},
    { key: 14, item: 'Dancing & Singing',},
    { key: 15, item: 'Traveling',},
    { key: 16, item: 'Swimming',},
    { key: 17, item: 'Cricket',},
    { key: 18, item: 'Rock Climbing',},
    { key: 19, item: 'Cooking',},
    { key: 20, item: 'Cycling',},
    { key: 21, item: 'Minecraft',},
    { key: 1, item: 'Nature',},
    { key: 2, item: 'Reading',},
    { key: 3, item: 'Horse Riding',},
    { key: 4, item: 'Movies',},
    { key: 5, item: 'Volley Ball',},
    { key: 6, item: 'Art',},
    { key: 7, item: 'Writing',},
    { key: 8, item: 'Football',},
    { key: 9, item: 'Chess',},
    { key: 10, item: 'Gaming',},
    { key: 11, item: 'Badminton',},
    { key: 12, item: 'Gym',},
    { key: 13, item: 'Archery',},
    { key: 14, item: 'Dancing & Singing',},
    { key: 15, item: 'Traveling',},
    { key: 16, item: 'Swimming',},
    { key: 17, item: 'Cricket',},
    { key: 18, item: 'Rock Climbing',},
    { key: 19, item: 'Cooking',},
    { key: 20, item: 'Cycling',},
    { key: 21, item: 'Minecraft',},
    
  ]);

  return (
    <View style={CreateProfileScreen4Styles.body}>
      <Header/>
      <ScrollView>
      <View>
        <Text style={CreateProfileScreen4Styles.info}>Do you want to set your location to private or public?</Text>
      </View>
      <View style={CreateProfileScreen4Styles.cards} >
        {
          Items.map((object)=>{
            return (
                <Text style={CreateProfileScreen4Styles.tags} key={object.item}><input style={CreateProfileScreen4Styles.input} type='checkbox'/>{object.item}</Text>
            )
          })
        }
        </View>
      <View>
        <Text style={CreateProfileScreen4Styles.info}>Create new tags!</Text>
      </View>
      <View style={CreateProfileScreen4Styles.cards}>
        <Text  style={CreateProfileScreen4Styles.tags}><input style={CreateProfileScreen4Styles.input} type='text'/></Text>
      </View>
      </ScrollView>
      <Footer/>
    </View>
  );
}
const CreateProfileScreen4Styles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    color: 'black',
    fontSize: '20px',
    textAlign: 'center',
  },
  cards: {
    color: 'black',
    //backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '20px',
    marginBottom: '40px',

    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  
  },
  tags: {
    fontSize: '15px',
    fontWeight: '500',
    backgroundColor: '# rgb(207, 159, 255)',
    borderRadius: '20px',
    margin: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  input: {
    flex: 1,
    borderColor: 'white',
    backgroundColor: '# rgb(207, 159, 255)',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//CreateProfile5 9
const CreateProfileScreen5= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Afganistan', newMessage: 'Hi',},
    { key: 2, item: 'Amarica', newMessage: 'Where are you?',},
    { key: 3, item: 'Pakistan', newMessage: 'Ok',},
    { key: 4, item: 'India', newMessage: 'Unemployed',},
    { key: 5, item: 'China', newMessage: 'Hello',},
    { key: 6, item: 'Canada', newMessage: 'Thanks',},
    { key: 7, item: 'France', newMessage: 'Hi',},
  ]);

  return (
    <View style={CreateProfileScreen5Styles.body}>
      <Header/>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View>
                
                <View style={CreateProfileScreen5Styles.friendBox} key={object.item}>
                <img style={CreateProfileScreen5Styles.picture} src={Logo}/>
                  <View style={CreateProfileScreen5Styles.nameMessage}>
                    <button style={CreateProfileScreen5Styles.chosseAvatarButton}>Choose This Avatar</button>
                  </View>
                </View>
              </View>
              
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const CreateProfileScreen5Styles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: '#rgb(0, 32, 73)',
  },
  footer: {
    backgroundColor: '#rgb(221, 250, 254)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    marginBottom: '20px',
    borderRadius: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    marginLeft: '40px',
    marginRight: '20px',
  },
  chosseAvatarButton: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderWidth: '1px',
    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '20px',
    marginBottom: '40px',

    width: '90%',
    fontSize: '18px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendBox: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  friendName: {
    color: '#rgb(0, 32, 73)',
    fontSize: '20px',
    textAlign: 'center',
  },
  nameMessage: {
    flex: 1,
  },
  radioButton: {
    marginRight: '10px',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    marginTop: '10px',
    width: '250px',
    height: '60px',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//SwippingScreen 10 //incomplete
const SwippingScreen = () => {
  return(
    <>
      <img src={hisPic} style={SwippingScreenStyles.image}/>
    </>
  );
}
const SwippingScreenStyles = StyleSheet.create({
  image: {
    width: '100%',

  },
})

//friendList 11
const FriendList= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Ali', newMessage: 'Hi',},
    { key: 2, item: 'Zaid Khan', newMessage: 'Where are you?',},
    { key: 3, item: 'Who is this', newMessage: 'Ok',},
    { key: 4, item: 'User576469', newMessage: 'Unemployed',},
    { key: 5, item: 'Jon Vick', newMessage: 'Hello',},
    { key: 6, item: 'Human Being', newMessage: 'Thanks',},
    { key: 7, item: 'Ali', newMessage: 'Hi',},
    { key: 8, item: 'Zaid Khan', newMessage: 'Where are you?',},
    { key: 9, item: 'Who is this', newMessage: 'Ok',},
    { key: 10, item: 'User576469', newMessage: 'Unemployed',},
    { key: 11, item: 'Jon Vick', newMessage: 'Hello',},
    { key: 12, item: 'Human Being', newMessage: 'Thanks',},
  ]);

  return (
    <View style={FriendListStyles.body}>
      <Header/>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View style={FriendListStyles.friendBox} key={object.item}>
                <img style={FriendListStyles.logo} src={Logo}/>
                <View style={FriendListStyles.nameMessage}>
                  <Text style={FriendListStyles.friendName}>{object.item}</Text>
                  <Text>{object.newMessage}</Text>
                </View>
                <View style={FriendListStyles.iconDots}>3_dots</View>
              </View>
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const FriendListStyles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: 'white',
  },
  footer: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'center',
    width: '40px',
    marginRight: '10px',
    borderRadius: '10px',
  },
  friendBox: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    //borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    // marginLeft: '40px',
    // marginRight: '40px',
    // marginTop: '20px',
    // marginBottom: '40px',

    width: '100%',
    flexDirection: 'row',
  
  },
  friendName: {
    color: '#rgb(0, 32, 73)',
    fontSize: '20px',
  },
  nameMessage: {
    flexDirection: 'column',
    flex: 1,
  },
  iconDots: {
    marginRight: '10px',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    width: 'fitcontent',
    height: 'fitcontent',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//messagingScreen 12
const MessagingScreen= () => {
  const [Items, setItems] = useState([
    { key: 1, message: 'Hello, Julian, How\'re you? What\'s up? What are you doing today?', date: '20/10/2022', time: '12:00 PM', message2: 'Hello, Julian, How\'re you? What\'s up?',},
    { key: 2, message: 'Birthday: ', date: '20/10/2024', time: '12:00 PM', message2: 'How\'re you? What\'s up?',},
    { key: 3, message: 'Country: ', date: '20/10/2024', time: '12:00 PM', message2: 'Hello',},
    { key: 4, message: 'Occupation: ', date: '20/10/2024', time: '12:00 PM', message2: 'Hello, Julian, How\'re you? What\'s up? What are you doing today?',},
    { key: 5, message: 'Email: ', date: '20/10/2024', time: '12:00 PM', message2: 'Hello, Julian, How\'re you? What\'s up?',},
    { key: 6, message: 'Personality: ', date: '20/10/2024', time: '12:00 PM', message2: 'Hello, Julian, How\'re you? What\'s up?',},
  ]);

  return (
    <View style={MessagingScreenStyles.body}>
      <Header/>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View key={object.message}>
                <View style={MessagingScreenStyles.hisUserPicAndMessage} >
                  <img style={MessagingScreenStyles.userPic} src={hisPic}/>
                  <View style={MessagingScreenStyles.messageAndTime}>
                    <View style={MessagingScreenStyles.hiscards}>
                      <Text style={MessagingScreenStyles.hisMessage}>{object.message}</Text>
                    </View>
                    <Text style={MessagingScreenStyles.time}>{object.date} {object.time}</Text>
                  </View>
                </View>

                <View style={MessagingScreenStyles.myUserPicAndMessage} >
                  <img style={MessagingScreenStyles.userPic} src={myPic}/>
                  <View style={MessagingScreenStyles.messageAndTime}>
                    <View style={MessagingScreenStyles.mycards}>
                      <Text style={MessagingScreenStyles.myMessage}>{object.message2}</Text>
                    </View>
                    <Text style={MessagingScreenStyles.time}>{object.date} {object.time}</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const MessagingScreenStyles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: 'white',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: 'white',
  },
  footer: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
  },
  hisUserPicAndMessage: {
    flexDirection: 'row',
    float: 'left',
    marginTop: '20px',
    marginBottom: '40px',
  },
  myUserPicAndMessage: {
    flexDirection: 'row-reverse',
    float: 'left',
    marginTop: '20px',
    marginBottom: '40px',
  },
  messageAndTime: {
    flexDirection: 'column',
    //marginLeft: '20px',
    marginRight: '40px',
  },
  hisMessage: {
    fontWeight: '500'
  },
  myMessage: {
    fontWeight: '500',
    color: 'white',
  },
  hiscards: {
    color: 'black',
    backgroundColor: '#rgb(221, 250, 254)',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '20px',

    borderRadius: '10px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '20px',
    maxWidth: '250px',
    minWidth: '100%'
  
  },
  mycards: {
    color: 'white',
    backgroundColor: '#rgb(0, 32, 73)',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '20px',

    borderRadius: '10px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '20px',
    maxWidth: '250px',
    minWidth: '100%'
  
  },
  userPic: {
    borderRadius: '100%',
    width: '50px',
    height:'50px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20px',
    marginRight: '20px',
  },
  time: {
    marginLeft: '30px',
    fontSize: '10px',
    color: 'gray',
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    width: 'fitcontent',
    height: 'fitcontent',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//viewProfile 13
const ViewProfileScreen= () => {
  const [Items, setItems] = useState([
    { key: 1, item: 'Name: ', Value: 'Saim The Great',},
    { key: 2, item: 'Birthday: ', Value: '20/10/2024',},
    { key: 3, item: 'Country: ', Value: 'France',},
    { key: 4, item: 'Occupation: ', Value: 'Unemployed',},
    { key: 5, item: 'Email: ', Value: 'who@not.here',},
    { key: 6, item: 'Personality: ', Value: 'INFJ',},
  ]);

  return (
    <View style={ViewProfileStyles.body}>
      <Header/>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View style={ViewProfileStyles.cards} key={object.item}>
                <Text>{object.item} {object.Value}</Text>
              </View>
            )
          })
        }
      </ScrollView>
      <Footer/>
    </View>
  );
}
const ViewProfileStyles = StyleSheet.create({
  body: {
    //flex: 1,
    backgroundColor: '#rgb(221, 250, 254)',
    marginTop: '90px',
    marginBottom: '90px',
    width: '100%',
  },
  header: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    top: '0px',
    textAlign: 'left',
    position: 'fixed',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    paddingLeft: '10px',
    fontSize: '28px',
    color: 'white',
  },
  footer: {
    backgroundColor: '#rgb(0, 32, 73)',
    height: '90px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
  },
  cards: {
    color: 'black',
    backgroundColor: 'white',

    paddingTop: '20px',
    paddingLeft: '25px',
    paddingBottom: '20px',

    borderRadius: '30px',
    textAlign: 'left',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '20px',
    marginBottom: '40px',

    width: '90%',
  
  },
  input: {
    flex: 1,
    borderColor: 'white',
    color: 'grey',
  },
  nextPageButton: {
    backgroundColor: '#002B49',
    color: '#ffffff',
    fontSize: '20px',
    borderStyle: 'none',
    borderRadius: '40px',

    width: 'fitcontent',
    height: 'fitcontent',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DisplayScreen